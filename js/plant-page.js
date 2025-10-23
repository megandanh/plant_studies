import { state } from './app-state.js';

let index = 0;
let wateringImg = [
  "img/watering0.jpg",
  "img/watering1.jpg",
  "img/watering2.jpg",
  "img/watering3.jpg",
  "img/watering4.jpg"
];

const plantPage = document.getElementById("plant-page");
const waterImgLoop = document.getElementById("watering-ani");
const goStudyBtn = document.getElementById("go-study");

const timerStudy = document.getElementById("timer-study-page");
const taskStudy = document.getElementById("task-study-page");

// 🌿 Start the watering animation automatically
function startWaterLoop() {
  setInterval(() => {
    index = (index + 1) % wateringImg.length;
    waterImgLoop.src = wateringImg[index];
  }, 700); // change speed here (ms)
}

// When the plant page becomes visible, start the loop
// (You can also just call startWaterLoop() directly if plant page is visible from start)
startWaterLoop();

// Go to study page
goStudyBtn.addEventListener('click', () => {
  plantPage.hidden = true;

  if (state.sessType == 1) taskStudy.hidden = false;
  if (state.sessType == 2) timerStudy.hidden = false;
});
