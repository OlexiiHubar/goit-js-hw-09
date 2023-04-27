const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);
refs.stopBtn.disabled = true;

function onStart() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  return (intervalId = setInterval(changeBcgColor, 1000));
}

function onStop() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBcgColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
