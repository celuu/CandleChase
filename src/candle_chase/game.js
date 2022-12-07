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
        this.timer = 0;
        this.collidedTimer = 0;
        this.frame = 1;
        this.spriteWidth = 129;
        this.spriteHeight = 128;
        this.startTimer();
        this.collided = false;
        this.lightning = 0;
        this.startLightningLoop(); 
        
    }

    update(){
        this.player.update(this.input.keys);
        this.enemy.update();
        this.drawCharacter();
        this.detectEnemyCollisions();
        this.board.update(this.player, this.input.keys, this.candleCtx);
    }

    draw(){
        this.candleCtx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.screenCtx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.board.draw(this.player);
        this.player.draw(this.candleCtx);
        this.enemy.draw(this.candleCtx);  
        this.drawTimer();
    }

    startTimer(){
        this.timer = setInterval(this.decrementSecondsRemaining.bind(this), 1000);
    }

    decrementSecondsRemaining() {
        this.secondsRemaining--;
        if (this.secondsRemaining <= 0) {
            this.gameOver();
            clearInterval(this.timer);
        }
    }

    startLightningLoop(){
       setInterval(this.runLightningAnimations.bind(this), 6000);
    }

    runLightningAnimations(){
        console.log("running animation")
        this.startLightning();
        setTimeout(this.stopLightning, 3000);
    }

    startLightning(){
        let changeBackground = document.getElementsByClassName("background")[0];
        changeBackground.classList.add("lightningAnimationForBackground");
        let getScreenCanvas = document.getElementById("screen-canvas");
        getScreenCanvas.classList.add("lightningAnimationForScreen");
        let getAudio = document.getElementById("audio");
        // getAudio.play();  
    }

    stopLightning(){
        let changeBackground = document.getElementsByClassName("background")[0];
        changeBackground.classList.remove("lightningAnimationForBackground");
        let getScreenCanvas = document.getElementById("screen-canvas");
        getScreenCanvas.classList.remove("lightningAnimationForScreen");
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

    

    detectEnemyCollisions() {
        let batX = this.enemy.x;
        let batY = this.enemy.y;
        let playerX = this.player.x
        let playerY = this.player.y

        this.isColliding(playerX, playerY, this.player.width, this.player.height,
            batX, batY, this.enemy.width, this.enemy.height)

        if (this.collided === true){    
            let playerImage = new Image();
            playerImage.src = './assets/spritesheet.png';
            this.candleCtx.drawImage(playerImage, this.frame * this.spriteWidth, 128, this.spriteWidth, this.spriteHeight, playerX, playerY, this.player.width, this.player.height)
            this.collidedTimer++;
            if (this.collidedTimer % 5 === 0) {
                this.frame++;

            }
            console.log(this.collidedTimer % 5)
        }

    }

    drawTimer(){
        this.candleCtx.font = "40px Nerko One";
        this.candleCtx.fillStyle = "#FFFFFF";
        this.candleCtx.fillText(`Time Left: ${this.secondsRemaining} `, 20, 75);
    }




    isColliding(area1x, area1y, area1width, area1height, area2x, area2y, area2width, area2height){
        if (area1x > area2x + area2width ||
            area1x + area1width < area2x ||
            area1y > area2y + area2height ||
            area1y + area1height < area2y ){
                this.collided = false;
            } else {
                this.collided = true;
        }

    }

    drawCharacter(){
        this.player.x = this.player.desiredX;
        this.player.y = this.player.desiredY;
    }
   
}



