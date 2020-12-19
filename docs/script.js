// Personal Project: Tic Tac Toe game.
// Project begins 4/12/20.


//-----variables-----

let turn = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];7

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let winMessage = () => `${turn} has won!`;
let drawMessage = () => `Game ended in a draw`;

//ajouter un classe sur les bboutons pour savoir à qui le tour


//-----event listeners-----

document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", cellClicked));
document.querySelector(".start-again__btn").addEventListener("click", restartGame);


//-----functions-----

function cellClicked(clickedCellEvent) {

    let clickedCell = clickedCellEvent.target;
    let clickedCellIndex = parseInt(clickedCell.getAttribute("index"));

    if (gameState[clickedCellIndex] === "") {

        cellPlayed(clickedCell, clickedCellIndex);
        resultValidation();
    }
}

function cellPlayed(clickedCell, clickedCellIndex) {

    gameState[clickedCellIndex] = turn;
    clickedCell.innerHTML = turn;
}

function turnChange() {
    
}

function resultValidation() {
    let win = false;
    

}

function restartGame() {
    
}