// Tanya Leenders - Personal Project: Tic Tac Toe game.
//-----variables-----
let status = document.querySelector(".status");
let playerX = document.querySelector(".player-x");
let playerO = document.querySelector(".player-o");
let modal = document.querySelector(".status-modal");
let turn = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

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

//-----event listeners & document selector------
document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", cellClicked));
document.querySelectorAll(".start-again-btn").forEach(button => button.addEventListener("click", restartGame));

//-----functions-----
function cellClicked(clickedCellEvent) {
    let clickedCell = clickedCellEvent.target; 
    // this targets the right cell
    let clickedCellIndex = parseInt(clickedCell.getAttribute("index")); 
    // get his index, which is is string, so we transform it in a number

    if (gameState[clickedCellIndex] === "") { 
        // if the cell is empty, one function to handle the game interface & variables, one function to check if someone won the game
        cellPlayed(clickedCell, clickedCellIndex);
        resultValidation();
    }
}

function cellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = turn; 
    // update state in "gamestate" constant
    clickedCell.innerHTML = turn;
    // update html with correct player 
}

function resultValidation() {
    let win = false;
    for (let i = 0; i <= 7; i++) {
        // checks all the situations where u can win
        const winCondition = winningConditions[i]; 
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            // if one of the cells corresponding to one "win situation" is empty, ignore
            continue;
        } 
        if (a === b && b === c) {
            win = true;
            break
        }
    }
    if (win) {
        // if there is a win situation, show modal with correct message
        status.innerHTML = winMessage();
        modal.classList.add("active-modal");
        return;
    }
    let roundDraw = !gameState.includes(""); 
    //round draw if no winning when the game is full
    if (roundDraw) {
        // if there is a draw situation, show madal with correct message
        status.innerHTML = drawMessage();
        modal.classList.add("active-modal");
        return;
    }
    turnChange();
    // if nothing has happened here, then no one has won and there are still moves to do, so, function to handle player change
}

function turnChange() {
    turn = turn === "X" ? "O" : "X";
    if (turn == "X") {
        // X's turn: adds class to show his turn
        playerO.classList.remove("player-active");
        playerX.classList.add("player-active");
    }
    if (turn == "O") {
        playerX.classList.remove("player-active");
        playerO.classList.add("player-active");
    }
}

function restartGame() {
    turn = "X";
    playerX.classList.add("player-active");
    playerO.classList.remove("player-active");
    // reset player X first
    gameState = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    // reset cells
    status.innerHTML = "";
    modal.classList.remove("active-modal");
    // reset modal/status
}