import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

let delayValue = 0;
let stepValue = 0;
let amountValue = 0;
let promiseQuantity = 0;

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget;
  delayValue = delay.value;
  stepValue = step.value;
  amountValue = amount.value;
  totalDelay = Number(delayValue);

  setInterval(promisesCount, stepValue);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function promisesCount() {
  promiseQuantity += 1;
  totalDelay += Number(stepValue);

  if (promiseQuantity > amountValue) {
    return;
  }

  createPromise(promiseQuantity, totalDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
