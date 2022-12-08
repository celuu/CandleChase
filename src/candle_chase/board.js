const gridWidth = 15;
const gridHeight = 10;

import Position from "./position";
import Candle from "./candle";


export default class Board{

    constructor(candleCanvas, screenCanvas){
        this.candleCanvas = candleCanvas;
        this.screenCanvas = screenCanvas;
        this.candleCtx = candleCanvas.getContext('2d');
        this.screenCtx = screenCanvas.getContext('2d');
        this.dimensions = { width: screenCanvas.width, height: screenCanvas.height }
        this.grid = this.makeEmptyGrid();
        this.candles = this.generateCandles();
        this.allCandlesLit = false;
        this.width = 100;
        this.height = 100;
        this.candleWidth = 50;
        this.candleHeight = 50;
        this.x = 350;
        this.y = 0;
        this.speed = 0;
        this.maxSpeed = 5;
        this.spriteWidth = 128;
        this.spriteHeight = 128;
        this.frame = 1;
        this.timer = 0;
    }

    update(character, keys){
        if(keys.includes('Space')){
            let allLit = true;
            for (let i = 0; i < this.candles.length; i++) {
                let candle = this.candles[i];
                let a = character.x  - candle.x ;
                let b = character.y  - candle.y;
                let distanceBetween = Math.sqrt(a * a + b * b);
                if(distanceBetween < 100){
                    candle.isLit = true;
                }
                allLit = allLit && candle.isLit
            } 
            this.allCandlesLit = allLit;
        }
    }

    draw(character){
        this.drawAllCandles()
        this.drawInitialScreen()
        this.removeScreen(character.x + 70, character.y + 50, 40); 
        this.removeScreen(500, 120, 60);
        this.removeScreenForTimer(20, 40, 225, 45);

        for (let i = 0; i < this.candles.length; i++) {
            let candle = this.candles[i];
            if (candle.isLit) {
                this.removeScreen(candle.x + 25, candle.y + 10, 30);
            }
        } 
    }

    removeScreenForTimer(topLeft, topRight, bottomLeft, bottomRight) {
        this.screenCtx.fillStyle = "#FFFFFF";
        this.screenCtx.fillRect(topLeft, topRight, bottomLeft, bottomRight);
        this.screenCtx.fill();
        this.screenCtx.globalCompositeOperation = "destination-out";
        this.screenCtx.shadowBlur = 30;
        this.screenCtx.shadowColor = "white";

        this.screenCtx.lineWidth = 5;
        this.screenCtx.stroke();
    }

    drawInitialScreen(){
        this.screenCtx.globalCompositeOperation = "source-over";
        this.screenCtx.fillStyle = "black";
        this.screenCtx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    removeScreen(x, y, radius) {
        this.screenCtx.globalCompositeOperation = "destination-out";
        this.screenCtx.shadowBlur = 30;
        this.screenCtx.shadowColor = "white";

        for (let i = 0; i < 5; i++) {
            this.screenCtx.beginPath();
            this.screenCtx.arc(x, y, radius, 0, 2 * Math.PI, false);
            this.screenCtx.fill();
            this.screenCtx.lineWidth = 5;
            this.screenCtx.stroke();
        }
    }

    makeEmptyGrid() {
        let grid = [];
        for (let row = 0; row < gridHeight; row++){
            grid.push([]);
            for (let col = 0; col < gridWidth; col++) {
                grid[row].push(null);
            }        
        }
        return grid;
    }

    isValidPos(pos) {
        if (pos.row < 0 || pos.row >= gridHeight) {
            return false;
        }
        if (pos.col < 0 || pos.col >= gridWidth) {
            return false;
        }
        return true;
    }

    isEmpty(pos) {
        const result = this.grid[pos.row][pos.col] === null
        return result
    }

    isAvailableForPlacement(pos) {
        if (!this.isValidPos(pos)) {
            return false;
        }
        for(let rowAdjust = -1; rowAdjust < 2; rowAdjust++){
            for (let colAdjust = -1; colAdjust < 2; colAdjust++){
                let newPos = new Position(pos.row + rowAdjust, pos.col + colAdjust)
                if (!this.isValidPos(newPos) || !this.isEmpty(newPos)) {
                    return false;
                }
            }
        }
        return true;
    }

    generateCandles(){
        let maxCount = 10;
        let placedCount = 0;
        let attempts = 0
        let candles = [];

        while (placedCount < maxCount && attempts < 100){
            attempts += 1;
            let candleRow = (Math.floor(Math.random() * gridHeight));
            let candleCol = (Math.floor(Math.random() * gridWidth));
            const pos = new Position(candleRow, candleCol);
            if (this.isAvailableForPlacement(pos)) {
                this.grid[pos.row][pos.col] = "X"
                let gridPosition = this.calculateXY(pos);
                placedCount++;
                const xOffset = -10 + (Math.floor(Math.random() * 20))
                const yOffset = -10 + (Math.floor(Math.random() * 20))
                const newCandle = new Candle(gridPosition.x + xOffset, gridPosition.y + yOffset)
                candles.push(newCandle);
            }
        }
        if (attempts >= 100) {
            console.error("gave up")
        }

        return candles;
    }

    calculateXY(pos) {
        let row = pos.row;
        let col = pos.col;
        let hash = {}
        const topPadding = 150;
        const leftPadding = 10;
        const rightPadding = 10;
        const placeableHeight = this.dimensions.height - topPadding;
        const placeableWidth = this.dimensions.width - leftPadding - rightPadding;
        let x = placeableWidth * (col/gridWidth) + leftPadding;
        hash["x"] = x
        let y = placeableHeight * (row/gridHeight) + topPadding;
        hash["y"] = y
        return hash;
    }

    drawAllCandles() {
        if (this.candleImage) {
            for (let i = 0; i < this.candles.length; i++) {
                let candle = this.candles[i];
                if(candle.isLit){
                    let litCandle = new Image();
                    litCandle.src = 'assets/lit-candles.png';
                    this.candleCtx.drawImage(litCandle, candle.x, candle.y, this.candleWidth, this.candleHeight);
                }
                this.candleCtx.drawImage(this.candleImage, candle.x, candle.y, this.candleWidth, this.candleHeight);
            }
            return
        }

        let candleImage = new Image();
        candleImage.src = 'assets/candles.png';
        
        candleImage.onload = () => {
            this.candleImage = candleImage
        }
    }

}