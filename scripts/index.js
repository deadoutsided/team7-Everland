const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const menuAccordions = document.querySelectorAll(".menu__accordion");
const newsItem = document.querySelectorAll(".news__item");

  //Перекрашивание карточки новости в зависимости от наличия картинки в ней
newsItem.forEach(elem => {
    newsPic = elem.querySelector(".news__picture");
    if(!newsPic){
      elem.classList.add('news_without-picture');
    }
  })


const openMenu = () => {
  menuButton.classList.add("menu-button_active");
  menu.classList.add("menu_opened");
};
const closeMenu = () => {
  menuButton.classList.remove("menu-button_active");
  menu.classList.remove("menu_opened");
};
const openMenuAccordion = (menuAccordion) => {
  menuAccordions.forEach((accordion) => closeMenuAccordion(accordion));

  const accordionTitle = menuAccordion.querySelector(".menu__title");

  menuAccordion.classList.add("menu__accordion_active");
  accordionTitle.classList.add("menu__title_active");
};
const closeMenuAccordion = (menuAccordion) => {
  const accordionTitle = menuAccordion.querySelector(".menu__title");

  menuAccordion.classList.remove("menu__accordion_active");
  accordionTitle.classList.remove("menu__title_active");
};

menuButton.addEventListener("click", () => {
  menuButton.classList.contains("menu-button_active")
    ? closeMenu()
    : openMenu();
});
menuAccordions.forEach((accordion) => {
  const accordionTitle = accordion.querySelector(".menu__title");

  accordionTitle.addEventListener("click", () => {
    if (window.innerWidth >= 767) return;
    accordionTitle.classList.contains("menu__title_active")
      ? closeMenuAccordion(accordion)
      : openMenuAccordion(accordion);
  });
});
