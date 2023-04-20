let timerInterval;

function startTimer(duration) {
  const timerDisplay = document.getElementById("timer");

  let timer = duration;
  timerInterval = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (--timer < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Time's up!";
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  document.getElementById("timer").textContent = "";
}

let stopwatchInterval;
let startTime;

function startStopwatch() {
  const stopwatchDisplay = document.getElementById("stopwatch");

  startTime = Date.now();
  stopwatchInterval = setInterval(() => {
    const elapsedMilliseconds = Date.now() - startTime;
    const minutes = Math.floor(elapsedMilliseconds / 60000);
    const seconds = Math.floor((elapsedMilliseconds % 60000) / 1000);
    const milliseconds = elapsedMilliseconds % 1000;

    stopwatchDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}:${milliseconds < 100 ? "0" : ""}${milliseconds < 10 ? "0" : ""}${milliseconds}`;
  }, 10);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  document.getElementById("stopwatch").textContent = "";
}
