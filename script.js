let playerScore = 0;
let computerScore = 0;
let player = document.querySelector('.player');
let computer = document.querySelector('.computer');
let winner = document.querySelector('.winner');

// event listeners for buttons
const btns = document.querySelectorAll('.choice > button');
btns.forEach( btn => btn.addEventListener('click', () => {
    let playerSelection = btn.textContent;
    let computerSelection = getComputerChoice();
    let playerWon = playRound(playerSelection, computerSelection);
    if ((playerScore < 5) && ((computerScore < 5))) {
        if (playerWon == 1) {
            player.textContent = ++playerScore;
            winner.textContent = (playerScore == 5) ? `You win!` : `You win this round! ${playerSelection} beats ${computerSelection}.`;
        } else if (playerWon == 0) {
            computer.textContent = ++computerScore;
            winner.textContent = (computerScore == 5) ? `You lose!` : `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        } else {
            winner.textContent = `It's a draw!`;
        }
    } 
}));

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