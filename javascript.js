const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';


// Your game is going to play against the computer. 
// So begin with a function called getComputerChoice 
// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// We’ll use this function in the game to make the computer’s play. 

function getComputerChoice() {
    let randomNumber = Math.floor*(Math.random()*100)
    if (randomNumber < 34) {
        return rock;
    } else if (randomNumber < 66) {
        return paper;
    } else {
        return scissors; 
    }
}

console.log("The computer chose " + getComputerChoice());




















