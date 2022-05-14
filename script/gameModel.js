const initializeGameModel = () => {
    return {
        // Things that never need to be reset
        elapsedTime: 0,
        prevTime: 0,
        keyboard: Keyboard(),
        polygons: [],

        newGame() {
            // Things that need to be reset each time a new game is started
            this.bird = bird();
            this.keyboard.registerKey(' ', jump, 'jump');
            this.keyboard.registerKey('ArrowUp', jump, 'jump');
            this.keyboard.registerKey('a', moveLeft, 'move left');
            this.keyboard.registerKey('d', moveRight, 'move right');
            this.keyboard.registerKey('ArrowLeft', moveLeft, 'move left');
            this.keyboard.registerKey('ArrowRight', moveRight, 'move right');



        },

        update(elapsedTime) {
            this.prevTime = this.elapsedTime;
            this.elapsedTime += elapsedTime;
            this.keyboard.processInput();
            updateBird(elapsedTime);
            updatePolygons();

            if (this.polygons.length < 2) {
                this.polygons.push(Polygon());
            }
        },

        render() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            renderBird();
            renderPolygons();
        },
    };
}

