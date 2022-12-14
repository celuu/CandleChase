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
        this.dyingFrame = 0;
        this.spriteWidth = 129;
        this.spriteHeight = 128;
        this.startTimer();
        this.collided = false;
        this.lightning = 0;
        this.startLightningLoop(); 
        this.isOver = false
        this.lightningLoopTimer = 0;
        this.music = document.createElement("audio");
        this.music.src = "./images/background_audio.mp3";
        this.music.volume = 0.1;
        this.music.play();
        this.userWon = false;
        this.audioElement = document.getElementById("audio");
        this.isDying = false;
    }

    update(){
        if (this.isOver) return;
        this.enemy.update();
        let wasCollided = this.collided;
        this.detectEnemyCollisions();
        if (wasCollided === false && this.collided === true && this.isDying === false) {
            this.isDying = true;
        }
        this.player.update(this.input.keys, this.isDying);
        this.drawCharacter();
        this.board.update(this.player, this.input.keys, this.candleCtx);
        this.checkGameStatus();
        
    }

    draw(){
        this.candleCtx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.screenCtx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.board.draw(this.player);
        if (this.isDying) { 
            let playerImage = new Image();
            playerImage.src = './images/spritesheet.png';
            this.candleCtx.drawImage(playerImage, Math.min(this.dyingFrame, 9) * this.spriteWidth, this.spriteHeight, this.spriteWidth, this.spriteHeight, this.player.x, this.player.y, this.player.width, this.player.height)
            if (this.dyingFrame < 200) this.dyingFrame++;
            else {
                this.isDying = false;
                this.dyingFrame = 0;
            }
        } else {
            this.player.draw(this.candleCtx);
        }
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
        }
    }

    startLightningLoop(){
        this.lightningLoopTimer = setInterval(this.runLightningAnimations.bind(this), 8000);
    }

    runLightningAnimations(){
        this.startLightning();
        setTimeout(this.stopLightning, 3000);
    }

    startLightning(){
        let changeBackground = document.getElementsByClassName("background")[0];
        changeBackground.classList.add("lightningAnimationForBackground");
        let getScreenCanvas = document.getElementById("screen-canvas");
        getScreenCanvas.classList.add("lightningAnimationForScreen");
        this.audioElement.play();  
    }

    stopLightning(){
        let changeBackground = document.getElementsByClassName("background")[0];
        changeBackground.classList.remove("lightningAnimationForBackground");
        let getScreenCanvas = document.getElementById("screen-canvas");
        getScreenCanvas.classList.remove("lightningAnimationForScreen");
    }

    checkGameStatus(){
        if (this.secondsRemaining <= 0 && this.board.allCandlesLit == false){
           this.gameOver(); 
        }
        if (this.board.allCandlesLit == true && this.secondsRemaining > 0){
            this.gameWon();
        }
    }

    gameWon(){
        this.audioElement.pause()
        clearInterval(this.timer);
        clearInterval(this.lightningLoopTimer);
        this.isOver = true
        let unhideWinnerScreen = document.getElementById("winner_screen");
        unhideWinnerScreen.classList.remove("hidden");
    }

    gameOver(){
        this.audioElement.pause();
        clearInterval(this.timer);
        clearInterval(this.lightningLoopTimer);
        this.isOver = true
        let unhide = document.getElementById("end_game_screen");
        unhide.classList.remove("hidden");
    }

    detectEnemyCollisions() {
        let batX = this.enemy.x;
        let batY = this.enemy.y;
        let playerX = this.player.x
        let playerY = this.player.y

        this.isColliding(playerX, playerY, this.player.width, this.player.height,
            batX, batY, this.enemy.width, this.enemy.height)
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



