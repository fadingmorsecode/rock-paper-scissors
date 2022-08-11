const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let computerSelection = '' 

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
    return "It's a tie!"
  } else if (playerSelection === "rock" && computerSelection === paper) {
    return "You lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === scissors) {
    return "You Win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === paper) {
    return "It's a tie!";
  } else if (playerSelection === "paper" && computerSelection === scissors) {
    return "You lose! Scissors beats paper.";
  } else if (playerSelection === "paper" && computerSelection === rock) {
    return "You win! Paper beats rock.";
  } else if (playerSelection === "scissors" && computerSelection === scissors) {
    return "It's a tie!";
  } else if (playerSelection === "scissors" && computerSelection === paper) {
    return "You win! Scissors beats paper.";
  } else {
    return "You lose! Rock beats scissors.";
  } 
}

playRound(getPlayerChoice(), getComputerChoice());







