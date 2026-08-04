document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initSmoothNavClose();
  setCurrentYear();
});

// Mobiles Menü öffnen/schließen
function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Menü nach Klick auf einen Link automatisch schließen (mobil)
function initSmoothNavClose() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      const toggle = document.getElementById("navToggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Aktuelles Jahr im Footer einsetzen
function setCurrentYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
