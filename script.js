function getComputerChoice() {
    let choice = Math.random() * 3;

    if (choice < 1) {
        return 'r';
    } else if (choice < 2) {
        return 'p';
    } else {
        return 's';
    }
}

function playRound(humanSelection) {
    const computerSelection = getComputerChoice();
    if (humanSelection === computerSelection) {
        document.getElementById("results").textContent = 'Draw';
    } else if (humanSelection === 'r' && computerSelection === 'p' || humanSelection === 'p' && computerSelection === 's' || humanSelection === 's' && computerSelection === 'r') {
        document.getElementById("results").textContent = 'Computer won';
        document.getElementById("computer-score").textContent = ++computerScore;
    } else {
        document.getElementById("results").textContent = 'Human won';
        document.getElementById("player-score").textContent = ++humanScore;
    }
}

function play(humanSelection) {
    if (round++ < 5) {
        playRound(humanSelection);
        if (round === 5) {
            let modal = document.getElementById("modal");
            let modalText = document.getElementById("modal-text");
            if (humanScore > computerScore) {
                modalText.textContent = 'Human has won hahaha molodec';
            } else if (humanScore < computerScore) {
                modalText.textContent = 'Computer has won hahaha molodec';
            } else {
                modalText.textContent = 'Nobody has won grusni';
            }
            modal.style.display = 'block';
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('closeModal').addEventListener('click', function () {
        document.getElementById('modal').style.display = 'none';
    });
});

let round = 0;
let humanScore = 0;
let computerScore = 0;

window.addEventListener("DOMContentLoaded", () => {
    const rockBtn = document.getElementById("rock");
    rockBtn.addEventListener("click", () => play("r"));

    const paperBtn = document.getElementById("paper");
    paperBtn.addEventListener("click", () => play("p"));

    const scissorsBtn = document.getElementById("scissors");
    scissorsBtn.addEventListener("click", () => play("s"));
});
