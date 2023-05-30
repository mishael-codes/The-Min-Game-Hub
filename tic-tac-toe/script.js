let gameBoard = document.querySelector("#gameboard");
let moreInfo = document.querySelector("#info");
const blankCells = ["", "", "", "", "", "", "", "", ""];

let turn = "o"
moreInfo.textContent = "O goes first"

function createBoard(){
  blankCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener('click', stamp)
    gameBoard.append(cellElement)
  })
}

createBoard()

function stamp(e){
  const placeStamp = document.createElement('div');
  placeStamp.classList.add(turn);
  e.target.append(placeStamp)
  if(turn === "o"){
    turn = "x"
  }else turn = "o"

  moreInfo.textContent = `It is now ${turn}'s turn`
}