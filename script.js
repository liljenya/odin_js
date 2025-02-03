function getComputerChoice() {
    let choice = Math.random(3);

    if (choice === 0) {
        return 'r';
    }
    else if (choice === 1) {
        return 'p';
    }
    else {
        return 's';
    }
}

function getHumanChoice() {
    return window.prompt("What do you want to choose(R/P/S)?").toLowerCase();
}

function playRound(humanScore, computerScore) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (humanSelection === computerSelection) {
        alert('Draw');
    }
    else if (humanSelection === 'r' && computerSelection === 'p' || humanSelection === 'p' && computerSelection === 's') {
        alert('Computer won');
        computerScore++;
    }
    else if (humanSelection === 'r' && computerSelection === 's' || humanSelection === 's' && computerSelection === 's') {
        alert('User won');
        humanScore++;
    }
    console.log('Computer\'s score:' + computerScore)
    console.log('User\'s score:' + humanScore)
    console.log(`U : ${humanScore} \| C : ${computerScore}`);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(humanScore, computerScore);
    }

    if(humanScore > computerScore){
        alert('Human has won hahaha molodec')
    }
    else if(humanScore < computerScore){
        alert('Computer has won hahaha molodec')
    }
    else{
        alert('Nobody has won grusni')
    }
}

playGame();