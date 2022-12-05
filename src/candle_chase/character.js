
export default class Character{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = 350;
        this.y = 0;
        this.speed = 0;
        this.maxSpeed = 5;
        this.spriteWidth = 128;
        this.spriteHeight = 128;
    }  

    update(input){
        //instead add the character sprite movement here

        //horizontal movement
        this.y += this.speed;
        if(input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;
        if(this.x < 0) this.x = 0;
        if (this.x > this.game.dimensions.width - this.width) this.x = this.game.dimensions.width - this.width;

        //vertical movement
        this.x += this.speed;
        if (input.includes('ArrowUp')) this.speed = -this.maxSpeed;
        else if (input.includes('ArrowDown')) this.speed = this.maxSpeed;
        else this.speed = 0;

        if (this.y < 0) this.y = 0;
        if (this.y > this.game.dimensions.height - this.height) this.y = this.game.dimensions.height - this.height;
    }

    // nextToCandle(){

    // }

    draw(ctx){
        let playerImage = new Image();
        playerImage.src = './assets/walking_dog.png';
        ctx.drawImage(playerImage, 1 * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }

}


