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

//------------------ What happens when either side reaches 10 points ---------------------//
// accesing the endgam container
let endGame = document.querySelector(".endgame");
let result = document.querySelector(".result");

// creating reactions with emoji faces for both a loss and a win
let loseReactions = ["😂", "😭", "😪", "😒", "🤣", "🥱", "🥺", "👎"];
loseReactions = loseReactions[Math.floor(Math.random() * loseReactions.length)];

let winReactions = [
  "😀",
  "😁",
  "😎",
  "😉",
  "🤗",
  "🤩",
  "😏",
  "👍",
  "🙌",
  "🤝",
];
winReactions = winReactions[Math.floor(Math.random() * winReactions.length)];
/* 
function compchoice() {
  if (point1 < 3 && point2 < 3) {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    rock.classList.remove("choice-disabled");
    paper.classList.remove("choice-disabled");
    scissors.classList.remove("choice-disabled");
  } else if (point1 == 3) {
    endGame.classList.add("show-endgame");
    result.textContent = `You won!!! ${winReactions}`;
  } else if (point2 == 3) {
    endGame.classList.add("show-endgame");
    result.textContent = `The computer won you!!! ${loseReactions}`;
  }

  if (point1 == 3 || point2 == 3) {
    rock.classList.add("choice-disabled");
    paper.classList.add("choice-disabled");
    scissors.classList.add("choice-disabled");
  }
}
 */
// Points system
let playerPoints = document.getElementById("player-score");
let computerPoints = document.getElementById("computer-score");

let point1 = 0;
let point2 = 0;

// Accessing the different records
let wins = document.getElementById("wins");
let winPoints = 0;

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

let restart = document.querySelector(".restart");

restart.addEventListener("click", () => {
  point1 = 0;
  point2 = 0;
  winPoints = 0;
  drawPoints = 0;
  lossPoints = 0;

  wins.textContent = 0;
  draws.textContent = 0;
  losses.textContent = 0;
  playerPoints.textContent = 0;
  computerPoints.textContent = 0;

  endGame.classList.remove("show-endgame");
  compchoice();
});
