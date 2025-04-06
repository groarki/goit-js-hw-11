import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const btn = document.querySelector('.button');
const input = document.querySelector('#datetime-picker');
const selectedDates = [];

let userSelectedDate;
let deltaTime;
let timerID;
btn.disabled = true;
input.disabled = false;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // minDate: 'today',
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
    } else {
      userSelectedDate = selectedDates[0];
      btn.disabled = false;
    }
  },
};

const fp = flatpickr(input, options);
// console.log(fp);

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

const days = document.querySelector('[data-days');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

btn.addEventListener('click', submitHandler);

function addLeadingZero(num) {
  if (num > 99) return String(num);
  return String(num).padStart(2, '0');
}

function submitHandler() {
  btn.disabled = true;
  input.disabled = true;
  startTimer();
}

function startTimer() {
  clearInterval(timerID);

  timerID = setInterval(() => {
    deltaTime = userSelectedDate - Date.now();
    if (deltaTime <= 0) {
      clearInterval(timerID);
      update(0, 0, 0, 0);
      btn.disabled = false;
      input.disabled = false;
      return;
    }

    const time = convertMs(deltaTime);
    update(time.days, time.hours, time.minutes, time.seconds);
  }, 1000);
}

function update(day, hour, minute, second) {
  days.textContent = addLeadingZero(day);
  hours.textContent = addLeadingZero(hour);
  minutes.textContent = addLeadingZero(minute);
  seconds.textContent = addLeadingZero(second);
}
