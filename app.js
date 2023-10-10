function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"]
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = (choices[randomNum])
    return compChoice
}

console.log(computerPlay())