# [CandleChase](https://celuu.github.io/CandleChase/)


## Background

Candle Chase starts off in a room in a mansion. The room is very dark and there will be lightning that strikes that allows the player to see the remaining candles. The player must go around a light the unlit candles in the room. There is a time limit and the player must light all the candles before time is up!

## How to Play

- Press spacebar to start the game
- Move the character around using the arrow keys
- Press spacebar to light the candles
- Avoid the bat
- Click the mute icon to mute music
- Light all the candles before time runs out to win the game

## Functionality & MVPs

In Candle Chase, users will be able to: 

- Start, and reset the game board
- Maneuver around the board 
- Toggle the mute button on and off
- Light other candles by pressing the spacebar

## Technologies, Libraries, APIs

- The Canvas API to render the game board
- Webpack and Babel to bundle and transpile the source Javascript code
- Npm to manage project dependencies

## Implementation Details

### Collision Detection

The code detects the collisions between the bat and the character by checking the hit boxes of each other.

```javascript
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
```

### Game Physics

The code updates the characters animations based on the input and adding velocity to the characters speed. It also checks to see if the character is in the "isDying" state which pauses all input from the user.
 
```javascript
update(input, isDying){
        if(isDying){
            return;
        }
        let xSpeed = 0;
        let ySpeed = 0;

        //horizontal movement

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
```









