const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
const re = /[^0-9]/g;

function Timer(seconds) {
  seconds -= 1;
  let s = seconds % 60;
  seconds -= seconds % 60;
  let m = (seconds / 60) % 60;
  seconds -= 60 * ((seconds / 60) % 60);
  let h = (seconds / 3600) % 100;
  seconds = s + m*60 + h*3600;
  timerEl.textContent = String(h).padStart(2, '0') + ":" + String(m).padStart(2, '0') + ":" + String(s).padStart(2, '0');
  setTimeout(Timer, 1000, seconds);
}

function Timer(seconds) {
  seconds -= 1;
  let s = seconds % 60;
  seconds -= seconds % 60;
  let m = (seconds / 60) % 60;
  seconds -= 60 * ((seconds / 60) % 60);
  let h = (seconds / 3600) % 100;
  seconds = s + m*60 + h*3600;
  timerEl.textContent = String(h).padStart(2, '0') + ":" + String(m).padStart(2, '0') + ":" + String(s).padStart(2, '0');
  if (seconds > 0) {
    setTimeout(Timer, 1000, seconds);
  } else {
    alert("TIME!")
  }
}

const createTimerAnimator = () => {
  let arr = '';
  return (seconds) => {
    let s = seconds % 60;
    seconds -= seconds % 60;
    let m = (seconds / 60) % 60;
    seconds -= 60 * ((seconds / 60) % 60);
    let h = (seconds / 3600) % 100;
    seconds = s + m*60 + h*3600;
    timerEl.textContent = String(h).padStart(2, '0') + ":" + String(m).padStart(2, '0') + ":" + String(s).padStart(2, '0');
    clearInterval(arr);
    arr = setTimeout(Timer, 1000, seconds);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(re, "");
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
