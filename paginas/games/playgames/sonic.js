// JavaScript code

// Variables
let isJumping = false;
let score = 0;

// Get elements
const sonic = document.getElementById('sonic');
const obstacle = document.getElementById('obstacle');
const scoreBoard = document.querySelector('.score-board');
const gameOverScreen = document.querySelector('.game-over-screen');
const restartButton = document.getElementById('restart-button');

// Start Game
function startGame() {
    document.querySelector('.start-screen').classList.add('hidden');
    document.querySelector('.game').classList.remove('hidden');
    score = 0;
    scoreBoard.textContent = `Score: ${score}`;
    gameLoop();
}

// Game Loop
function gameLoop() {
    score++;
    scoreBoard.textContent = `Score: ${score}`;
    checkCollision();
    requestAnimationFrame(gameLoop);
}

// Check Collision
function checkCollision() {
    // Create a smaller hitbox for Sonic
    const sonicRect = sonic.getBoundingClientRect();
    const hitbox = {
        x: sonicRect.x + sonicRect.width * 0.2, // Adjust left offset
        y: sonicRect.y + sonicRect.height * 0.2, // Adjust top offset
        width: sonicRect.width * 0.6, // Adjust width to 60% of original
        height: sonicRect.height * 0.8 // Adjust height to 80% of original
    };

    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        hitbox.x < obstacleRect.x + obstacleRect.width &&
        hitbox.x + hitbox.width > obstacleRect.x &&
        hitbox.y < obstacleRect.y + obstacleRect.height &&
        hitbox.height + hitbox.y > obstacleRect.y
    ) {
        gameOver();
    }
}

// Jump Function
function jump() {
    if (isJumping) return;
    isJumping = true;
    sonic.classList.add('jump');

    setTimeout(() => {
        sonic.classList.remove('jump');
        isJumping = false;
    }, 700); // Decreased jump duration to 700ms
}

// Game Over
function gameOver() {
    gameOverScreen.classList.remove('hidden');
    document.querySelector('.game').classList.add('hidden');
}

// Restart Game
function restartGame() {
    gameOverScreen.classList.add('hidden');
    startGame(); // Re-start the game
}

// Event Listeners
document.addEventListener('click', jump); // Change to click for jumping
document.querySelector('.start-screen button').addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame); // Restart button event listener


