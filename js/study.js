import { state } from './app-state.js';

// Timer Countdown Elemens
const minutesVal = document.getElementById("study-minute-update")
const secondsVal = document.getElementById("study-sec-update")

minutesVal.innerText = state.sessTimeLen;
secondsVal.innerText = state.sessTimeLenSec;

// Initialize display
let totalSeconds = state.sessTimeLen * 60; // convert minutes → seconds
updateDisplay();

function updateDisplay() {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;

  minutesVal.innerText = String(mins).padStart(2, '0');
  secondsVal.innerText = String(secs).padStart(2, '0');
}

// Start countdown
function startCountdown() {
  const interval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    } else {
      clearInterval(interval);
      alert("Time’s up! 🎉");
    }
  }, 1000);
}

window.addEventListener('DOMContentLoaded', startCountdown);
