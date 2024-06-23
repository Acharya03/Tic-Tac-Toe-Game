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
    }
}
startGame();