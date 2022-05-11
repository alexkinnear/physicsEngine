const updateBird = (elapsedTime) => {
    let bird = gameModel.bird;
    bird.center.x += gameModel.bird.velocity.x;
    bird.center.y += gameModel.bird.velocity.y;

    bird.jumpTime += elapsedTime;
    bird.moveLeftTime += elapsedTime;
    bird.moveRightTime += elapsedTime;

    // Horizontal Movement
    if (bird.velocity.x < 0) {
        bird.velocity.x += bird.moveLeftTime * bird.friction;
    } else if (bird.velocity.x > 0) {
        bird.velocity.x -= bird.moveRightTime * bird.friction;
    }

    if (Math.abs(bird.velocity.x) < 0.2) {
        bird.velocity.x = 0;
    }

    if (bird.velocity.x > bird.maxVelocity) {
        bird.velocity.x = bird.maxVelocity;
    } else if (bird.velocity.x < -bird.maxVelocity) {
        bird.velocity.x = -bird.maxVelocity;
    }

    if (bird.center.x - bird.radius <= 0) {
        bird.center.x = bird.radius;
        bird.velocity.x = 0;
    } else if (bird.center.x + bird.radius >= canvas.width) {
        bird.center.x = canvas.width - bird.radius;
        bird.velocity.x = 0;
    }

    // Vertical movement
    if (bird.velocity.y < 0) {
        bird.velocity.y += bird.jumpTime * bird.gravity;
    } else if (bird.velocity.y > 0) {
        bird.velocity.y += bird.jumpTime * bird.gravity;
    }

    if (bird.center.y >= canvas.height - bird.radius) {
        bird.velocity.y = 0;
        bird.center.y = canvas.height - bird.radius;
    }
}