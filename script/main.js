let canvas = document.getElementById('game-canvas');
let context = canvas.getContext('2d');
context.fillStyle = 'rgba(0, 0, 0, 1)';
context.strokeStyle = 'rgba(0, 0, 0, 1)';
context.font = "15px Arial";
context.lineWidth = 2;

let elapsedTime = 0;
let prevTime = 0;

let gameModel = initializeGameModel();
gameModel.newGame();

function update() {
    gameModel.update(elapsedTime);
}

// Events that need reporting are displayed
function render() {
    gameModel.render()
    renderFPS(elapsedTime);
    context.strokeRect(0, 0, canvas.width, canvas.height);
}

function gameLoop(timeStamp) {
    elapsedTime = timeStamp - prevTime;
    prevTime = timeStamp;
    update(elapsedTime);
    render();
    requestAnimationFrame(gameLoop);
}


gameLoop(performance.now());