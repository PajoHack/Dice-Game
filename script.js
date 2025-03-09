let playerScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("roll-btn");
    const playerDice = document.getElementById("player-dice");
    const computerDice = document.getElementById("computer-dice");
    const resultText = document.getElementById("result");

    // Function to roll a dice (1-6)
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Function to play the game
    function playGame() {
        const playerRoll = rollDice();
        const computerRoll = rollDice();

        // Update dice images
        // playerDice.src = `dice${playerRoll}.png`;
        // computerDice.src = `dice${computerRoll}.png`;
        const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

        document.getElementById("player-dice").textContent = diceFaces[playerRoll - 1];
        document.getElementById("computer-dice").textContent = diceFaces[computerRoll - 1];


        // Determine the winner
        if (playerRoll > computerRoll) {
            playerScore++; // Increase player score
            document.getElementById("player-score").textContent = playerScore;
            resultText.textContent = "🎉 You Win!";
        } else if (playerRoll < computerRoll) {
            computerScore++; // Increase computer score
            document.getElementById("computer-score").textContent = computerScore;
            resultText.textContent = "💀 Computer Wins!";
        } else {
            resultText.textContent = "🤝 It's a Draw!";
        }
        
    }

    // Attach event listener
    rollButton.addEventListener("click", playGame);
});
