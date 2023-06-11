// capitalizes the first letter of the word and turns the rest to lowercase
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) + 1;
    if (choice <= 33) {
        return "Rock";
    } else if (choice > 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    // 1 : Win, 0 : Loss, 2 : Draw
    let playerWon = 1;
    // player wins by default so only treat the cases where he loses or gets a draw
    switch (playerSelection) {
        case "Scissors":
            if (computerSelection == "Rock") playerWon = 0;
            if (computerSelection == "Scissors") playerWon = 2;
            break;  
        case "Paper":
            if (computerSelection == "Scissors") playerWon = 0;
            if (computerSelection == "Paper") playerWon = 2;
            break;
        case "Rock":
            if (computerSelection == "Paper") playerWon = 0;
            if (computerSelection == "Rock") playerWon = 2;
            break;  
    }
    return playerWon;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5.; i++) {
        // get player / computer choices
        let playerSelection = capitalize(prompt("Your choice?"));
        let computerSelection = getComputerChoice();
        // get round results
        let playerWon = playRound(playerSelection, computerSelection);
        // update the score
        if (playerWon == 1) playerScore++;
        else if (playerWon == 0) computerScore++;
        // print round results
        console.log((playerWon == 1) ? `You win this round! ${playerSelection} beats ${computerSelection}.` : 
                    (playerWon == 0) ? `You lose this round! ${computerSelection} beats ${playerSelection}.` :
                    `It's a draw!`) 
    }
    return (playerScore > computerScore) ? "You win!" :
            (playerScore < computerScore) ? "You lose!" :
            "It's a draw!";  
}