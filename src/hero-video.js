// The poster is the complete no-JS experience. Media is requested only when
// visible and motion/data preferences allow it, or following an explicit play.
export function mountHeroFilm(container, env = window) {
  const video = container.querySelector("video");
  const toggle = container.querySelector("[data-film-toggle]");
  if (!video || !toggle) return;
  const doc = env.document;
  const motion = env.matchMedia("(prefers-reduced-motion: reduce)");
  const connection = env.navigator.connection;
  let visible = false;
  let userPaused = false;
  let userStarted = false;
  let failed = false;
  let pending = false;

  const wanted = () => !failed && visible && !doc.hidden && !userPaused &&
    (userStarted || (!motion.matches && !connection?.saveData));
  const label = () => {
    toggle.textContent = video.paused ? "Reproduzir vídeo" : "Pausar vídeo";
  };
  const reconcile = () => {
    if (!wanted()) {
      video.pause();
      label();
      return;
    }
    if (!video.getAttribute("src")) {
      video.src = env.matchMedia("(max-width: 760px)").matches
        ? video.dataset.mobile : video.dataset.desktop;
      video.muted = true;
    }
    if (!video.paused || pending) return;
    pending = true;
    Promise.resolve(video.play()).catch(() => {
      // Autoplay may be rejected. Keep the poster and offer an explicit play.
      userPaused = true;
    }).finally(() => {
      pending = false;
      if (!wanted()) video.pause();
      label();
    });
  };

  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    userPaused = !video.paused || pending;
    userStarted = !userPaused;
    reconcile();
  });
  video.addEventListener("playing", () => {
    if (!wanted()) { video.pause(); return; }
    container.classList.add("has-video");
    label();
  });
  video.addEventListener("pause", label);
  video.addEventListener("error", () => {
    failed = true;
    container.classList.remove("has-video");
    toggle.hidden = true;
  });
  doc.addEventListener("visibilitychange", reconcile);
  motion.addEventListener("change", () => {
    userStarted = false;
    reconcile();
  });
  connection?.addEventListener?.("change", reconcile);
  if (env.IntersectionObserver) {
    const observer = new env.IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      reconcile();
    }, { threshold: 0.05 });
    observer.observe(container);
  } else {
    visible = true;
    reconcile();
  }
}

if (typeof window !== "undefined") {
  const boot = () => {
    document.querySelectorAll("[data-hero-film]").forEach((hero) => mountHeroFilm(hero));
  };
  if (document.readyState === "complete") boot();
  else window.addEventListener("load", boot, { once: true });
}
