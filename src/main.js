document.documentElement.classList.add("js");

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll("#site-nav a");
const consentBanner = document.querySelector("[data-consent-banner]");
const consentButtons = document.querySelectorAll("[data-consent]");
const resetConsent = document.querySelector("[data-reset-consent]");
const pageSurfaces = [
  document.querySelector(".company-nav"),
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

// Release the mobile menu's inert state when rotating/resizing into desktop navigation.
window.matchMedia("(max-width: 860px)").addEventListener("change", (event) => {
  if (!event.matches) setMenu(false);
});

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
    const value = window.localStorage.getItem(consentKey);
    if (value === "accepted") {
      // Não reutilizar um aceite que o navegador já não permite revogar.
      const probeKey = `${consentKey}-writable`;
      window.localStorage.setItem(probeKey, "1");
      window.localStorage.removeItem(probeKey);
    }
    return value === "accepted" || value === "essential" ? value : null;
  } catch {
    return null;
  }
};

let currentConsent = getConsent();

const saveConsent = (value) => {
  currentConsent = value;
  try {
    window.localStorage.setItem(consentKey, value);
  } catch {
    // A escolha permanece válida apenas nesta página quando o armazenamento está indisponível.
    if (value !== "accepted") {
      try {
        window.localStorage.removeItem(consentKey);
      } catch {
        // O navegador também pode impedir a remoção da preferência anterior.
      }
    }
  }
};

function pushTagCommand() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

const updateTagConsent = (value, command = "update") => {
  pushTagCommand("consent", command, {
    analytics_storage: value === "accepted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
};

const loadGtm = () => {
  if (document.querySelector(`script[data-gtm="${gtmId}"]`)) return;
  updateTagConsent("essential", "default");
  updateTagConsent("accepted");
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.dataset.gtm = gtmId;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.append(script);
};

const applyConsent = (value) => {
  currentConsent = value;
  consentBanner?.setAttribute("hidden", "");
  document.body.classList.remove("consent-visible");
  if (value === "accepted") {
    loadGtm();
  } else if (document.querySelector(`script[data-gtm="${gtmId}"]`)) {
    updateTagConsent("essential");
    // Recarregar encerra também o runtime de tags que já tenham sido executadas.
    window.location.reload();
  }
};

const showConsent = () => {
  consentBanner?.removeAttribute("hidden");
  document.body.classList.add("consent-visible");
};

if (currentConsent) {
  applyConsent(currentConsent);
} else {
  showConsent();
}

consentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.consent;
    saveConsent(value);
    applyConsent(value);
  });
});

resetConsent?.addEventListener("click", () => {
  showConsent();
  consentBanner?.querySelector("button")?.focus();
});

window.addEventListener("storage", (event) => {
  if (event.key !== consentKey && event.key !== null) return;
  const nextConsent = getConsent();
  if (nextConsent === currentConsent) return;
  applyConsent(nextConsent);
  if (!nextConsent) showConsent();
});

document.querySelectorAll("[data-analytics]").forEach((link) => {
  link.addEventListener("click", () => {
    if (currentConsent !== "accepted") return;
    const ctaName = link.dataset.analytics;
    const channel = { whatsapp: "whatsapp", email: "email", telefone: "phone", mapa: "map" }[ctaName.split("_")[0]] ?? "site";
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "site_cta_click",
      cta_name: ctaName,
      cta_channel: channel,
      page_path: window.location.pathname,
    });
  });
});
