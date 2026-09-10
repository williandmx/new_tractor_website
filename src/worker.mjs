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

// Only unambiguous, documented WordPress URLs receive a service redirect.
export function redirectTarget(request) {
  const url = new URL(request.url);
  if (!productionHosts.has(url.hostname) || !["GET", "HEAD"].includes(request.method)) return null;

  if (url.pathname === "/" || url.pathname === "/index.php") {
    const ids = [...url.searchParams.getAll("p"), ...url.searchParams.getAll("page_id")];
    if (ids.length === 1 && Object.hasOwn(wordpressRoutes, ids[0])) {
      return canonicalOrigin + wordpressRoutes[ids[0]];
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
