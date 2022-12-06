import Game from './candle_chase/game';



const candleCanvas = document.getElementById("candle-canvas");
const screenCanvas = document.getElementById("screen-canvas");


let game = new Game(candleCanvas, screenCanvas);

function animate() {
    game.update();
    game.draw();

    //add start game into here?? needs to be in the play loop

    requestAnimationFrame(animate);
};
animate();

