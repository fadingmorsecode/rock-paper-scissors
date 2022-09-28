const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let playerCounter = 0;
let computerCounter = 0;
const outcomeDisplay = document.querySelector('#displayResult');

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === rock) {
    const div = document.querySelector('#displayResult');
    div.textContent = "Tie!";
    return result = "It's a tie!"
  } else if (playerSelection === "rock" && computerSelection === paper) {
    const div = document.querySelector('#displayResult');
    div.textContent = "Lose!";
    return result = "You lose!";
  } else if (playerSelection === "rock" && computerSelection === scissors) {
    const div = document.querySelector('#displayResult');
    div.textContent = "Win!";
    return result = "You win!";
  } else if (playerSelection === "paper" && computerSelection === paper) {
    const div = document.querySelector('#displayResult');
    div.textContent = "Tie!";
    return result = "It's a tie!";
  } else if (playerSelection === "paper" && computerSelection === scissors) {
    const div = document.querySelector('#displayResult');
    div.textContent = "Lose!";
    return result ="You lose!";
  } else if (playerSelection === "paper" && computerSelection === rock) {
    const div = document.querySelector('#displayResult');
    div.textContent = "Win!";
    return result = "You win!";
  } else if (playerSelection === "scissors" && computerSelection === scissors) {
    const div = document.querySelector('#displayResult');
    div.textContent = "Tie!";
    return result = "It's a tie!";
  } else if (playerSelection === "scissors" && computerSelection === paper) {
    const div = document.querySelector('#displayResult');
    div.textContent = "Win!";
    return result = "You win!";
  } else {
    const div = document.querySelector('#displayResult');
    div.textContent = "Lose!";
    return result = "You lose!";
  } 
}

const rockbtn = document.querySelector("#rock");
rockbtn.addEventListener('click', () => {
  if (outcomeDisplay.textContent === "You won the match!" || outcomeDisplay.textContent === "The computer won the match!" || outcomeDisplay.textContent === "Please reset the game to play again.") {
    const div = document.querySelector('#displayResult');
    div.textContent = "Please reset the game to play again.";
  } else {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

  if (result === "You win!") {
    playerCounter++
  } else if (result === "You lose!") {
    computerCounter++
  } 

  console.log(`Player Score = ${playerCounter}`);
  console.log(`Computer Score = ${computerCounter}`)

  if (playerCounter === 5) {
    const div = document.querySelector('#displayResult');
    div.textContent = "You won the match!";
  } else if (computerCounter === 5) {
    const div = document.querySelector('#displayResult');
    div.textContent = "The computer won the match!";
  }
 }
});



const paperbtn = document.querySelector("#paper");
paperbtn.addEventListener('click', () => {
  if (outcomeDisplay.textContent === "You won the match!" || outcomeDisplay.textContent === "The computer won the match!" || outcomeDisplay.textContent === "Please reset the game to play again.") {
    const div = document.querySelector('#displayResult');
    div.textContent = "Please reset the game to play again.";
  } else {
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

  if (result === "You win!") {
    playerCounter++
  } else if (result === "You lose!") {
    computerCounter++
  } 

  console.log(`Player Score = ${playerCounter}`);
  console.log(`Computer Score = ${computerCounter}`)

  if (playerCounter === 5) {
    const div = document.querySelector('#displayResult');
    div.textContent = "You won the match!";
  } else if (computerCounter === 5) {
    const div = document.querySelector('#displayResult');
    div.textContent = "The computer won the match!";
  }
 }
});

const scissorsbtn = document.querySelector("#scissors");
scissorsbtn.addEventListener('click', () => {
if (outcomeDisplay.textContent === "You won the match!" || outcomeDisplay.textContent === "The computer won the match!" || outcomeDisplay.textContent === "Please reset the game to play again.") {
    const div = document.querySelector('#displayResult');
    div.textContent = "Please reset the game to play again.";
  } else {
  playerSelection = "scissors";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

  if (result === "You win!") {
    playerCounter++
  } else if (result === "You lose!") {
    computerCounter++
  } 

  console.log(`Player Score = ${playerCounter}`);
  console.log(`Computer Score = ${computerCounter}`)

  if (playerCounter === 5) {
    const div = document.querySelector('#displayResult');
    div.textContent = "You won the match!";
  } else if (computerCounter === 5) {
    const div = document.querySelector('#displayResult');
    div.textContent = "The computer won the match!";
  }
 }
});

















// Function to play a 5 round game that keeps score and reports a winner or loser at the end. 

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
//         const div = document.querySelector('#displayResult');
//         div.textContent = "You win the match!";
//     } else if (i === 4 && playerCounter < computerCounter) {
//         console.log("You lost the game. Bummer!");
//         const div = document.querySelector('#displayResult');
//        div.textContent = "You lost the match. Bummer!";
//     } else if (i === 4 && playerCounter === computerCounter) {
//         console.log("You tied with the computer!");
//         const div = document.querySelector('#displayResult');
//         div.textContent = "You tied with the computer!";
//     }
//   }
// }

// game();