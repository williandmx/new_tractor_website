const canonicalOrigin = "https://newtractor.com.br";
const productionHosts = new Set(["newtractor.com.br", "www.newtractor.com.br"]);
const securityHeaders = Object.freeze({
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "Cross-Origin-Opener-Policy": "same-origin",
});
const wordpressRoutes = Object.freeze({
  "470": "/empresa/",
  "13": "/servicos/manutencao-material-rodante/",
  "288": "/servicos/reforma-cacambas-conchas/",
  "286": "/servicos/monitoramento-material-rodante/",
  "477": "/contato/",
});
const retiredWordpressIds = new Set(["2", "43", "44"]);
const retiredResponseBody = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>Conteúdo removido | Grupo New Tractor</title></head><body><main><h1>Conteúdo removido</h1><p>Este endereço não corresponde a uma página ativa.</p><p><a href="https://newtractor.com.br/">Ir para a página inicial</a> · <a href="https://newtractor.com.br/contato/">Falar com o grupo</a></p></main></body></html>`;

function isProductionLegacyRequest(request) {
  const url = new URL(request.url);
  return productionHosts.has(url.hostname)
    && ["GET", "HEAD"].includes(request.method)
    && (url.pathname === "/" || url.pathname === "/index.php");
}

function exactWordpressId(url) {
  const ids = [...url.searchParams.getAll("p"), ...url.searchParams.getAll("page_id")];
  return ids.length === 1 ? ids[0] : null;
}

export function isRetiredWordpressRequest(request) {
  if (!isProductionLegacyRequest(request)) return false;
  return retiredWordpressIds.has(exactWordpressId(new URL(request.url)));
}

// Only unambiguous, documented WordPress URLs receive a service redirect.
export function redirectTarget(request) {
  const url = new URL(request.url);
  if (!productionHosts.has(url.hostname) || !["GET", "HEAD"].includes(request.method)) return null;

  if (url.pathname === "/" || url.pathname === "/index.php") {
    const id = exactWordpressId(url);
    if (id && Object.hasOwn(wordpressRoutes, id)) {
      return canonicalOrigin + wordpressRoutes[id];
    }
  }

  if (url.origin !== canonicalOrigin) {
    // Concatenation, not URL(path, base): a path starting // must not change hosts.
    return canonicalOrigin + url.pathname + url.search;
  }
  return null;
}

export default {
  async fetch(request, env) {
    if (isRetiredWordpressRequest(request)) {
      return new Response(request.method === "HEAD" ? null : retiredResponseBody, {
        status: 410,
        headers: {
          ...securityHeaders,
          "Content-Type": "text/html; charset=utf-8",
          "X-Robots-Tag": "noindex, nofollow",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    const target = redirectTarget(request);
    if (target) {
      return new Response(null, {
        status: 301,
        headers: {
          ...securityHeaders,
          Location: target,
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    let response;
    try {
      // Keep asset caching, MIME types, path redirects and real 404 responses.
      response = await env.ASSETS.fetch(request);
    } catch {
      // Do not log request URLs, query strings or contact details.
      console.error(JSON.stringify({ event: "asset_fetch_failed" }));
      response = new Response(request.method === "HEAD" ? null : "Serviço temporariamente indisponível.", {
        status: 503,
        headers: { ...securityHeaders, "Content-Type": "text/plain; charset=utf-8", "Retry-After": "60", "Cache-Control": "no-store" },
      });
    }

    if (!productionHosts.has(new URL(request.url).hostname)) {
      const previewResponse = new Response(response.body, response);
      previewResponse.headers.set("X-Robots-Tag", "noindex, nofollow");
      return previewResponse;
    }
    return response;
  },
};
