import { refs } from './refs';
let darkTheme = localStorage.getItem('darkTheme');

const darkThemeToggle = document.querySelector('#dark-theme');

const enableDarkTheme = () => {
  refs.theme.classList.add('darktheme');
  localStorage.setItem('darkTheme', 'enabled');
};

const disableDarkTheme = () => {
  refs.theme.classList.remove('darktheme');
  localStorage.setItem('darkTheme', null);
};

darkThemeToggle.addEventListener('click', () => {
  darkTheme = localStorage.getItem('darkTheme');
  if (darkTheme !== 'enabled') {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
});

const day = document.querySelector('.light');
const night = document.querySelector('.dark');

darkThemeToggle.addEventListener('click', () => {
  day.classList.toggle('visible');
  night.classList.toggle('visible');
});

if (darkTheme === 'enabled') {
  enableDarkTheme();
  day.classList.toggle('visible');
  night.classList.toggle('visible');
}