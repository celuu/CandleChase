import Game from './candle_chase/game';



const candleCanvas = document.getElementById("candle-canvas");
const screenCanvas = document.getElementById("screen-canvas");

let game = new Game(candleCanvas, screenCanvas);

window.addEventListener('keydown', e =>{
    if(e.code === 'Space' ) {
        let startGame = document.getElementById("start_game_screen");
        startGame.classList.add("hidden");
    
        function animate() {
            game.update();
            game.draw();
            requestAnimationFrame(animate);
        }; animate();
    }
})
    





