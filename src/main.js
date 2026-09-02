document.documentElement.classList.add("js");

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll("#site-nav a");
const consentBanner = document.querySelector("[data-consent-banner]");
const consentButtons = document.querySelectorAll("[data-consent]");
const resetConsent = document.querySelector("[data-reset-consent]");
const pageSurfaces = [
  document.querySelector("main"),
  document.querySelector(".site-footer"),
  document.querySelector(".whatsapp-float"),
  document.querySelector(".consent"),
].filter(Boolean);
const consentKey = "newtractor-analytics-consent-v1";
const gtmId = "GTM-T3RNZ98";

const setMenu = (open, { restoreFocus = false } = {}) => {
  if (!header || !navToggle) return;
  header.classList.toggle("nav-expanded", open);
  document.body.classList.toggle("nav-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  pageSurfaces.forEach((surface) => {
    if (open) surface.setAttribute("inert", "");
    else surface.removeAttribute("inert");
  });
  const label = navToggle.querySelector(".sr-only");
  if (label) label.textContent = open ? "Fechar menu" : "Abrir menu";
  if (open) {
    window.requestAnimationFrame(() => document.querySelector("#site-nav a")?.focus());
  } else if (restoreFocus) {
    navToggle.focus();
  }
};

navToggle?.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") !== "true";
  setMenu(open, { restoreFocus: !open });
});

navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle?.getAttribute("aria-expanded") === "true") {
    setMenu(false, { restoreFocus: true });
  }
});

const updateHeader = () => header?.classList.toggle("is-sticky", window.scrollY > 24);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const getConsent = () => {
  try {
    return window.localStorage.getItem(consentKey);
  } catch {
    return null;
  }
};

const saveConsent = (value) => {
  try {
    window.localStorage.setItem(consentKey, value);
  } catch {
    // A escolha permanece válida apenas nesta página quando o armazenamento está indisponível.
  }
};

const loadGtm = () => {
  if (document.querySelector(`script[data-gtm="${gtmId}"]`)) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.dataset.gtm = gtmId;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.append(script);
};

const applyConsent = (value) => {
  consentBanner?.setAttribute("hidden", "");
  document.body.classList.remove("consent-visible");
  if (value === "accepted") loadGtm();
};

const savedConsent = getConsent();
if (savedConsent) {
  applyConsent(savedConsent);
} else {
  consentBanner?.removeAttribute("hidden");
  document.body.classList.add("consent-visible");
}

consentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.consent;
    saveConsent(value);
    applyConsent(value);
  });
});

resetConsent?.addEventListener("click", () => {
  try {
    window.localStorage.removeItem(consentKey);
  } catch {
    // Sem armazenamento persistente, basta reabrir o painel nesta página.
  }
  consentBanner?.removeAttribute("hidden");
  document.body.classList.add("consent-visible");
  consentBanner?.querySelector("button")?.focus();
});

document.querySelectorAll("[data-analytics]").forEach((link) => {
  link.addEventListener("click", () => {
    if (getConsent() !== "accepted") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "site_cta_click",
      cta_name: link.dataset.analytics,
      page_path: window.location.pathname,
    });
  });
});
