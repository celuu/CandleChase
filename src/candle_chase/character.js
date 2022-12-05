
export default class Character{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = 350;
        this.y = 0;
        this.desiredX = 350;
        this.desiredY = 0;
        this.speed = 0;
        this.maxSpeed = 5;
        this.spriteWidth = 129;
        this.spriteHeight = 128;
        this.frame = 1;
        this.timer = 0;
    }  

    update(input){
        this.desiredY = this.y + this.speed;
        if(input.includes('ArrowRight')) {
            this.speed = this.maxSpeed;
            this.timer++;
            if (this.timer % 5 === 0) {
                this.frame > 6 ? this.frame = 0 : this.frame++;
            }
        }
        else if (input.includes('ArrowLeft')) {
            this.speed = -this.maxSpeed;
            this.timer++;
            if (this.timer % 5 === 0) {
                this.frame > 6 ? this.frame = 0 : this.frame++;
            }
        } 
        else this.speed = 0;
        if(this.desiredX < 0) this.desiredX = 0;
        if (this.desiredX > this.game.dimensions.width - this.width) this.desiredX = this.game.dimensions.width - this.width;

        //vertical movement
        this.desiredX = this.x + this.speed;
        if (input.includes('ArrowUp')){
            this.speed = -this.maxSpeed;
            this.timer++;
            if (this.timer % 5 === 0) {
                this.frame > 6 ? this.frame = 0 : this.frame++;
            }
        } 
        else if (input.includes('ArrowDown')){
            this.speed = this.maxSpeed;
            this.timer++;
            if (this.timer % 5 === 0) {
                this.frame > 6 ? this.frame = 0 : this.frame++;
            }
        } 
        else this.speed = 0;

        if (this.desiredY < 0) this.desiredY = 0;
        if (this.desiredY > this.game.dimensions.height - this.height) this.desiredY = this.game.dimensions.height - this.height;
    }


    draw(ctx){
        let playerImage = new Image();
        playerImage.src = './assets/walking_dog.png';
        ctx.drawImage(playerImage, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }

    // detectCollisions() {
    // let charPos = [this.x, this.y]; 


    //     // Reset collision state of all objects
    //     for (let i = 0; i < gameObjects.length; i++) {
    //         gameObjects[i].isColliding = false;
    //     }

    //     // Start checking for collisions
    //     for (let i = 0; i < gameObjects.length; i++) {
    //         obj1 = gameObjects[i];
    //         for (let j = i + 1; j < gameObjects.length; j++) {
    //             obj2 = gameObjects[j];

    //             // Compare object1 with object2
    //             if (rectIntersect(obj1.x, obj1.y, obj1.width, obj1.height, obj2.x, obj2.y, obj2.width, obj2.height)) {
    //                 obj1.isColliding = true;
    //                 obj2.isColliding = true;
    //             }
    //         }
    //     }
    // }




}

