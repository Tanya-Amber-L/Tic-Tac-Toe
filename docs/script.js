// Personal Project: Tic Tac Toe game.
// Project begins 4/12/20.

//-----variables-----

let game = document.querySelector(".game");
const cells = [...document.querySelectorAll(".cell")];
let turn = "X";


//-----creating functions & event listeners------

function initiateGame() {
    board = ["", "", "", "", "", "", "", "", ""];
};

function writeMark() {
    board.forEach((mark, index) => {
        cells[index].textContent = mark;
        // console.log(mark, index);
    });
};

game.addEventListener("click", function() {
    //WIP
})


//-----calling functions------

initiateGame();
writeMark();