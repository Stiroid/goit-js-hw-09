function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const interval = {
  intervalId: null,
  isActive: false,
};
let btnColor = null;

const stopChange = () => {
  clearInterval(this.intervalId);
  document.body.style.backgroundColor = '#fff';
  this.isActive = false;
};

btnStop.addEventListener('click', stopChange);

const colorChange = () => {
  if (this.interval.isActive) {
    return;
  }
  this.intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    this.isActive = true;
  }, 1000);
};
btnStart.addEventListener('click', colorChange);

btnStart.style.backgroundColor = '#e9c501';
btnStop.style.backgroundColor = '#477ab5';
