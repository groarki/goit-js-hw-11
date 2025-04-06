import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// вибираємо потрібні елементи в домі
const form = document.querySelector('form');
const delayInput = form.querySelector('input[name="delay"]');
const stateInput = form.querySelectorAll('input[name="state"]');

let selectedState;
let userDelay;

delayInput.addEventListener('input', event => {
  userDelay = Number(event.target.value);
});

stateInput.forEach(input => {
  input.addEventListener('change', event => {
    selectedState = event.target.value;
  });
});

form.addEventListener('submit', event => {
  event.preventDefault();

  submitPromise(userDelay, selectedState)
    .then(messageFulfilled =>
      iziToast.success({
        message: messageFulfilled,
        position: 'topRight',
      })
    )
    .catch(messageRejected =>
      iziToast.error({
        message: messageRejected,
        position: 'topRight',
      })
    );
});

function submitPromise(delay, status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
