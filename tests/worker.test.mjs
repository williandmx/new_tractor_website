import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import worker, { isRetiredWordpressRequest, redirectTarget } from "../src/worker.mjs";

const production = "https://newtractor.com.br";
const migration = JSON.parse(await readFile(new URL("../docs/migration/wordpress-single-redirects.json", import.meta.url), "utf8"));

test("all documented WordPress IDs resolve in one hop, for both query keys and hosts", async () => {
  for (const rule of migration.rules) {
    const id = rule.ref.replace("wordpress-", "");
    const target = rule.action_parameters.from_value.target_url.value;
    for (const host of ["newtractor.com.br", "www.newtractor.com.br"]) {
      for (const protocol of ["http", "https"]) {
        for (const path of ["/", "/index.php"]) {
          for (const key of ["p", "page_id"]) {
            for (const query of [`${key}=${id}`, `utm_source=google&${key}=${id}&utm_campaign=old`]) {
              for (const method of ["GET", "HEAD"]) {
                const request = new Request(`${protocol}://${host}${path}?${query}`, { method });
                const response = await worker.fetch(request, { ASSETS: { fetch() { throw new Error("Redirect must not read assets"); } } });
                assert.equal(response.status, 301);
                assert.equal(response.headers.get("Location"), target);
                assert.equal(response.headers.get("X-Frame-Options"), "SAMEORIGIN");
                assert.equal(response.headers.get("Cross-Origin-Opener-Policy"), "same-origin");
                assert.equal(await response.text(), "");
              }
            }
          }
        }
      }
    }
  }
});

test("unknown, duplicate and mixed WordPress IDs are not assigned a guessed destination", () => {
  for (const query of ["p=999", "p=13&p=13", "p=13&page_id=13", "p=13&page_id=477", "page_id=13&page_id=", "p=", "p=013", "p=13foo", "p=__proto__", "p=constructor", "utm_source=p%3D13"]) {
    assert.equal(redirectTarget(new Request(`${production}/?${query}`)), null, query);
  }
  assert.equal(redirectTarget(new Request(`${production}/empresa/?p=13`)), null);
  assert.equal(redirectTarget(new Request(`${production}/?p=13`, { method: "POST" })), null);
});

