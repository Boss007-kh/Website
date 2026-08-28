const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("#site-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".cake-card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(btn => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });
    filter.classList.add("active");
    filter.setAttribute("aria-pressed", "true");

    const selected = filter.dataset.filter;
    cards.forEach(card => {
      card.hidden = selected !== "all" && card.dataset.category !== selected;
    });
  });
});
