import { state } from './app-state.js';

let index = 0;
let wateringImg = ["img/watering0.jpg", "img/watering1.jpg",
                   "img/watering2.jpg", "img/watering3.jpg",
                   "img/watering4.jpg"];
let intervalId = null;
let cycles = 0;

const plantPage = document.getElementById("plant-page");
const waterImgLoop = document.getElementById("watering-ani");
const goStudyBtn = document.getElementById("go-study");

const timerStudy = document.getElementById("timer-study-page");
const taskStudy = document.getElementById("task-study-page");

waterImgLoop.addEventListener('click', () => {
    if (intervalId !== null) return;
    
    intervalId = setInterval(() => {
        index = (index + 1) % wateringImg.length;
        waterImgLoop.src = wateringImg[index];

        if (index ===0) {
            cycles++;
            if (cyclesCount === 3) {
                clearInterval(intervalId);
                intervalId = null;
                cycles = 0;
            }
        }
    }, 700);
});

goStudyBtn.addEventListener('click', () => {
    plantPage.hidden = true;

    if (state.sessType == 1) taskStudy.hidden = false;
    if (state.sessType == 2) timerStudy.hidden = false;
})

