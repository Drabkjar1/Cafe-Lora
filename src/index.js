import './style.css';

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');
const navLinksElm = document.querySelectorAll('nav a');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

navLinksElm.forEach((elm) => {
  elm.addEventListener('click', () => {
    navElm.classList.add('nav-closed');
  });
});

const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink__cup');
let ordered = false;

orderBtnElm.addEventListener('click', () => {
  if (ordered === false) {
    orderBtnElm.textContent = 'Zrušit';
    drinkCupElm.classList.add('drink__cup--selected');
    ordered = true;
  } else if (ordered === true) {
    orderBtnElm.textContent = 'Objednat';
    drinkCupElm.classList.remove('drink__cup--selected');
    ordered = false;
  }
});
