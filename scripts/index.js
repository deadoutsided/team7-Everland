const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");

const openMenu = () => {
  menuButton.classList.add("menu-button_active");
  menu.classList.add("menu_opened");
};
const closeMenu = () => {
  menuButton.classList.remove("menu-button_active");
  menu.classList.remove("menu_opened");
};

menuButton.addEventListener("click", () => {
  menuButton.classList.contains("menu-button_active") ? closeMenu() : openMenu();
});
