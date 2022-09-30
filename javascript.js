const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let playerCounter = 0;
let computerCounter = 0;
const outcomeDisplay = document.querySelector('.results-text');
const playerScore = document.querySelector('.player-score');
playerScore.textContent = playerCounter;
const computerScore = document.querySelector('.computer-score');
computerScore.textContent = computerCounter;

// Create New Game Button - waiting to be appended once game is over. 
const ngbttncontainer = document.querySelector('.new-game-container')
const ngbttn = document.createElement('button');
ngbttn.textContent = "New Game";
ngbttn.classList.add('new-game');

// Default results text
const div = document.querySelector('.results-text');
div.textContent = "The first to reach 5 points wins";

// Randomly generate the computer's choice. 
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

// Play a single round of rock paper scissors. 
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === rock) {
    const div = document.querySelector('.results-text');
    div.textContent = "It's a tie!";
    return result = "It's a tie!"
  } else if (playerSelection === "rock" && computerSelection === paper) {
    const div = document.querySelector('.results-text');
    div.textContent = "You lose! Paper beats rock.";
    return result = "You lose!";
  } else if (playerSelection === "rock" && computerSelection === scissors) {
    const div = document.querySelector('.results-text');
    div.textContent = "You win! Rock beats scissors.";
    return result = "You win!";
  } else if (playerSelection === "paper" && computerSelection === paper) {
    const div = document.querySelector('.results-text');
    div.textContent = "It's a tie!";
    return result = "It's a tie!";
  } else if (playerSelection === "paper" && computerSelection === scissors) {
    const div = document.querySelector('.results-text');
    div.textContent = "You lose! Scissors beats paper.";
    return result ="You lose!";
  } else if (playerSelection === "paper" && computerSelection === rock) {
    const div = document.querySelector('.results-text');
    div.textContent = "You win! Paper beats rock.";
    return result = "You win!";
  } else if (playerSelection === "scissors" && computerSelection === scissors) {
    const div = document.querySelector('.results-text');
    div.textContent = "It's a tie!";
    return result = "It's a tie!";
  } else if (playerSelection === "scissors" && computerSelection === paper) {
    const div = document.querySelector('.results-text');
    div.textContent = "You win! Scissors beats paper.";
    return result = "You win!";
  } else {
    const div = document.querySelector('.results-text');
    div.textContent = "You lose! Rock beats scissors";
    return result = "You lose!";
  } 
}

// Rock button triggers playRound function & displays results/match winner.
const rockbtn = document.querySelector(".rock-container");
rockbtn.addEventListener('click', () => {
  if (outcomeDisplay.textContent === "You won the match!" || 
  outcomeDisplay.textContent === "The computer won the match!" || 
  outcomeDisplay.textContent === "Game Over.") {
    const div = document.querySelector('.results-text');
    div.textContent = "Game Over.";
  } else {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

  if (result === "You win!") {
    playerCounter++
    playerScore.textContent = playerCounter;
  } else if (result === "You lose!") {
    computerCounter++
    computerScore.textContent = computerCounter;
  } 

  if (playerCounter === 5) {
    const div = document.querySelector('.results-text');
    div.textContent = "You won the match!";
    ngbttncontainer.appendChild(ngbttn);
  } else if (computerCounter === 5) {
    const div = document.querySelector('.results-text');
    div.textContent = "The computer won the match!";
    ngbttncontainer.appendChild(ngbttn);
  }
 }
});

// Paper button triggers playRound function & displays results/match winner.
const paperbtn = document.querySelector(".paper-container");
paperbtn.addEventListener('click', () => {
  if (outcomeDisplay.textContent === "You won the match!" || 
  outcomeDisplay.textContent === "The computer won the match!" || 
  outcomeDisplay.textContent === "Game Over.") {
    const div = document.querySelector('.results-text');
    div.textContent = "Game Over.";
  } else {
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

  if (result === "You win!") {
    playerCounter++
    playerScore.textContent = playerCounter;
  } else if (result === "You lose!") {
    computerCounter++
    computerScore.textContent = computerCounter;
  } 

  if (playerCounter === 5) {
    const div = document.querySelector('.results-text');
    div.textContent = "You won the match!";
    ngbttncontainer.appendChild(ngbttn);
  } else if (computerCounter === 5) {
    const div = document.querySelector('.results-text');
    div.textContent = "The computer won the match!";
    ngbttncontainer.appendChild(ngbttn);
  }
 }
});

// Scissors button triggers playRound function & displays results/match winner.
const scissorsbtn = document.querySelector(".scissors-container");
scissorsbtn.addEventListener('click', () => {
if (outcomeDisplay.textContent === "You won the match!" || 
outcomeDisplay.textContent === "The computer won the match!" || 
outcomeDisplay.textContent === "Game Over.") {
    const div = document.querySelector('.results-text');
    div.textContent = "Game Over.";
  } else {
  playerSelection = "scissors";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

  if (result === "You win!") {
    playerCounter++
    playerScore.textContent = playerCounter;
  } else if (result === "You lose!") {
    computerCounter++
    computerScore.textContent = computerCounter;
  } 

  if (playerCounter === 5) {
    const div = document.querySelector('.results-text');
    div.textContent = "You won the match!";
    ngbttncontainer.appendChild(ngbttn);
  } else if (computerCounter === 5) {
    const div = document.querySelector('.results-text');
    div.textContent = "The computer won the match!";
    ngbttncontainer.appendChild(ngbttn);
  }
 }
});

// Event listener with function to restart game. 
ngbttn.addEventListener('click', () => {
  playerCounter = 0;
  playerScore.textContent = playerCounter;
  computerCounter = 0;
  computerScore.textContent = computerCounter;
  const div = document.querySelector('.results-text');
  div.textContent = "The first to reach 5 points wins";
  ngbttncontainer.removeChild(ngbttn);
});
