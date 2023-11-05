let playerScore = 0
let compScore = 0

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const result = document.querySelector('.result')
const score = document.querySelector('.score')

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = (choices[randomNum])
    return compChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        
        updateScore();
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        
        updateScore();
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        
        updateScore();
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        updateScore()
        
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        updateScore()
        
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        updateScore()
        
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        updateScore()
        
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        updateScore()
        
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        updateScore()
        
    }
}   

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const result = playRound('rock', computerSelection);
    resultDiv.textContent = result;
    updateScore();
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const result = playRound('paper', computerSelection);
    resultDiv.textContent = result;
    updateScore();
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const result = playRound('scissors', computerSelection);
    resultDiv.textContent = result;
    updateScore();
});
  
  function removeSelectionClasses() {
    // Remove all selection classes from buttons
    rockButton.classList.remove('rock-selected');
    paperButton.classList.remove('paper-selected');
    scissorsButton.classList.remove('scissors-selected');
  }

function updateScore() {
    score.textContent = `Player: ${playerScore} - Computer: ${compScore}`;
    checkWinner();
  }

function checkWinner() {
    if (playerScore >= 5) {
        result.textContent = "Woohooo! You Won.";
    } else if (compScore >= 5) {
        result.textContent = "Oh no! You Lost."
    }
}


















// function game() {
//     for ( let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Pick one:', 'Rock, Paper, Scissors').toLowerCase()
//         const computerSelection = computerPlay();
//         (playRound(playerSelection, computerSelection));
//     }

// if (playerScore > compScore) {
//     return 'You won the game!'
// } else if (compScore > playerScore) {
//     return 'You lost the game!'
// } else {
//     return 'You both tied!'
//     }
// }

// console.log(game())