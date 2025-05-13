import { state } from './app‑state.js';

document.addEventListener('DOMContentLoaded', () => {
  const seedPage    = document.getElementById('seed-page');
  const seedBtn     = document.getElementById('seed-button');
  const sessionPage = document.getElementById('session-page');

  // --- plant cards ---------------------------------------------------------
  const plantCards = [
    document.getElementById('lemon-tree-opt'),      // 0
    document.getElementById('sunflower-opt'),       // 1
    document.getElementById('tulip-opt'),           // 2
    document.getElementById('venus-flytrap-opt'),   // 3
    document.getElementById('strawberry-bush-opt'), // 4
    document.getElementById('tomato-vine-opt')      // 5
  ];

  plantCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      state.selectedPlant = index;
      card.style.borderColor = 'green';   // highlight this card
      // (keeping the original behaviour: we do NOT clear other green borders)
    });
  });

  // --- Select button -------------------------------------------------------
  seedBtn.addEventListener('click', () => {
    if (state.selectedPlant < 0) return; // nothing chosen yet
    seedPage.hidden    = true;
    sessionPage.hidden = false;
  });
});