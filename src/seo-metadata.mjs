import { minasCities } from "./minas-cities.mjs";

const BRAND = "Grupo New Tractor";
export const MAX_TITLE_LENGTH = 65;
const TITLE_REVIEW_DATE = "2026-09-11";

// The city-service set is intentionally scoped separately from the reviewed
// non-regional routes below.  Existing titles at or below the guardrail keep
// their editorial date even when the source title still needs brand
// composition at build time.
const TITLE_REVIEW_ROUTES = new Set([
  "/rodantes/",
  "/guias/",
  "/guias/avaliacao-cilindros-hidraulicos/",
  "/guias/cotacao-pecas-maquinas-pesadas/",
  "/servicos/usinagem-componentes-maquinas-pesadas/",
  "/setores/florestal/",
  "/componentes/correntes-sapatas-esteiras/",
  "/guias/folgas-pinos-buchas-alojamentos/",
  "/equipamentos/tratores-de-esteira/",
  "/equipamentos/pas-carregadeiras/",
  "/atuacao/minas-gerais/",
  "/rodantes/setores/florestal/",
  "/rodantes/setores/agronegocio/",
  "/hidrautractor/setores/mineracao/",
  "/hidrautractor/setores/florestal/",
  "/hidrautractor/setores/industrial/",
  "/usinagem/setores/florestal/",
  "/calderaria/setores/mineracao/",
  "/calderaria/setores/florestal/",
  "/calderaria/setores/agronegocio/",
  "/calderaria/setores/industrial/",
  "/parts/setores/florestal/",
  "/services/setores/florestal/",
  "/services/setores/agronegocio/",
  "/techtractor/setores/mineracao/",
  "/techtractor/setores/florestal/",
  "/techtractor/setores/industrial/",
  "/hidrautractor/recuperacao-cilindros-hidraulicos/",
  "/hidrautractor/fabricacao-cilindros-hidraulicos/",
]);

const FRONT_LABELS = Object.freeze({
  rodantes: "Rodantes",
  hidrautractor: "HidrauTractor",
  usinagem: "Usinagem",
  calderaria: "Calderaria",
  parts: "Parts",
  services: "Services",
  techtractor: "TechTractor",
});

const REGIONAL_THEMES = Object.freeze({
  rodantes: { full: "Material rodante", short: "Rodante" },
  hidrautractor: { full: "Cilindros hidráulicos", short: "Cilindros" },
  usinagem: { full: "Usinagem pesada", short: "Usinagem" },
  calderaria: { full: "Caldeiraria pesada", short: "Caldeiraria" },
  parts: { full: "Peças sob demanda", short: "Peças" },
  services: { full: "Serviço de campo", short: "Campo" },
  techtractor: { full: "Tecnologia de manutenção", short: "Tecnologia" },
});

const SECTOR_PHRASES = Object.freeze({
  mineracao: "para mineração",
  florestal: "para o setor florestal",
  agro: "para o agronegócio",
  industrial: "para a indústria",
});

const SHORT_SECTOR_PHRASES = Object.freeze({
  mineracao: "na mineração",
  florestal: "no setor florestal",
  agro: "no agronegócio",
  industrial: "na indústria",
});

const SECTOR_SUBJECT_OVERRIDES = Object.freeze({
  services: {
    florestal: "Serviço de campo florestal",
    agro: "Serviço de campo no agronegócio",
  },
});

// These routes have a clear editorial owner even though their page.active value
// is a generic navigation section such as "servicos" or "guias".
const ROUTE_FRONT = Object.freeze({
  "/servicos/manutencao-material-rodante/": "rodantes",
  "/servicos/reforma-cacambas-conchas/": "calderaria",
  "/servicos/monitoramento-material-rodante/": "rodantes",
  "/servicos/usinagem-componentes-maquinas-pesadas/": "usinagem",
  "/guias/avaliacao-cilindros-hidraulicos/": "hidrautractor",
  "/guias/avaliacao-cacambas-conchas/": "calderaria",
  "/guias/inspecao-material-rodante/": "rodantes",
  "/guias/cotacao-pecas-maquinas-pesadas/": "parts",
  "/guias/folgas-pinos-buchas-alojamentos/": "usinagem",
  "/componentes/": "rodantes",
  "/componentes/rodas-guia/": "rodantes",
  "/componentes/roletes-de-esteira/": "rodantes",
  "/componentes/correntes-sapatas-esteiras/": "rodantes",
  "/equipamentos/escavadeiras/": "hidrautractor",
  "/equipamentos/tratores-de-esteira/": "hidrautractor",
  "/equipamentos/pas-carregadeiras/": "hidrautractor",
  "/hidrautractor/recuperacao-cilindros-hidraulicos/": "hidrautractor",
  "/hidrautractor/fabricacao-cilindros-hidraulicos/": "hidrautractor",
});

