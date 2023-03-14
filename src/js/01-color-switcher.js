function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEl = document.body;
let timerId = null;

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

btnStop.disabled = true;

function onBtnStartClick(event) {
    timerId = setInterval(changeColor, 1000);

    event.target.disabled = true;
    btnStop.disabled = false;
}

function onBtnStopClick(event) {
    clearInterval(timerId);

    event.target.disabled = true;
    btnStart.disabled = false;

}

function changeColor() {
    const colorRandom = getRandomHexColor();

    bodyEl.style.backgroundColor = colorRandom;
}

btnStart.style.backgroundColor = '#e9c501';
btnStop.style.backgroundColor = '#477ab5';
