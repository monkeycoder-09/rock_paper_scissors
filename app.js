function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"]
    const randomNum = Math.floor(Math.random() * 3)
    console.log(choices[randomNum])
}

computerPlay()