const welcomeBtn  = document.getElementById('welcome-button');
const welcomePage = document.getElementById('welcome-page');
const seedPage    = document.getElementById('seed-page');

welcomeBtn.addEventListener('click', () => {
  welcomePage.hidden = true;
  seedPage.hidden    = false;
});
