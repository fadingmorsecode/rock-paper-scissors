const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
let computerSelection 
let result 

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*100);
    if (computerChoice <= 33) {
      computerSelection = "Rock";
    } else if (computerChoice <=66) {
      computerSelection = "Paper";
    } else {
      computerSelection = "Scissors";
    }
}

getComputerChoice();

let playerSelection = prompt("Please enter Rock Paper or Scissors");

function lowerCase() {
    return result = playerSelection.toLowerCase();
}

lowerCase();
