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

console.log(computerSelection);

let playerSelection = prompt("Please enter Rock Paper or Scissors");

function lowerCase() {
    return result = playerSelection.toLowerCase();
}

lowerCase();


function playRound() {
  if (result === "rock" && computerSelection === rock) {
    console.log("It's a tie!")
  } else if (result === "rock" && computerSelection === paper) {
    console.log("You lose! Paper beats rock.");
  } else if (result === "rock" && computerSelection === scissors) {
    console.log("You Win! Rock beats scissors.");
  } else if (result === "paper" && computerSelection === paper) {
    console.log("It's a tie!");
  } else if (result === "paper" && computerSelection === scissors) {
    console.log("You lose! Scissors beats paper.");
  } else if (result === "paper" && computerSelection === rock) {
    console.log("You win! Paper beats rock.");
  } else if (result === "scissors" && computerSelection === scissors) {
    console.log("It's a tie.");
  } else if (result === "scissors" && computerSelection === paper) {
    console.log("You win! Scissors beats paper.");
  } else {
    console.log("You lose! Rock beats scissors.");
  } 
}

playRound();


 
