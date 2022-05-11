const jump = () => {
    let bird = gameModel.bird;
    if (bird.center.y === canvas.height - bird.radius) {
        bird.jumpTime = 0;
        bird.velocity.y = -6;
    }
}

const moveLeft = () => {
    let bird = gameModel.bird;
    bird.moveLeftTime = 0;
    bird.velocity.x -= 0.5;
}

const moveRight = () => {
    let bird = gameModel.bird;
    bird.moveRightTime = 0;
    bird.velocity.x += 0.5;
}