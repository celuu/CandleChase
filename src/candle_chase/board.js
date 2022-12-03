const gridWidth = 20;
const gridHeight = 10;

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
    }

    applyScreen(ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    removeScreen(x, y) {
        this.screenCtx.globalCompositeOperation = "destination-out";
        this.screenCtx.shadowBlur = 20;
        this.screenCtx.shadowColor = "white";

        this.screenCtx.beginPath();
        this.screenCtx.arc(x, y, 20, 0, 2 * Math.PI, false);
        this.screenCtx.fill();
        this.screenCtx.lineWidth = 5;
        this.screenCtx.stroke();
    }


    makeEmptyGrid() {
        let grid = [];
        for (let i = 0; i < gridHeight; i++){
            grid.push([]);
            for (let j = 0; j < gridWidth; j++) {
                grid[i].push(null);
            }        
        }
        return grid;
    }

    isValidPos(pos) {
        return (0 <= pos[0]) &&
            (pos[0] < gridHeight) &&
            (0 <= pos[1]) &&
            (pos[1] < gridWidth);
    }

    isEmpty(pos){
        if(this.grid[pos[0]][pos[1]] === null){
            return true;
        } else {
            return false;
        }
    }

    isAvailableForPlacement(pos) {
        if (!this.isValidPos(pos)) {
            return false;
        }
        for(let i = -1; i < 2; i++){
            for (let j = -1; j < 2; j++){
                let newPos = [pos[0] + i, pos[1] + j];
                if (this.isValidPos(newPos) && !this.isEmpty(newPos)) {
                    return false;
                }
            }
        }
        return true;
    }

    populateAndPlaceCandles(){
        let n = 10;
        let placed = 0;

        while (placed < n){
            let candleRow = (Math.floor(Math.random() * gridHeight));
            let candleCol = (Math.floor(Math.random() * gridWidth));
            let pos = [candleRow, candleCol];
            if (this.isAvailableForPlacement(pos)){
                let gridPosition = this.calculateXY(pos);
                console.log(gridPosition.x);
                placed++;
                this.addCandles(gridPosition.x, gridPosition.y);
                this.removeScreen(gridPosition.x, gridPosition.y);
            }
        }
    }

    calculateXY(pos){
        let row = pos[0];
        let col = pos[1];
        let hash = {}
        let x = this.dimensions.width * (col/gridWidth);
        hash["x"] = x
        let y = this.dimensions.height * (row/gridHeight);
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