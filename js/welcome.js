import { state } from './app‑state.js';   // (not used here yet, but handy later)

document.addEventListener('DOMContentLoaded', () => {
  const welcomeBtn  = document.getElementById('welcome-button');
  const welcomePage = document.getElementById('welcome-page');
  const seedPage    = document.getElementById('seed-page');

  welcomeBtn.addEventListener('click', () => {
    welcomePage.hidden = true;
    seedPage.hidden    = false;
  });
});