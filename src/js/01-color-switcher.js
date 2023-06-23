const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.body;

let startTiming = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const onStart = () => {
  start.disabled = true;
  stop.disabled = false;

  body.style.backgroundColor = getRandomHexColor();
  console.log('started!');
  startTiming = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const onStop = () => {
  start.disabled = false;
  stop.disabled = true;
  clearInterval(startTiming);
  console.log('stopped!');
};

const onLoad = () => {
  start.disabled = false;
  stop.disabled = true;
};
  
start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);
window.addEventListener('load', onload);