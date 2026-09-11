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

if (motionQuery.matches) {
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
    { threshold: 0.14, rootMargin: "0px 0px -7% 0px" }
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
