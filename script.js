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

let num;

const danger = trials / 2;

function pickNumber(min, max) {
  num = Math.floor(Math.random() * (max - min + 1)) + min;
  tries.textContent = trials;
  result.classList.remove("resultSuccess");
  result.textContent = " ";
  next.disabled = true;
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
}

function restartGame(min, max) {
  num = Math.floor(Math.random() * (max - min + 1)) + min;
  trials += x;
  tries.textContent = trials;
  pts.textContent = 0;
  guess.disabled = false;
  result.textContent = " ";
  guess.value = 0;
  x = 0;
  result.classList.remove("tryAgain");
  tries.classList.remove("dangerZone");
  restart.classList.add("restartBtn");
}

btn.addEventListener("click", () => {
  if (!guess.value || guess.value == 0) {
    result.classList.add("inputValue");
    result.textContent = "You need to put in a value!";
  } else if (guess.value > maxNum) {
    result.classList.add("inputValue");
    result.textContent = "Please enter a number within the selected range!!!";
  } else if (guess.value > num) {
    result.classList.remove("inputValue");
    result.textContent = "The number is lower than your guess!";
    result.classList.add("tryAgain");
    tries.textContent = trials -= 1;
    x += 1;
    // console.log(x);
  } else if (guess.value < num) {
    result.classList.remove("inputValue");
    result.textContent = "The number is greater than your guess!";
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
  }

  if (trials < danger) {
    tries.classList.add("dangerZone");
  }

  if (trials == 0) {
    alert("Game Over");
    btn.disabled = true;
    guess.disabled = true;
    restart.classList.remove("restartBtn");
    restart.classList.add("visibleRestartBtn");
  }
});

 
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let navList = document.querySelector(".navlist");
let nav = document.querySelector(".nav");

function showMenu(){
  bar1.classList.toggle("openBar1");
  bar2.classList.toggle("openBar2");
  navList.classList.toggle("menuList");
  nav.classList.toggle("toggleNav");
}