function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let choice = prompt("Enter guess: ").toLowerCase();
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    } else {
        console.log("Invalid choice!");
        return getPlayerChoice();
    }
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === "rock" && playerSelection === "scissors") {
        return "Rock beats scissors, you lose!";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "Paper beats rock, you lose!";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "Scissors beats paper, you lose!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock beats scissors, you win!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Paper beats rock, you win!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors beats paper, you win!";
    } else if (playerSelection === computerSelection) {
        return ("Tie!")
    }
}

function game() {
    let computerWins = 0;
    let playerWins = 0;

    for (let i = 0; i < 5; i++) {
        let game = playRound(getComputerChoice(), getPlayerChoice());
        console.log(game);
        if (game.slice(-5) === "lose!") {
            computerWins++;
        } else if (game.slice(-4) === "win!") {
            playerWins++;
        }
    }

    if (computerWins > playerWins) {
        console.log("You lost...");
    } else if (playerWins > computerWins) {
        console.log("You won!");
    } else {
        console.log("You tied!");
    }
}