const SUBJECT_OVERRIDES = Object.freeze({
  "/": "Soluções industriais para sua frota",
  "/pessoas/": "Pessoas que movem a operação",
  "/rodantes/": "Material rodante e manutenção",
  "/equipamentos/": "Equipamentos de linha amarela",
  "/componentes/": "Componentes de material rodante",
  "/componentes/rodas-guia/": "Recuperação de rodas-guia",
  "/componentes/roletes-de-esteira/": "Recuperação de roletes de esteira",
  "/componentes/correntes-sapatas-esteiras/": "Correntes e sapatas de esteiras",
  "/guias/": "Guias de manutenção de linha amarela",
  "/guias/avaliacao-maquinas-linha-amarela/": "Avaliação de máquinas de linha amarela",
  "/guias/avaliacao-cilindros-hidraulicos/": "Avaliação de cilindros",
  "/guias/avaliacao-cacambas-conchas/": "Avaliação de caçambas e conchas",
  "/guias/inspecao-material-rodante/": "Inspeção de material rodante",
  "/guias/cotacao-pecas-maquinas-pesadas/": "Cotação de peças: máquinas pesadas",
  "/guias/folgas-pinos-buchas-alojamentos/": "Folgas: pinos, buchas, alojamentos",
  "/equipamentos/escavadeiras/": "Cilindros de escavadeiras",
  "/equipamentos/tratores-de-esteira/": "Cilindros: trator de esteira",
  "/equipamentos/pas-carregadeiras/": "Cilindros: pás carregadeiras",
  "/hidrautractor/recuperacao-cilindros-hidraulicos/": "Recuperação de cilindros hidráulicos",
  "/hidrautractor/fabricacao-cilindros-hidraulicos/": "Fabricação de cilindros hidráulicos",
  "/servicos/usinagem-componentes-maquinas-pesadas/": "Mandrilhamento e usinagem em BH",
  "/atuacao/minas-gerais/": "Manutenção de máquinas em Minas Gerais",
  "/setores/florestal/": "Manutenção para operações florestais",
});

const SUBJECT_ALTERNATIVES = Object.freeze({
  "/hidrautractor/recuperacao-cilindros-hidraulicos/": ["Recuperação de cilindros"],
  "/hidrautractor/fabricacao-cilindros-hidraulicos/": ["Fabricação de cilindros"],
});

const KNOWN_BRAND_PART = /^(?:Grupo\s+New\s+Tractor(?:\s*[—-]\s*[^|]+)?|New\s+Tractor(?:\s+(?:Rodantes|Usinagem|Calderaria|Parts|Services))?|HidrauTractor|TechTractor|Guia\s+New\s+Tractor)$/i;

/** Remove only the known brand decorations from an existing title. */
export function subjectFromTitle(title) {
  const value = String(title ?? "").trim();
  const parts = value.split("|").map((part) => part.trim()).filter(Boolean);
  if (parts.length > 1 && KNOWN_BRAND_PART.test(parts[0])) return parts.slice(1).join(" | ").trim();
  if (parts.length > 1 && KNOWN_BRAND_PART.test(parts.at(-1))) return parts.slice(0, -1).join(" | ").trim();
  return value;
}

