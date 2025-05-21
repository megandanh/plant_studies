import { state } from './app-state.js';

const minusBtn = document.getElementById('minus-task');
const plusBtn = document.getElementById('plus-task');

const taskCount = document.getElementById('task-count');
const nextBtn = document.getElementById('task-num-sub');

const taskPage = document.getElementById('task-number-page');
const plantPage = document.getElementById('plant-page');

taskCount.innerText = state.numTasks;

minusBtn.addEventListener('click', () => {
    if (state.numTasks > 0) {
        state.numTasks--;
        taskCount.innerText = state.numTasks;
    }
})

plusBtn.addEventListener('click', () => {
    if (state.numTasks < 5) {
        state.numTasks++;
        taskCount.innerText = state.numTasks;
    }
})

nextBtn.addEventListener('click', () => {
    taskPage.hidden = true;
    plantPage.hidden = false;
})