const initializeGameModel = () => {
    return {
        // Things that never need to be reset
        elapsedTime: 0,
        prevTime: 0,
        keyboard: Keyboard(),

        newGame() {
            // Things that need to be reset each time a new game is started
            this.bird = bird();
            this.keyboard.registerKey(' ', jump, 'jump');
            this.keyboard.registerKey('a', moveLeft, 'move left');
            this.keyboard.registerKey('d', moveRight, 'move right');
        },

        update(elapsedTime) {
            this.prevTime = this.elapsedTime;
            this.elapsedTime += elapsedTime;
            this.keyboard.processInput();
            updateBird(elapsedTime);
        },

        render() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            renderBird();
        },
    };
}

