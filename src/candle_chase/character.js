export default class Character{
    constructor(candleCanvas, game){
        this.game = game;
        this.candleCanvas = candleCanvas;
        this.candleContext = candleCanvas.getContext('2d');
        this.width = 100;
        this.height = 100;
        this.x = 350;
        this.y = 0;
        this.draw();
        this.speed = 0;
        this.maxSpeed = 5;
    }


    draw() {
        let playerImage = new Image();
        playerImage.src = './assets/Sprite-0002.png';

        playerImage.onload = () => {
            this.candleContext.drawImage(playerImage, this.startingX, this.startingY, 100, 100);
        }
    }


    update(input){
        if(input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;
        if(this.x < 0) this.x = 0;
    }

}