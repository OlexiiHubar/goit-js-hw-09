import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  dateInput: document.querySelector('input[type=text]'),
  startBtnTimer: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (options.defaultDate > selectedDates[0].getTime()) {
      refs.startBtnTimer.disabled = true;
      return alert('Please choose a date in the future');
    } else {
      refs.startBtnTimer.disabled = false;
    }
  },
};

let timerId = 0;
let diff = 0;
const fp = flatpickr(refs.dateInput, options);

refs.startBtnTimer.disabled = true;
refs.startBtnTimer.addEventListener('click', onStart);

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
  return value.toString().padStart(2, '0');
}

function onStart() {
  timerId = setInterval(formatingConvertTime, 1000);
}

function formatingConvertTime() {
  diff = fp.selectedDates[0] - new Date();
  const timeDate = convertMs(diff);
  refs.days.textContent = addLeadingZero(timeDate.days);
  refs.hours.textContent = addLeadingZero(timeDate.hours);
  refs.minutes.textContent = addLeadingZero(timeDate.minutes);
  refs.seconds.textContent = addLeadingZero(timeDate.seconds);
  stopTimer();
}

function stopTimer() {
  const timeDate = convertMs(diff);
  if (
    timeDate.days === 0 &&
    timeDate.hours === 0 &&
    timeDate.minutes === 0 &&
    timeDate.seconds === 0
  ) {
    clearInterval(timerId);
  }
}
