let gameBoard = document.querySelector("#gameboard");
let moreInfo = document.querySelector("#info");
let endGame = document.querySelector(".endgame");
let result = document.querySelector('.result');
const blankCells = ["", "", "", "", "", "", "", "", ""];
let turn = ['o', 'x']
turn = turn[Math.floor(Math.random() * turn.length)];
moreInfo.textContent =  `${turn} goes first`;

function createBoard() {
  blankCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", stamp);
    gameBoard.append(cellElement);
  });
}

createBoard();

function stamp(e) {
  const placeStamp = document.createElement("div");
  placeStamp.classList.add(turn);
  e.target.append(placeStamp);
  turn = turn === "o" ? "x" : "o";
  moreInfo.textContent = `It is now ${turn}'s turn`;
  e.target.removeEventListener("click", stamp);

  checkScore();
}

function checkScore() {
  const allSquares = document.querySelectorAll(".square");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombos.forEach((array) => {
    const oHasWon = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("o")
    );

    if (oHasWon) {
      endGame.classList.add("show-endgame");
      result.textContent =  "O has won!!!"
      moreInfo.textContent = "O has won!";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });

  winningCombos.forEach((array) => {
    const xHasWon = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("x")
    );

    if (xHasWon) {
      endGame.classList.add("show-endgame");
      result.textContent =  "X has won!!!"
      moreInfo.textContent = "X has won!";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });
}

let restart = document.querySelector('.restart');

restart.addEventListener('click', () => {
  window.location.reload()
})