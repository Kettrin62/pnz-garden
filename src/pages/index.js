// находим элемент body
const bodyElement = document.querySelector('.page');
// находим контейнер с меню
const menuElement = bodyElement.querySelector('.menu');
// находим кнопку меню
const menuButton = bodyElement.querySelector('.button-menu');
// находим кнопку закрытия меню
const menuCloseButton = bodyElement.querySelector('.menu__button-close');
// находим кнопки категорий
const arrButtonElement = bodyElement.querySelectorAll('.categories__button');

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper__pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
});

// кнопка меню в мобильной версии
// функция открытия меню
function openMenu() {
  menuElement.classList.add('menu_opened');
}

// функция закрытия меню
function closeMenu() {
  menuElement.classList.remove('menu_opened');
}

// обработчик клика по кнопке меню
menuButton.addEventListener('click', () => {
  openMenu();
});

// обработчик клика по кнопке закрытия меню
menuCloseButton.addEventListener('click', () => {
  closeMenu();
});


// выпадающая кнопка категорий
// функция открытия списка кнопок
function openButtons() {

}