test("IDs WordPress retirados retornam 410 somente em consultas exatas de produção", async () => {
  for (const host of ["newtractor.com.br", "www.newtractor.com.br"]) {
    for (const protocol of ["http", "https"]) {
      for (const path of ["/", "/index.php"]) {
        for (const key of ["p", "page_id"]) {
          for (const id of ["2", "43", "44"]) {
            for (const method of ["GET", "HEAD"]) {
              const request = new Request(`${protocol}://${host}${path}?utm_source=google&${key}=${id}&utm_campaign=legacy`, { method });
              assert.equal(isRetiredWordpressRequest(request), true);
              const response = await worker.fetch(request, { ASSETS: { fetch() { throw new Error("410 não deve ler assets"); } } });
              assert.equal(response.status, 410, request.url);
              assert.equal(response.headers.get("Content-Type"), "text/html; charset=utf-8");
              assert.equal(response.headers.get("X-Robots-Tag"), "noindex, nofollow");
              assert.equal(response.headers.get("X-Content-Type-Options"), "nosniff");
              const body = await response.text();
              if (method === "HEAD") assert.equal(body, "");
              else {
                assert.match(body, /<h1>Conteúdo removido<\/h1>/);
                assert.match(body, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
                assert.match(body, /https:\/\/newtractor\.com\.br\/(?:contato\/)?/);
                assert.doesNotMatch(body, /(?:\?p=|page_id=|utm_|\b(?:2|43|44)\b)/);
              }
            }
          }
        }
      }
    }
  }
});

test("IDs retirados ambíguos, desconhecidos, fora do host/caminho ou método não viram 410", async () => {
  const cases = [
    `${production}/?p=2&p=2`,
    `${production}/?p=2&page_id=2`,
    `${production}/?p=2&page_id=43`,
    `${production}/?p=2&p=`,
    `${production}/?p=999`,
    `${production}/?p=02`,
    `${production}/?p=43foo`,
    `${production}/?p=`,
    `${production}/?utm_source=p%3D2`,
    `${production}/?page_id=44&page_id=44`,
    `${production}/empresa/?p=2`,
    `https://preview.workers.dev/?p=2`,
    `https://newtractor.com.br.example.org/?p=2`,
    `http://localhost:8788/?p=2`,
  ];
  for (const url of cases) {
    const request = new Request(url);
    assert.equal(isRetiredWordpressRequest(request), false, url);
    let assetReads = 0;
    const response = await worker.fetch(request, { ASSETS: { fetch: async () => { assetReads += 1; return new Response("asset"); } } });
    assert.equal(response.status, 200, url);
    assert.equal(assetReads, 1, url);
  }

  const post = new Request(`${production}/?p=2`, { method: "POST" });
  assert.equal(isRetiredWordpressRequest(post), false);
  const postResponse = await worker.fetch(post, { ASSETS: { fetch: async () => new Response("asset") } });
  assert.equal(postResponse.status, 200);
});

test("canonical redirects retain non-legacy paths and query, without open redirects", () => {
  for (const origin of ["http://newtractor.com.br", "http://www.newtractor.com.br", "https://www.newtractor.com.br"]) {
    assert.equal(redirectTarget(new Request(`${origin}/empresa/?utm_source=google&x=1`)), `${production}/empresa/?utm_source=google&x=1`);
    assert.equal(redirectTarget(new Request(`${origin}/sitemap.xml`)), `${production}/sitemap.xml`);
    assert.equal(new URL(redirectTarget(new Request(`${origin}//example.org/path`))).origin, production);
  }
  for (const host of ["newtractor.com.br.example.org", "preview.workers.dev", "localhost:8788"]) {
    assert.equal(redirectTarget(new Request(`https://${host}/?p=13`)), null);
  }
  assert.equal(redirectTarget(new Request(`${production}/sitemap.xml`)), null);
});

test("asset statuses, body and headers survive; every preview response is noindex", async () => {
  for (const status of [200, 206, 301, 404, 405]) {
    for (const origin of [production, "https://www.newtractor.com.br", "https://preview.workers.dev", "https://newtractor-site.pages.dev", "http://localhost:8788"]) {
      const isProduction = origin === production || origin === "https://www.newtractor.com.br";
      const request = new Request(`${origin}/sitemap.xml`, { method: "POST" });
      const assets = { fetch: async (received) => {
        assert.equal(received, request);
        return new Response("asset-body", { status, headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=60", "X-Frame-Options": "SAMEORIGIN" } });
      } };
      const response = await worker.fetch(request, { ASSETS: assets });
      assert.equal(response.status, status);
      assert.equal(await response.text(), "asset-body");
      assert.equal(response.headers.get("Content-Type"), "application/xml");
      assert.equal(response.headers.get("Cache-Control"), "public, max-age=60");
      assert.equal(response.headers.get("X-Frame-Options"), "SAMEORIGIN");
      assert.equal(response.headers.get("X-Robots-Tag"), isProduction ? null : "noindex, nofollow");
    }
  }
});

test("asset errors return retryable 503, never a successful empty page", async () => {
  const originalError = console.error;
  const logs = [];
  console.error = (message) => logs.push(message);
  try {
    for (const method of ["GET", "HEAD"]) {
      const response = await worker.fetch(new Request(`${production}/sitemap.xml?private=not-for-logs`, { method }), { ASSETS: { fetch: async () => { throw new Error("private upstream error"); } } });
      assert.equal(response.status, 503);
      assert.equal(response.headers.get("Cache-Control"), "no-store");
      assert.equal(response.headers.get("Retry-After"), "60");
      assert.equal(response.headers.get("X-Frame-Options"), "SAMEORIGIN");
      assert.match(response.headers.get("Permissions-Policy"), /camera=\(\)/);
      if (method === "HEAD") assert.equal(await response.text(), "");
    }
    assert.ok(logs.every((line) => line === '{"event":"asset_fetch_failed"}'));
  } finally {
    console.error = originalError;
  }
});
