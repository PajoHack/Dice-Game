let playerScore = 0;
let computerScore = 0;
const resetButton = document.getElementById("reset-btn");

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

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
        document.getElementById("result").textContent = "Who will win? Roll the dice!";
    }

    // Attach event listener
    rollButton.addEventListener("click", playGame);
    resetButton.addEventListener("click", resetGame);
});
