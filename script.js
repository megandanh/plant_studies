document.addEventListener('DOMContentLoaded', () => {
    const welcomeBtn = document.getElementById('welcome-button');
    const welcomePage   = document.getElementById('welcome-page');
    const seedPage  = document.getElementById('seed-page');
    const cards     = document.querySelectorAll('.choice-card');
    const selectBtn = document.getElementById('plant-selector');
  
    let selectedPlant = null;
  
    // 1) Welcome → Seed Selection
    welcomeBtn.addEventListener('click', () => {
      welcomePage.hidden  = true;
      seedPage.hidden = false;
    });
  
  });isn