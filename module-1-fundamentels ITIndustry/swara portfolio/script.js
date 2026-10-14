"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  siteMenu.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

siteMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

if (window.AOS) {
  AOS.init({
    duration: 750,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
    disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  });
} else {
  document.querySelectorAll("[data-aos]").forEach((element) => {
    element.removeAttribute("data-aos");
  });
}
