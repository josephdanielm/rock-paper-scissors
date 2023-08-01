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

// Variables to keep track of wins
let playerWins = 0
,   computerWins = 0;

function playRound(playerSelection, computerSelection) {
    
    // If selections are equal, return 'Draw!'
    if (playerSelection.toLowerCase() == computerSelection) {

        return 'Draw!';
    }


    // Player choose rock
    if (playerSelection.toLowerCase() == 'rock') {
        
        switch (computerSelection) {
            case 'paper':
                computerWins = ++computerWins;
                return 'You Lose! Paper beats Rock';
            case 'scissors':
                playerWins = ++playerWins;
                return 'You Win! Rock beats Scissors';
        }

    // Player choose paper
    } else if (playerSelection.toLowerCase() == 'paper') {

        switch (computerSelection) {
            case 'scissors':
                computerWins = ++computerWins;
                return 'You Lose! Scissors beat Paper';
            case 'rock':
                playerWins = ++playerWins;
                return 'You Win! Paper beats Rock';
        }

    // Player choose scissors
    } else {

        switch (computerSelection) {
            case 'rock':
                computerWins = ++computerWins;
                return 'You Lose! Rock beats Scissors';
            case 'paper':
                playerWins = ++playerWins;
                return 'You Win! Scissors beat Paper!';
        }

    }
}

let btn = document.querySelectorAll('button');

btn.forEach(
    function(item) {
        item.addEventListener('click', function(e) {
            console.log(playRound(this.id, getComputerChoice()));
            document.getElementById('player-score').innerHTML = playerWins;
            document.getElementById('computer-score').innerHTML = computerWins;
        })
    }
)

if (playerWins == 5 || computerWins == 5) {
    
}

//game();