document.addEventListener('DOMContentLoaded', (event) => {
    // Obtén los elementos del DOM
    let playerScore = document.getElementById('player');
    let computerScore = document.getElementById('computer');
    let resultsPlayer = document.getElementById('results_p');
    let resultsComputer = document.getElementById('results_c');
    let roundResult = document.getElementById('round_result'); // Nuevo elemento para mostrar el resultado de la ronda

    // Añade los event listeners a los botones
    document.getElementById('button1').addEventListener('click', () => playGame('ROCK'));
    document.getElementById('button2').addEventListener('click', () => playGame('PAPER'));
    document.getElementById('button3').addEventListener('click', () => playGame('SCISSORS'));

    function playGame(playerChoice) {
        let computerChoice = getComputerChoice();
        let winner = getWinner(playerChoice, computerChoice);

        // Actualiza los resultados en la pantalla
        resultsPlayer.textContent = `player (You): ${playerChoice}`;
        resultsComputer.textContent = `computer: ${computerChoice}`;

        // Muestra el resultado de la ronda
        if (winner === 'player') {
            roundResult.textContent = 'You won the round!';
            playerScore.textContent = `player's score: ${parseInt(playerScore.textContent.split(':')[1]) + 1}`;
        } else if (winner === 'computer') {
            roundResult.textContent = 'The computer won the round.';
            computerScore.textContent = `computer score: ${parseInt(computerScore.textContent.split(':')[1]) + 1}`;
        } else {
            roundResult.textContent = 'The round ended in a draw.';
        }
    }

    function getComputerChoice() {
        let choices = ['ROCK', 'PAPER', 'SCISSORS'];
        let randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function getWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'draw';
        }

        if (
            (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
            (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
            (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')
        ) {
            return 'player';
        }

        return 'computer';
    }
});

