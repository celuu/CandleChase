import Board from './board';
import InputHandler from './input';
import Character from './character'

export default class Game{
    constructor(candleCanvas, screenCanvas){
        this.candleCanvas = candleCanvas;
        this.screenCanvas = screenCanvas;
        this.candleCtx = candleCanvas.getContext('2d');
        this.screenCtx = screenCanvas.getContext('2d');
        this.score = 0;
        this.secondsRemaining = 20;
        this.winningScore = 100;
        this.dimensions = { width: candleCanvas.width, height: candleCanvas.height }
        this.board = new Board(candleCanvas, screenCanvas);
        this.player = new Character(this);
        this.input = new InputHandler();
        this.startTimer();
    }

    update(){
        this.player.update(this.input.keys);
        this.board.update(this.player, this.input.keys);
    }

    draw(){
        this.candleCtx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.screenCtx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.board.draw(this.player);
        this.player.draw(this.candleCtx);
    }

    startTimer(){
        this.timer = setInterval(this.decrementSecondsRemaining.bind(this), 1000);
    }

    decrementSecondsRemaining(){
        this.secondsRemaining--;
        document.getElementById("countDown").innerHTML = this.secondsRemaining;
        if (this.secondsRemaining <= 0 && this.board.allCandlesLit == false) {
            this.gameOver();
            clearInterval(this.timer); 
        }
        
    }

    // checkGameStatus(){
        
    //     } else if(this.secondsRemaining > 0 && this.board.allCandlesLit == true){
    //         this.hasWonLevel();
    //     }
    // }

    gameOver(){
        console.log("boo you loser")
    }
    
    hasWonLevel(){
        console.log("yay you won level")
    }

   
   
}



