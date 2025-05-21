import { state } from './app-state.js';

const minusTimeBtn = document.getElementById('minus-time');
const plusTimeBtn = document.getElementById('plus-time');

const sessionLength = document.getElementById('timer-len');
const nextBtn = document.getElementById('timer-sub');

const timerPage = document.getElementById('edit-timer-page');
const plantPage = document.getElementById('plant-page');

sessionLength.innerText = state.sessTimeLen;

minusTimeBtn.addEventListener('click', () => {
    if (state.sessTimeLen > 0) {
        state.sessTimeLen--;
        sessionLength.innerText = state.sessTimeLen;
    }
})

plusTimeBtn.addEventListener('click', () => {
    if (state.sessTimeLen < 120) {
        state.sessTimeLen++;
        sessionLength.innerText = state.sessTimeLen;
    }
})

nextBtn.addEventListener('click', () => {
    timerPage.hidden = true;
    plantPage.hidden = false;
})