function frontForPage(page) {
  if (page.regionalKind === "city-service" || page.regionalKind === "sector-service") return page.specialty;
  if (ROUTE_FRONT[page.route]) return ROUTE_FRONT[page.route];
  if (page.route?.endsWith("/") && /^\/(rodantes|hidrautractor|usinagem|calderaria|parts|services|techtractor)\/$/.test(page.route)) {
    return page.route.slice(1, -1);
  }
  return null;
}

function cityForPage(page) {
  const city = minasCities.find((entry) => entry.slug === page.municipality);
  if (!city) throw new Error(`Município regional ausente no dataset: ${page.municipality}`);
  return city.name;
}

function frontTitle(front, subject, alternatives = []) {
  const label = FRONT_LABELS[front];
  if (!label) throw new Error(`Frente SEO desconhecida: ${front}`);
  const candidates = Array.isArray(subject) ? subject : [subject, ...alternatives];
  const candidate = candidates.find((value) => `${BRAND} — ${label} | ${value}`.length <= MAX_TITLE_LENGTH);
  if (!candidate) throw new Error(`Título da frente acima do limite sem alternativa: ${front} / ${subject}`);
  return `${BRAND} — ${label} | ${candidate}`;
}

function regionalCityTitle(front, city) {
  const theme = REGIONAL_THEMES[front];
  if (!theme) throw new Error(`Tema regional ausente: ${front}`);
  const candidates = [
    `${theme.full} em ${city}`,
    `${theme.full}: ${city}`,
    `${theme.short} em ${city}`,
    `${theme.short}: ${city}`,
  ];
  const candidate = candidates.find((subject) => `${BRAND} | ${subject}`.length <= MAX_TITLE_LENGTH);
  if (!candidate) throw new Error(`Título regional acima do limite sem alternativa: ${front} / ${city}`);
  return `${BRAND} | ${candidate}`;
}

function regionalSectorTitle(front, sector) {
  const theme = REGIONAL_THEMES[front];
  const phrase = SECTOR_PHRASES[sector];
  const shortPhrase = SHORT_SECTOR_PHRASES[sector];
  if (!theme || !phrase || !shortPhrase) throw new Error(`Contexto setorial ausente: ${front} / ${sector}`);
  const override = SECTOR_SUBJECT_OVERRIDES[front]?.[sector];
  if (override) return frontTitle(front, override);
  return frontTitle(front, [
    `${theme.full} ${phrase}`,
    `${theme.short} ${phrase}`,
    `${theme.full} ${shortPhrase}`,
    `${theme.short} ${shortPhrase}`,
  ]);
}

function subjectFor(page) {
  if (Object.hasOwn(SUBJECT_OVERRIDES, page.route)) return SUBJECT_OVERRIDES[page.route];
  return subjectFromTitle(page.title);
}

/**
 * Return a page with a brand-first title. The input page is never mutated;
 * descriptions, body/H1, schema fragments and offer metadata remain intact.
 */
export function applySeoMetadata(page) {
  if (!page || typeof page !== "object") throw new TypeError("applySeoMetadata espera uma página");

  let title;
  if (page.route === "/") {
    title = `${BRAND} | ${SUBJECT_OVERRIDES["/"]}`;
  } else if (page.regionalKind === "city-service") {
    title = regionalCityTitle(page.specialty, cityForPage(page));
  } else if (page.regionalKind === "sector-service") {
    title = regionalSectorTitle(page.specialty, page.sector);
  } else {
    const front = frontForPage(page);
    const subject = subjectFor(page);
    title = front ? frontTitle(front, subject, SUBJECT_ALTERNATIVES[page.route]) : `${BRAND} | ${subject}`;
  }

  if (title === page.title) return page;
  const titleWasReviewed = page.regionalKind === "city-service" || TITLE_REVIEW_ROUTES.has(page.route);
  return {
    ...page,
    title,
    // Source generators still carry the pre-composition title.  Keep their
    // existing public review date unless this route is in the explicit title
    // review scope above; this preserves dates for public titles unchanged by
    // the compacting pass while making reviewed title edits observable.
    lastModified: titleWasReviewed ? TITLE_REVIEW_DATE : "2026-09-10",
  };
}

export { FRONT_LABELS, REGIONAL_THEMES, ROUTE_FRONT, SECTOR_PHRASES };
