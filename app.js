const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideNav = document.getElementById("sideNav");
const backdrop = document.getElementById("backdrop");

function openNav() {
  sideNav.classList.add("is-open");
  sideNav.setAttribute("aria-hidden", "false");
  menuBtn.setAttribute("aria-expanded", "true");
  backdrop.hidden = false;
}

function closeNav() {
  sideNav.classList.remove("is-open");
  sideNav.setAttribute("aria-hidden", "true");
  menuBtn.setAttribute("aria-expanded", "false");
  backdrop.hidden = true;
}

menuBtn?.addEventListener("click", openNav);
closeBtn?.addEventListener("click", closeNav);
backdrop?.addEventListener("click", closeNav);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeNav();
});

document.getElementById("year").textContent = new Date().getFullYear();