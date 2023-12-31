import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";

const inputDate = document.querySelector('#datetime-picker');
const start = document.querySelector('button[data-start]');
const outDays = document.querySelector('[data-days]');
const outHours = document.querySelector('[data-hours]');
const outMinutes = document.querySelector('[data-minutes]');
const outSeconds = document.querySelector('[data-seconds]');

let outDate = 0;

const onLoad = () => {
  start.disable = true;
  inputDate.disable = false;
};

function outTime(outDate) {
  const { days, hours, minutes, seconds } = convertMs(outDate);
  outDays.textContent = addLeadingZero(days);
  outHours.textContent = addLeadingZero(hours);
  outMinutes.textContent = addLeadingZero(minutes);
  outSeconds.textContent = addLeadingZero(seconds);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notify.failure("Please choose a date in the future");
      start.disabled = true;
    } else {
      start.disabled = false;
      outDate = selectedDates[0] - new Date();
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}
  
flatpickr(inputDate, options);

window.addEventListener('load', onLoad);

start.addEventListener('click', () => {
  inputDate.disable = true;
  start.disable = true;

  const timer = setInterval(() => {
    if (outDate > 1000) {
      outDate -= 1000;
      outTime(outDate);
    } else {
      clearInterval(timer);
      inputDate.disable = false;
      start.disable = false;
    }
  }, 1000)
})