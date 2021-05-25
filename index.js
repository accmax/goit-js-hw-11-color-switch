const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    bodyEl: document.querySelector('body')
}

refs.startBtn.addEventListener('click', startChangeColor)
refs.stopBtn.addEventListener('click', stopChangeColor)


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let isChangeColorStarting = false;
let intervalId = null;

function startChangeColor() {
    if (isChangeColorStarting) {
        return
    };
    refs.startBtn.disabled = true;
    intervalId = setInterval(() => {
        refs.bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000);
};

function stopChangeColor() {
    if (!startChangeColor) {
        return
    };
    refs.startBtn.disabled = false;
    clearInterval(intervalId)
};