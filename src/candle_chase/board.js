const gridWidth = 10;
const gridHeight = 6;

import Character from "./character";
import Position from "./position";

export default class Board{

    constructor(candleCanvas, screenCanvas){
        this.candleCanvas = candleCanvas;
        this.screenCanvas = screenCanvas;
        this.candleCtx = candleCanvas.getContext('2d');
        this.screenCtx = screenCanvas.getContext('2d');
        this.dimensions = { width: screenCanvas.width, height: screenCanvas.height }
        this.grid = this.makeEmptyGrid();
        this.applyScreen(this.screenCtx);
        this.populateAndPlaceCandles();
        this.character = new Character(candleCanvas);
    }

    applyScreen(ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    removeScreen(x, y) {
        this.screenCtx.globalCompositeOperation = "destination-out";
        this.screenCtx.shadowBlur = 30;
        this.screenCtx.shadowColor = "red";

        for (let i = 0; i < 5; i++) {
            this.screenCtx.beginPath();
            this.screenCtx.arc(x, y, 20, 0, 2 * Math.PI, false);
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
        console.log(` ${result ? 'is empty' : 'filled'} `, pos)
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

    populateAndPlaceCandles(){
        let maxCount = 10;
        let placedCount = 0;
        let attempts = 0

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
                this.addCandles(gridPosition.x + xOffset, gridPosition.y + yOffset);
                this.removeScreen(gridPosition.x + 25 + xOffset, gridPosition.y + 10 + yOffset);
            }
        }
        if (attempts >= 100) {
            console.error("gave up")
        }
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

    addCandles(x, y) {
        let candles = new Image();
        candles.src = './assets/candles.png';

        candles.onload = () => {
            this.candleCtx.drawImage(candles, x, y, 50, 50);
        }
    }
}