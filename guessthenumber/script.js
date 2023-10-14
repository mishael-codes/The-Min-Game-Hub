// get all elements needed using the DOM
let btn = document.getElementById("button");
let next = document.getElementById("next");
let restart = document.querySelector(".restartBtn");

let tries = document.getElementById("try");

let guess = document.getElementById("number");

// setting the max possibele value to be guessed
let max = guess.getAttribute("max");
let maxNum = parseInt(max);
let x = 0;

// initializing the game points
let gamePts = 0;
let pts = document.querySelector(".points");
let result = document.querySelector(".result");

let trials = document.getElementById("try").innerText;
trials = parseInt(trials);

let endGame = document.getElementById("gameOver");

let num;

// add a warning color for the number of trials left
const danger = trials / 2;

// Computer selects a random number onLoad
function pickNumber(min, max) {
  num = Math.floor(Math.random() * (max - min + 1)) + min;
  tries.textContent = trials;
  result.classList.remove("resultSuccess");
  result.textContent = " ";
  next.disabled = true;

  console.log(num);
}

// triggers the computer to pick a number after each round 
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

// resets the game after number of tries has been exhausted
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


function checkNumber(){
  // what to do if:

  // there is no guess value
  if (!guess.value || guess.value == 0) {
    navigator.vibrate([100, 100]);
    result.classList.add("inputValue");
    result.textContent = "You need to put in a value!";
  } 
  // the gues value is larger than the maximum value to be guessed
  else if (guess.value > maxNum) {
    vibrate;
    result.classList.add("inputValue");
    result.textContent = "Please enter a number within the selected range!!!";
  }
  // the guess value is greater than the number needed
  else if (guess.value > num) {
    navigator.vibrate([100, 100]);
    result.classList.remove("inputValue");
    result.textContent = "Guess Lower!";
    result.classList.add("tryAgain");
    tries.textContent = trials -= 1;
    x += 1;
  } 
  // the guess value is lesser than the number needed
  else if (guess.value < num) {
    navigator.vibrate([100, 100]);
    result.classList.remove("inputValue");
    result.textContent = "Guess Higher";
    result.classList.remove("tryAgain");
    result.classList.add("tryAgain");
    tries.textContent = trials -= 1;
    x += 1;
  } 
  // user guesses right
  else if ((result.textContent = "You got the number right!!!")) {
    result.classList.remove("inputValue");
    result.classList.remove("tryAgain");
    result.classList.add("resultSuccess");
    pts.textContent = gamePts += 1;
    btn.disabled = true;
    next.disabled = false;
  }

  // shows when to add the warning
  if (trials < danger) {
    navigator.vibrate([30, 50])
    tries.classList.add("dangerZone");
  }

  // what to do when the game ends
  if (trials == 0) {
    endGame.style.display = "block";
    btn.disabled = true;
    guess.disabled = true;
    restart.classList.remove("restartBtn");
    restart.classList.add("visibleRestartBtn");
    navigator.vibrate(400)
  }
};
btn.addEventListener("click", checkNumber);
guess.addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    checkNumber()
  }
})