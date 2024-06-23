"use strict";

const containerEl = document.querySelector(".container");
let playertxt = document.querySelector(".message");
let restartBtn = document.getElementById("restartbtn");
let boxes = document.querySelectorAll(".box");

const O_TXT = "O";
const X_TXT = "X";

let currentPlayer = X_TXT;
let spaces = Array(9).fill(null);
//start game
const startGame = () => {
    boxes.forEach((boxs) => boxs.addEventListener("click", boxClicked));
};

//box clicked
function boxClicked(e) {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        playerHasWon();
        currentPlayer = currentPlayer == X_TXT ? O_TXT : X_TXT;
    }
}

//winning combination
const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

//player win

function playerHasWon(){
    for(const condition of winningCombination){
        let [a,b,c] = condition;
        if(spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]){
            return [a,b,c];
        }
    }
    return false;
}
startGame();