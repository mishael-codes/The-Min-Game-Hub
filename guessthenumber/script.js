let btn = document.getElementById("button");
let next = document.getElementById("next");
let restart = document.querySelector(".restartBtn");

let tries = document.getElementById("try");

let guess = document.getElementById("number");
let max = guess.getAttribute("max");
let maxNum = parseInt(max);
let x = 0;

let gamePts = 0;
let pts = document.querySelector(".points");
let result = document.querySelector(".result");

let trials = document.getElementById("try").innerText;
trials = parseInt(trials);

let endGame = document.getElementById("gameOver");

let num;

const danger = trials / 2;

function pickNumber(min, max) {
  num = Math.floor(Math.random() * (max - min + 1)) + min;
  tries.textContent = trials;
  result.classList.remove("resultSuccess");
  result.textContent = " ";
  next.disabled = true;

  console.log(num);
}

function selectNumber(min, max) {
  num = Math.floor(Math.random() * (max - min + 1)) + min;
  trials += x;
  tries.textContent = trials;
  result.classList.remove("resultSuccess");
  tries.classList.remove("dangerZone");

  result.textContent = " ";
  next.disabled = true;
  btn.disabled = false;
  guess.value = 0;
  x = 0;
  console.log(num);
}

function restartGame(min, max) {
  endGame.style.display = "none";
  guess.disabled = false;
  num = Math.floor(Math.random() * (max - min + 1)) + min;
  trials += x;
  tries.textContent = trials;
  pts.textContent = 0;
  result.textContent = " ";
  guess.value = 0;
  x = 0;
  result.classList.remove("tryAgain");
  tries.classList.remove("dangerZone");
  restart.classList.add("restartBtn");
  btn.disabled = false;
}

btn.addEventListener("click", () => {
  if (!guess.value || guess.value == 0) {
    navigator.vibrate([100, 100]);
    result.classList.add("inputValue");
    result.textContent = "You need to put in a value!";
  } else if (guess.value > maxNum) {
    vibrate;
    result.classList.add("inputValue");
    result.textContent = "Please enter a number within the selected range!!!";
  } else if (guess.value > num) {
    navigator.vibrate([100, 100]);
    result.classList.remove("inputValue");
    result.textContent = "Guess Lower!";
    result.classList.add("tryAgain");
    tries.textContent = trials -= 1;
    x += 1;
    // console.log(x);
  } else if (guess.value < num) {
    navigator.vibrate([100, 100]);
    result.classList.remove("inputValue");
    result.textContent = "Guess Higher";
    result.classList.remove("tryAgain");
    result.classList.add("tryAgain");
    tries.textContent = trials -= 1;
    x += 1;
    // console.log(x);
  } else if ((result.textContent = "You got the number right!!!")) {
    result.classList.remove("inputValue");
    result.classList.remove("tryAgain");
    result.classList.add("resultSuccess");
    pts.textContent = gamePts += 1;
    btn.disabled = true;
    next.disabled = false;
    rhBtn.classList.remove("disabled");
  }

  if (trials < danger) {
    navigator.vibrate([30, 50])
    tries.classList.add("dangerZone");
  }

  if (trials == 0) {
    endGame.style.display = "block";
    btn.disabled = true;
    guess.disabled = true;
    restart.classList.remove("restartBtn");
    restart.classList.add("visibleRestartBtn");
    navigator.vibrate(400)
  }
});
