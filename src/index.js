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
