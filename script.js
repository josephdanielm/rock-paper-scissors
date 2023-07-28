function getComputerChoice() {
    // Generate random integer (1,2,3)
    let randomNum = (Math.floor(Math.random() * 3)) + 1;

    // Use randomNum to return rock, paper, or scissors
    switch(randomNum) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}


