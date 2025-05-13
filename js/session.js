import { state } from './app‑state.js';

document.addEventListener('DOMContentLoaded', () => {
  const sessionPage = document.getElementById('session-page');
  const sessBtn     = document.getElementById('session-button');

  const taskOpt   = document.getElementById('task-opt');   // “Task List”
  const timerOpt  = document.getElementById('timer-opt');  // “Timer”

  // ----- click handlers for the two choices -------------------------------
  taskOpt.addEventListener('click', () => {
    state.sessType = 1;
    taskOpt.style.borderColor = 'green';
  });

  timerOpt.addEventListener('click', () => {
    state.sessType = 2;
    timerOpt.style.borderColor = 'green';
  });

  // ----- Continue button ---------------------------------------------------
  sessBtn.addEventListener('click', () => {
    if (state.sessType < 0) return; // still no choice
    sessionPage.hidden = true;
    // (show the next page here when you build it)
  });
});