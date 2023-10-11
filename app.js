function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = (choices[randomNum])
    return compChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied! You both picked Rock'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! You both picked Scissors'
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied! You both picked Paper'
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied! You both picked Paper'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Won! Paper Covers Rock'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lost! Paper Covers Rock'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lost! Scissors cuts Paper'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Won! Scissors cuts Paper'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Won! Rock crushes Scissors'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lost! Rock crushes Scissors'
    }
}   

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
