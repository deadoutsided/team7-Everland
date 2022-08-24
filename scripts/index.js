const header = document.querySelector("header");
const menu = header.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const menuAccordions = document.querySelectorAll(".menu__accordion");
const navigationPanel = header.querySelector(".navigation");
const newsItem = document.querySelectorAll(".news__item");

  //Перекрашивание карточки новости в зависимости от наличия картинки в ней
newsItem.forEach(elem => {
    newsPic = elem.querySelector(".news__picture");
    if(!newsPic){
      elem.classList.add('news_without-picture');
    }
  })

const socProjTitle = document.querySelector(".soc-proj__title");
const socProjHighlight = document.querySelector(".soc-proj__highlight");
const socProjParagraph = document.querySelector(".soc-proj__paragraph");
const socProjPos = document.querySelector(".soc-proj__paragraph_bold");
const socProjBgs = document.querySelectorAll(".soc-proj__column")[1];
const sliderBtns = document.querySelectorAll(".button_type_slider");
const specProjTitle = document.querySelector(".special-proj__title");
const specProjPar = document.querySelectorAll(".special-proj__paragraph")[1];
const specProjImg = document.querySelector(".special-proj__img");
const specProjBaseImg = "special-proj__img ";
const socProjBaseBgs = "soc-proj__column ";
let socProjSliderCounter = 0;
let specProjSliderCounter = 0;
const supportSubmBtn = document.querySelector(".form__subm-btn_place_support");
const formData = document.querySelector(".form_data");

function handleFormSubmit(evt){
  evt.preventDefault();
  formData.reset();
}

formData.addEventListener("submit", handleFormSubmit);

const socProjFill = [
  {
    title: "— социальный предпринимательский проект",
    highlight: "Everland ",
    subtitle: "Мы работаем с 2016 года по России и СНГ и помогаем людям с инвалидностью устойчиво интегрироваться в открытый рынок труда ",
    bgs: "soc-proj__column_slide_everland",
    pos: "1/6"
  },
  {
    title: "Ipsum Lorem",
    highlight: "Ipsu Ipsu ",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae condimentum lorem. Praesent lobortis odio varius, hendrerit sem a, elementum risus. In hac habitasse platea dictumst. In felis erat, convallis ac turpis eu, tincidunt aliquet erat. Quisque ac euismod lorem.",
    bgs: "soc-proj__column_slide_cat",
    pos: "2/6"
  },
  {
    title: "lorem ipsum",
    highlight: "lorem ",
    subtitle: "Donec vitae nisl nisl. Morbi blandit enim eget enim finibus, vel vulputate enim maximus. Etiam pharetra tortor a neque ultricies fringilla. Maecenas sollicitudin dui vel quam ultrices dignissim. Nulla posuere.",
    bgs: "soc-proj__column_slide_cats",
    pos: "3/6"
  },
  {
    title: "Iprem losum",
    highlight: "Iprem ",
    subtitle: "Nulla euismod accumsan magna. Integer consequat tortor eu sodales rhoncus. Aliquam in fermentum ligula, non molestie neque. Aliquam vel erat blandit, volutpat tortor non, vehicula massa. Sed sodales tincidunt vulputate. Integer at congue quam. Fusce.",
    bgs: "soc-proj__column_slide_socr",
    pos: "4/6"
  },
  {
    title: "Quisque finibus quam",
    highlight: "Ecso ",
    subtitle: "Quisque finibus quam eget urna vulputate, vitae interdum ex sagittis. Ut vel leo eget eros lobortis ullamcorper. Donec eget neque.",
    bgs: "soc-proj__column_slide_dogs",
    pos: "5/6"
  },
  {
    title: "Nullam quis eros nisl",
    highlight: "Solar ",
    subtitle: "Sed volutpat felis ultrices vehicula tincidunt. Mauris egestas ultricies luctus. Quisque.",
    bgs: "soc-proj__column_slide_cosm",
    pos: "6/6"
  }
]

const specProjFill = [
  {
    title: "Фотопроект \n«Семья как семья»",
    paragraph: "Фотопроект Алексея Горшенина включает в себя восемь историй людей и семей, где один или оба супруга имеют инвалидность",
    img: "special-proj__img_fotoproj",
    alt: "Фото фотографа с собакой",
    src: "./images/special-proj__img.png"
  },
  {
    title: "Ipsum Lorem",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae condimentum lorem. Praesent lobortis odio varius, hendrerit sem a, elementum risus. In hac habitasse platea dictumst. In felis erat, convallis ac turpis eu, tincidunt aliquet erat.",
    img: "special-proj__img_cat",
    alt: "Кошка",
    src: "./images/imgForExample/exampleCat.jpg"
  },
  {
    title: "Iprem losum",
    paragraph: "Nulla euismod accumsan magna. Integer consequat tortor eu sodales rhoncus. Aliquam in fermentum ligula, non molestie neque. Aliquam vel erat blandit, volutpat tortor non, vehicula massa. Sed sodales tincidunt vulputate.",
    img: "special-proj__img_socr",
    alt: "Сократ",
    src: "./images/imgForExample/exampleSocr3.jpg"
  },
  {
    title: "Nullam quis eros nisl",
    paragraph: "Sed volutpat felis ultrices vehicula tincidunt. Mauris egestas ultricies luctus. Quisque.",
    img: "special-proj__img_cosm",
    alt: "Рисунок космонавта",
    src: "./images/imgForExample/exampleCosm5.jpg"
  }
]

function specProjSlider(num){
  specProjTitle.textContent = specProjFill[num].title;
  specProjPar.textContent = specProjFill[num].paragraph;
  specProjImg.removeAttribute("alt");
  specProjImg.removeAttribute("src");
  specProjImg.setAttribute("alt", specProjFill[num].alt);
  specProjImg.setAttribute("src", specProjFill[num].src);
}

function socProjSlider(num){
  socProjTitle.textContent = socProjFill[num].title;
  socProjTitle.prepend(socProjHighlight);
  socProjHighlight.textContent = socProjFill[num].highlight;
  socProjParagraph.textContent = socProjFill[num].subtitle;
  socProjPos.textContent = socProjFill[num].pos;
  socProjBgs.removeAttribute("class");
  socProjBgs.setAttribute("class", socProjBaseBgs + socProjFill[num].bgs);
}
sliderBtns[0].addEventListener('click',() =>{
  socProjSliderCounter--;
  if(socProjSliderCounter == -1){
    socProjSliderCounter = 5;
  }
  console.log(socProjSliderCounter);
  socProjSlider(socProjSliderCounter);
})

sliderBtns[1].addEventListener('click',() =>{
  socProjSliderCounter++;
  if(socProjSliderCounter == 6){
    socProjSliderCounter = 0;
  }
  console.log(socProjSliderCounter);
  socProjSlider(socProjSliderCounter);
})

sliderBtns[2].addEventListener('click',() => {
  specProjSliderCounter--;
  if(specProjSliderCounter == -1){
    specProjSliderCounter = 3;
  }
  specProjSlider(specProjSliderCounter);
})

sliderBtns[3].addEventListener('click',() => {
  specProjSliderCounter++;
  if(specProjSliderCounter == 4){
    specProjSliderCounter = 0;
  }
  specProjSlider(specProjSliderCounter);
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
const showNavigationPanel = () => {
  navigationPanel.classList.add("navigation_opened");
};
const hideNavigationPanel = () => {
  navigationPanel.classList.remove("navigation_opened");
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
menuButton.addEventListener("mouseover", () => {
  showNavigationPanel();
});
navigationPanel.addEventListener("mouseout", () => {
  hideNavigationPanel();
});
