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
            let winnerGame = document.getElementById("winner_screen");
            winnerGame.classList.add("hidden");
        }       
    }
})  
let unmuteButton = document.getElementById("unmuteButton");
let muteButton = document.getElementById("muteButton");
unmuteButton.classList.add("hidden");
muteButton.addEventListener("click", () => {
    game.music.volume = 0.0;
    game.audioElement.volume = 0.0;
    unmuteButton.classList.remove("hidden");
    muteButton.classList.add("hidden");
});

unmuteButton.addEventListener("click", () => {
    game.music.volume = 0.1;
    game.audioElement.volume = 0.1;
    muteButton.classList.remove("hidden");
    unmuteButton.classList.add("hidden");
});


function animate() {
    game.update();
    game.draw();
    requestAnimationFrame(animate);
};