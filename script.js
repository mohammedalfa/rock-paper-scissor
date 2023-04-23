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

function playRound(computerSelection, playerSelection) {
    if (computerSelection === "rock" && playerSelection === "scissors") {
        return "lose";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "lose";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "lose";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "win";
    } else if (playerSelection === computerSelection) {
        return "tie";
    }
}

let computerWins = 0;
let playerWins = 0;


let playerChoice = null;

buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", event => {
    playerChoice = button.id;
    let computerChoice = getComputerChoice();

    let game = playRound(computerChoice, playerChoice);

    text = document.querySelector("#text");
    if (game === "win") {
        playerWins++;
        text.textContent = `${playerChoice} beats ${computerChoice}, you ${game}!`;
    } else if (game === "lose") {
        computerWins++;
        text.textContent = `${computerChoice} beats ${playerChoice}, you ${game}!`;
    } else {
        text.textContent = `you ${game}!`;
    }

    computerScore = document.querySelector("#computer-score");
    playerScore = document.querySelector("#player-score")
    computerScore.textContent = `Computer wins: ${computerWins}`;
    playerScore.textContent = `Player wins: ${playerWins}`;
}));
