import Game from './candle_chase/game';

const candleCanvas = document.getElementById("candle-canvas");
const screenCanvas = document.getElementById("screen-canvas");

let game = null;

window.addEventListener('keydown', e =>{
    if (e.code === 'Space') {
        console.log('space')
        if (!game) {
            game = new Game(candleCanvas, screenCanvas);
            let startGame = document.getElementById("start_game_screen");
            startGame.classList.add("hidden");
            animate();
        } else if(game.isOver) {
            console.log("is over")
            game = new Game(candleCanvas, screenCanvas);
            let endGame = document.getElementById("end_game_screen");
            endGame.classList.add("hidden");
        }       
    }
})  

function animate() {
    game.update();
    game.draw();
    requestAnimationFrame(animate);
};