const bird = () => {
    return {
        center: {x: canvas.width / 2, y: canvas.height - 10},
        velocity: {x: 0, y: 0},
        maxVelocity: 4,
        radius: 10,
        gravity: .00098,
        friction: 0.0005,
        jumpTime: 0,
        moveRightTime: 0,
        moveLeftTime: 0,
    }
}
