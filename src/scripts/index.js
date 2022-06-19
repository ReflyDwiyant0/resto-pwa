/* eslint-disable array-callback-return */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const humbergerButton = document.getElementById('humberger-button');
const drawer = document.getElementById('drawer');
const restoKatalog = document.querySelector('.resto-katalogs');

const app = new App({
  button: humbergerButton,
  drawer,
  content: restoKatalog,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
