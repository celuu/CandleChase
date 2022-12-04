import Game from './candle_chase/game';



const candleCanvas = document.getElementById("candle-canvas");
const screenCanvas = document.getElementById("screen-canvas");


let game = new Game(candleCanvas, screenCanvas);


function animate() {
    game.update();
    game.draw();

    // let frameX = 0;
    // let gameFrame = 0;
    // const staggerFrame = 5

    // if (gameFrame % staggerFrame == 0) {
    //     if (frameX < 8) frameX++;
    //     else frameX = 0;
    // }

    // gameFrame++;
    requestAnimationFrame(animate);
};
animate();

