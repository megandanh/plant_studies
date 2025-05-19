import { state } from './app-state.js';

console.log('> session.js loaded – sessType is', state.sessType);


const sessionPage = document.getElementById('session-page');
const sessBtn     = document.getElementById('session-button');

const taskOpt   = document.getElementById('task-opt');   
const timerOpt  = document.getElementById('timer-opt');  

const taskPage = document.getElementById('task-number-page');
const timerPage = document.getElementById('edit-timer-page');

// ----- click handlers for the two choices -------------------------------
taskOpt.addEventListener('click', () => {
  state.sessType = 1;
  taskOpt.style.borderColor = 'rgb(77, 251, 106)';
  timerOpt.style.borderColor = 'rgb(105, 101, 101)';
});

timerOpt.addEventListener('click', () => {
  state.sessType = 2;
  timerOpt.style.borderColor = 'rgb(77, 251, 106)';
  taskOpt.style.borderColor = 'rgb(105, 101, 101)';
});

// ----- Continue button ---------------------------------------------------
sessBtn.addEventListener('click', () => {
  if (state.sessType < 0) return; // still no choice
  sessionPage.hidden = true;

  if (state.sessType == 1) taskPage.hidden = false;

  if (state.sessType == 2) timerPage.hidden = false;

});