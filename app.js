let playerScore = 0
let compScore = 0
let roundCount = 0

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const result = document.querySelector('.result')
const score = document.querySelector('.score')
const resetButton = document.querySelector('.reset')

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = (choices[randomNum])
    return compChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return result.textContent = "It's a tie!"
        updateScore()
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        updateScore()
        return result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        compScore++;
        updateScore()
        return result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    roundCount = 0;
    result.textContent = " ";
    score.textContent = "Player: 0 - Computer: 0";
    enableButtons();
}


function updateScore() {
    score.textContent = `Player: ${playerScore} - Computer: ${compScore}`;
    checkWinner();
  }


  function checkWinner() {
    if (playerScore >= 5) {
        result.textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (compScore >= 5) {
        result.textContent = "Sorry, you lost the game. Try again!";
        disableButtons();
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function enableButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}


rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const result = playRound('rock', computerSelection);
    result.textContent = score;
    updateScore();
    roundCount++;
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const result = playRound('paper', computerSelection);
    result.textContent = score;
    updateScore();
    roundCount++;
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const result = playRound('scissors', computerSelection);
    result.textContent = score;
    updateScore();
    roundCount++;
});

resetButton.addEventListener('click', resetGame)