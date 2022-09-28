const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let playerCounter = 0;
let computerCounter = 0;

// Function to randomly generate a computer choice of either Rock, Paper, or Scissors. 

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100)
    if (randomNumber < 34) {
        console.log("Computer chose Rock");
        return rock;
    } else if (randomNumber < 66) {
        console.log("Computer chose Paper");
        return paper;
    } else {
        console.log("Computer chose Scissors");
        return scissors;
    }
}

// Function to get player selection and accounting for case sensitivity. 

function getPlayerChoice() {
    let playerChoice = prompt("Enter Rock, Paper, or Scissors.");
    return playerChoice.toLowerCase();
}

// Function to play a single round of Rock Paper Scissors.

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === rock) {
    return result = "It's a tie!"
  } else if (playerSelection === "rock" && computerSelection === paper) {
    return result = "You lose!";
  } else if (playerSelection === "rock" && computerSelection === scissors) {
    return result = "You win!";
  } else if (playerSelection === "paper" && computerSelection === paper) {
    return result = "It's a tie!";
  } else if (playerSelection === "paper" && computerSelection === scissors) {
    return result ="You lose!";
  } else if (playerSelection === "paper" && computerSelection === rock) {
    return result = "You win!";
  } else if (playerSelection === "scissors" && computerSelection === scissors) {
    return result = "It's a tie!";
  } else if (playerSelection === "scissors" && computerSelection === paper) {
    return result = "You win!";
  } else {
    return result = "You lose!";
  } 
}

// // Function to play a 5 round game that keeps score and reports a winner or loser at the end. 

// function game() {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
// // Player Score Counter
//     if (result === "You win!") { 
//         playerCounter++;
//     } else if (result === "You lose!") {
//         computerCounter++;
//     } 
//     console.log(playerCounter);
//     console.log(computerCounter);
// // Match Winner 
//     if (i === 4 && playerCounter > computerCounter) {
//         console.log("You win the match!");
//     } else if (i === 4 && playerCounter < computerCounter) {
//         console.log("You lost the game. Bummer!");
//     } else if (i === 4 && playerCounter === computerCounter) {
//         console.log("You tied with the computer!");
//     }
//   }
// }

// game();