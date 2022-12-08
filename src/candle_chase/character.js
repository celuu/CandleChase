
export default class Character{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = 450;
        this.y = 120;
        this.desiredX = 350;
        this.desiredY = 0;
        this.maxSpeed = 5;
        this.xVelocity = 0;
        this.yVelocity = 0;
        this.spriteWidth = 129;
        this.spriteHeight = 128;
        this.frame = 1;
        this.timer = 0;
        this.lastMovingLeft = false
        this.lastMovingUp = false
    }  

    update(input){
        let xSpeed = 0;
        let ySpeed = 0;

        if(input.includes('ArrowRight')) {
            this.lastMovingLeft = false
            this.xVelocity = Math.min(1, this.xVelocity + 0.05)
            xSpeed = (this.maxSpeed * this.xVelocity);
        } else if (input.includes('ArrowLeft')) {
            this.lastMovingLeft = true
            this.xVelocity = Math.min(1, this.xVelocity + 0.05)
            xSpeed = -(this.maxSpeed * this.xVelocity);
        } else {
            this.xVelocity = Math.max(0, this.xVelocity - 0.1)
            xSpeed = (this.maxSpeed * this.xVelocity);
            if (this.lastMovingLeft) {
                xSpeed *= -1
            }
        }
    
        // vertical movement
        if (input.includes('ArrowUp')){
            this.lastMovingUp = true
            this.yVelocity = Math.min(1, this.yVelocity + 0.05)
            ySpeed = -(this.maxSpeed * this.yVelocity);
        } else if (input.includes('ArrowDown')){
            this.lastMovingUp = false
            this.yVelocity = Math.min(1, this.yVelocity + 0.05)
            ySpeed = (this.maxSpeed * this.yVelocity);
        } else {
            this.yVelocity = Math.max(0, this.yVelocity - 0.1)
            ySpeed = (this.maxSpeed * this.yVelocity);
            if (this.lastMovingUp) {
                ySpeed *= -1
            }
        }

        if (this.xVelocity != 0 || this.yVelocity != 0) {
            this.timer++;
            if (this.timer % 5 === 0) {
                this.frame > 6 ? this.frame = 0 : this.frame++;
            }
        }

        this.desiredX = this.x + xSpeed;
        this.desiredY = this.y + ySpeed;  
    
        if (this.desiredX <= 0) this.desiredX = this.x;
        if (this.desiredX >= this.game.dimensions.width - this.width) this.desiredX = this.x;
        if (this.desiredY <= 100) this.desiredY = this.y;
        if (this.desiredY >= this.game.dimensions.height - this.height) this.desiredY = this.y;
    }


    draw(ctx){
        let playerImage = new Image();
        playerImage.src = './assets/spritesheet.png';
        ctx.drawImage(playerImage, this.frame * this.spriteWidth, this.spriteHeight * 2.03, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }

}

