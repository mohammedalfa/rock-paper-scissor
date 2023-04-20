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