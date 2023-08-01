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

        printResult('Draw!');
        return;
    }


    // Player choose rock
    if (playerSelection.toLowerCase() == 'rock') {
        
        switch (computerSelection) {
            case 'paper':
                computerWins = ++computerWins;
                printResult('You Lose! Paper beats Rock');
                break;
            case 'scissors':
                playerWins = ++playerWins;
                printResult('You Win! Rock beats Scissors');
                break;
        }

    // Player choose paper
    } else if (playerSelection.toLowerCase() == 'paper') {

        switch (computerSelection) {
            case 'scissors':
                computerWins = ++computerWins;
                printResult('You Lose! Scissors beat Paper');
                break;
            case 'rock':
                playerWins = ++playerWins;
                printResult('You Win! Paper beats Rock');
                break;
        }

    // Player choose scissors
    } else {

        switch (computerSelection) {
            case 'rock':
                computerWins = ++computerWins;
                printResult('You Lose! Rock beats Scissors');
                break;
            case 'paper':
                playerWins = ++playerWins;
                printResult('You Win! Scissors beat Paper!');
                break;
        }

    }
}

let btn = document.querySelectorAll('button');

btn.forEach(
    function(item) {
        item.addEventListener('click', function buttonHandler(e) {
            console.log(playRound(this.id, getComputerChoice()));
            document.getElementById('player-score').innerHTML = playerWins;
            document.getElementById('computer-score').innerHTML = computerWins;
            evaluateRound(playerWins, computerWins);
        })
    }
)

// Updates result div with inputted string
function printResult(string) {
    document.getElementById('result').textContent = string;
}


function removeClickListener(button) {
    const clonedButton = button.cloneNode(true);
    button.parentNode.replaceChild(clonedButton, button);
}

// evaluates, posts winner, removes functionality from buttons
function evaluateRound(playerWin, computerWin) {
    if (playerWin >= 5) {
        printResult('Congratulations, you won!');
        btn.forEach(button => removeClickListener(button));
        
    } else if (computerWin >= 5) {
        printResult('Looks like the computer won this time!');
        btn.forEach(button => removeClickListener(button));
    }
}


//game();