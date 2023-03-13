import flatpickr from "flatpickr";
const flatpickr = require("flatpickr");
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector("button[data-start]")
startButton.disabled = true

const timePicker = document.querySelector("#datetime-picker")

const timerValue = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]")
}

let timerId = null;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(new Date())

    if (selectedDates[0] < new Date()) {
      startButton.disabled = true;
    //   window.alert("Please choose a date in the future")
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      startButton.disabled = false
      startButton.addEventListener("click", () => { changeTimerValue(selectedDates[0]) })
    }
  },
};

flatpickr(timePicker, options)

function changeTimerValue() {
    let timer = setInterval(() => {
      let countdown = new Date(timePicker.value) - new Date();
      startButton.disabled = true;
      timePicker.disabled = true;
      console.log(countdown)
      if (countdown >= 0) {
        let timerData = convertMs(countdown);
          timerValue.days.textContent = timerData.days;
          timerValue.hours.textContent = timerData.hours;
          timerValue.minutes.textContent = timerData.minutes;
          timerValue.seconds.textContent = timerData.seconds;
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

function pad(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day)* 1);
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour) * 1);
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute)* 1);
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second)* 1);

  return { days, hours, minutes, seconds };
}





