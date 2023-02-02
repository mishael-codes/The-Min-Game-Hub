// assigned the options to their respective variables
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

/* Initialized the userChoice variable whiich which will have a different value
 in different local scopes depending on what the user selects */
let userChoice;

// created an array out of the variables with he values of the options so that the computer can randomly pick one of three
const choices = [rock, paper, scissors];

// created the logic for the computer to randomly select an option
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

function compchoice() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

// Points system
let playerPoints = document.getElementById("player-score");
let computerPoints = document.getElementById("computer-score");

let point1 = 0;
let point2 = 0;

// Accessing the different records
let wins = document.getElementById("wins");
let winPoints = 0

let draws = document.getElementById("draws");
let drawPoints = 0;

let losses = document.getElementById("losses");
let lossPoints = 0;


// The click events for the different options
rock.addEventListener("click", () => {
  userChoice = rock;
  if (computerChoice == paper) {
    computerPoints.textContent = point2 += 1;
    losses.textContent = lossPoints += 1;
    compchoice();
  } else if (computerChoice == scissors) {
    playerPoints.textContent = point1 += 1;
    wins.textContent = winPoints += 1;
    compchoice();
  } else if (userChoice == computerChoice) {
    draws.textContent = drawPoints += 1;
    compchoice();
  }
});

paper.addEventListener("click", () => {
  userChoice = paper;
  if (computerChoice == scissors) {
    computerPoints.textContent = point2 += 1;
    losses.textContent = lossPoints += 1;
    compchoice();
  } else if (computerChoice == rock) {
    playerPoints.textContent = point1 += 1;
    wins.textContent = winPoints += 1;
    compchoice();
  } else if (userChoice == computerChoice) {
    draws.textContent = drawPoints += 1;
    compchoice();
  }
});

scissors.addEventListener("click", () => {
  userChoice = scissors;
  if (computerChoice == rock) {
    computerPoints.textContent = point2 += 1;
    losses.textContent = lossPoints += 1;
    compchoice();
  } else if (computerChoice == paper) {
    playerPoints.textContent = point1 += 1;
    wins.textContent = winPoints += 1;
    compchoice();
  } else if (userChoice == computerChoice) {
    draws.textContent = drawPoints += 1;
    compchoice();
  }
});
