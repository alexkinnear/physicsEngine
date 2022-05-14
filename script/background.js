const getRandomNum = (min, max) => {
    return Math.random() * (max - min) + min;
}


const Polygon = () => {
    let width = getRandomNum(35, 60);
    let height = getRandomNum(35, 60);
    let speed = getRandomNum(1, 2);
    return {
        center: {x: canvas.width, y: canvas.height - height / 2},
        width: width,
        height: height,
        speed: speed,
    }
}

const updatePolygons = () => {
    for (let i = 0; i < gameModel.polygons.length; i++) {
        let p = gameModel.polygons[i];
        p.center.x -= p.speed;
        if (p.center.x <= -p.width) {
            gameModel.polygons.splice(i, 1);
            i--;
        }
    }
}
