const start = document.getElementById("start");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");

const hour = document.getElementById("hour");
const min = document.getElementById("minute");
const sec = document.getElementById("sec");

let startTimer;

function timer() {
  if (hour.value == 0 && min.value == 0 && sec.value == 0) {
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
  } else if (sec.value != 0) {
    sec.value--;
  } else if (min.value != 0 && sec.value == 0) {
    sec.value = 59;
    min.value--;
  } else if (hour.value != 0 && min.value == 0) {
    min.value = 59;
    sec.value = 59;
    hour.value--;
  }
}

function stopTimer() {
  clearInterval(startTimer);
}

function startInterval() {
  startTimer = setInterval(timer, 1000);
}

start.addEventListener("click", () => {
  startInterval();
});

reset.addEventListener("click", () => {
  hour.value = 0;
  min.value = 0;
  sec.value = 0;
  stopTimer();
});

stop.addEventListener("click", stopTimer);
