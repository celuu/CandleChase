import Board from './board';
import InputHandler from './input';
import Character from './character'
import Enemy from './enemy';

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
        this.enemy = new Enemy(this);
        this.startTimer();
        this.collided = false;
    }


    update(){
        this.player.update(this.input.keys);
        this.board.update(this.player, this.input.keys);
        this.enemy.update();
        this.detectCollisions();
    }

    draw(){
        this.candleCtx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.screenCtx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.board.draw(this.player);
        this.player.draw(this.candleCtx);
        this.enemy.draw(this.candleCtx);
        
    }

    startTimer(){
        this.timer = setInterval(this.decrementSecondsRemaining.bind(this), 1000);
    }

    decrementSecondsRemaining(){
        this.secondsRemaining--;
        document.getElementById("countDown").innerHTML = this.secondsRemaining;
        if (this.secondsRemaining <= 0) {
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

    // detectCollisions() {
    //     let charPos = [this.player.desiredX, this.player.desiredY];
    //     let candlesPos = this.board.candles;
    //     for (let i = 0; i < candlesPos.length; i++){
    //         let candle = candlesPos[i];
    //         if(charPos[0] <  ){
    //             this.collided = true;
    //         } else {
    //             this.collided = false;
    //         }
    //     }
 

        // // Reset collision state of all objects
        // for (let i = 0; i < gameObjects.length; i++) {
        //     gameObjects[i].isColliding = false;
        // }

        // // Start checking for collisions
        // for (let i = 0; i < gameObjects.length; i++) {
        //     obj1 = gameObjects[i];
        //     for (let j = i + 1; j < gameObjects.length; j++) {
        //         obj2 = gameObjects[j];

        //         // Compare object1 with object2
        //         if (rectIntersect(obj1.x, obj1.y, obj1.width, obj1.height, obj2.x, obj2.y, obj2.width, obj2.height)) {
        //             obj1.isColliding = true;
        //             obj2.isColliding = true;
        //         }
        //     }
        // }
    // }

   
   
}



