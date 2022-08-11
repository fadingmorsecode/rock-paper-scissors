const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';


// Function to randomly generate a computer choice of either Rock, Paper, or Scissors. 

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100)
    if (randomNumber < 34) {
        return rock;
    } else if (randomNumber < 66) {
        return paper;
    } else {
        return scissors; 
    }
}

console.log("The computer chose " + getComputerChoice());

// Function to get player selection and accounting for case sensitivity. 

function getPlayerChoice() {
    let playerChoice = prompt("Enter Rock, Paper, or Scissors.");
    return playerChoice.toLowerCase();
}

console.log("The player chose " + getPlayerChoice());

// Function to play a single round of Rock Paper Scissors. 















