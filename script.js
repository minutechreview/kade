const nav = document.getElementById("site-nav");
const toggle = document.querySelector(".nav-toggle");

function setNav(open) {
  if (!nav || !toggle) return;
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
}

toggle?.addEventListener("click", () => {
  setNav(!nav.classList.contains("is-open"));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setNav(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setNav(false);
});

const revealNodes = () => document.querySelectorAll("[data-reveal]");

function revealAll() {
  revealNodes().forEach((el) => el.classList.add("is-revealed"));
}

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (motionQuery.matches || !("IntersectionObserver" in window)) {
  // Reduced motion, or a browser that cannot observe: show everything outright
  // rather than leaving the page parked at opacity 0.
  revealAll();
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-revealed");
        io.unobserve(entry.target);
      }
    },
    // threshold 0 with the bottom edge pulled up: a section starts rising once
    // it is genuinely on screen, and this cannot stall on a block taller than
    // the viewport the way a ratio threshold can.
    { threshold: 0, rootMargin: "0px 0px -12% 0px" }
  );

  revealNodes().forEach((el) => io.observe(el));

  const onMotionChange = (event) => {
    if (!event.matches) return;
    io.disconnect();
    revealAll();
  };

  if (typeof motionQuery.addEventListener === "function") {
    motionQuery.addEventListener("change", onMotionChange);
  } else if (typeof motionQuery.addListener === "function") {
    motionQuery.addListener(onMotionChange);
  }
}

// The sticky bottom bar duplicates the hero's "Start Kade" button, so it stays
// hidden until the hero actions have scrolled out of view.
const dock = document.querySelector("[data-dock]");
const heroActions = document.querySelector(".hero-actions");

if (dock && heroActions) {
  if ("IntersectionObserver" in window) {
    const dockObserver = new IntersectionObserver(
      ([entry]) => {
        dock.hidden = entry.isIntersecting;
      },
      { rootMargin: "0px 0px -120px 0px" }
    );
    dockObserver.observe(heroActions);
  } else {
    dock.hidden = false;
  }
}
