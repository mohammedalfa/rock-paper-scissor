function getComputerChoice() {
    let guess = Math.floor(Math.random() * 3);
    if (guess === 0) {
        return "Rock";
    } else if (guess === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}