const renderFPS = (elapsedTime) => {
    context.save();
    context.fillText(`FPS: ${Math.floor(1000 / elapsedTime)}`, canvas.width / 20, canvas.height / 20);
    context.restore();
}

const renderBird = () => {
    context.save();
    context.fillStyle = '#FFFF00';
    context.lineWidth = 1;
    context.strokeStyle = '#000000'; // black outline
    context.beginPath();
    context.arc(gameModel.bird.center.x, gameModel.bird.center.y, gameModel.bird.radius, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
    context.closePath();
    context.restore();
}

const renderPolygons = () => {
    for (let i = 0; i < gameModel.polygons.length; i++) {
        let p = gameModel.polygons[i];
        context.save();
        context.beginPath();
        context.rect(p.center.x, p.center.y, p.width, p.height);
        context.stroke();
        context.closePath();
    }
    context.restore();
}