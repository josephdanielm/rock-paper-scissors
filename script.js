function getComputerChoice() {
    // Use random integer (1,2,3) to return rock, paper, or scissors
    switch((Math.floor(Math.random() * 3)) + 1) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}


function playRound(playerSelection, computerSelection) {
    
    // If selections are equal, return 'Draw!'
    if (playerSelection.toLowerCase() == computerSelection) {
        return 'Draw!';
    }


    // Player choose rock
    if (playerSelection.toLowerCase() == 'rock') {
        
        switch (computerSelection) {
            case 'paper':
                return 'You Lose! Paper beats Rock';
            case 'scissors':
                return 'You Win! Rock beats Scissors';
        }

    // Player choose paper
    } else if (playerSelection.toLowerCase() == 'paper') {

        switch (computerSelection) {
            case 'scissors':
                return 'You Lose! Scissors beat Paper';
            case 'rock':
                return 'You Win! Paper beats Rock';
        }

    // Player choose scissors
    } else {

        switch (computerSelection) {
            case 'rock':
                return 'You Lose! Rock beats Scissors';
            case 'paper':
                return 'You Win! Scissors beat Paper!';
        }

    }
}



// Temporary test 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));