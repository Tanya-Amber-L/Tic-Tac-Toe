
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
document.querySelector(".start-again-btn").addEventListener("click", restartGame);

//-----functions-----
function cellClicked(clickedCellEvent) {

    let clickedCell = clickedCellEvent.target; //cibler la bonne case
    let clickedCellIndex = parseInt(clickedCell.getAttribute("index")); //récuperer son index, qui est un string qu'on tranforme en integer

    if (gameState[clickedCellIndex] === "") { //si la case est vide, gère l'action dans le jeu et check si la aprtie est finie

        cellPlayed(clickedCell, clickedCellIndex);
        resultValidation();
    }
}

function cellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = turn; //update dans le gamestate que la case est remplie
    clickedCell.innerHTML = turn;//écris le joueur qui a clické 
}

function resultValidation() {
    let win = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i]; //vérifier toutes les conditions pour gagner
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        } // si les cases qui correspondent à un schéma gagnant sont vides, ne fait rien
        if (a === b && b === c) {
            win = true;
            break
        }
    }
    if (win) {
        status.innerHTML = winMessage();
        return;
    }
    let roundDraw = !gameState.includes(""); //round draw if no winning when the game is full
    if (roundDraw) {
        status.innerHTML = drawMessage();
        return;
    }
    turnChange();
}

function turnChange() {
    turn = turn === "X" ? "O" : "X";
    if (turn == "X") {
        playerO.classList.remove("player-active");
        playerX.classList.add("player-active");
    }
    if (turn == "O") {
        playerX.classList.remove("player-active");
        playerO.classList.add("player-active");
    }
}

function restartGame() {
    gameActive = true;
    currentPlayer = "X";
    status.innerHTML = "";
    gameState = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}