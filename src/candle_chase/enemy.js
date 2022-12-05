

export default class Enemy {
    constructor(game){
        this.game = game
        this.width = 75;
        this.height = 75;
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.maxSpeed = 5;
        this.spriteWidth = 16;
        this.spriteHeight = 24;
        this.numOfEnemies = 5;
        this.speed = Math.random() * 4 ;
        this.frame = 0;
        this.timer = 0;

    }  

    update(){
        this.x += this.speed ;
        this.y += this.speed;
        
        this.timer++;
        if (this.timer % 5 === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    
    draw(ctx) {
        let playerImage = new Image();
        playerImage.src = './assets/Bat_Sprite_Sheet.png';
        ctx.drawImage(playerImage, this.frame * this.spriteWidth, this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);

    
    }

}