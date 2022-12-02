export default class Board{


    
    constructor(){
        const canvas = document.getElementById("candle-canvas");
        const ctx = canvas.getContext('2d');
        this.dimensions = { width: canvas.width, height: canvas.height }
        this.grid = this.makeGrid();
        this.print();
        this.placeCandles();
    }

    makeGrid(){
        const grid = [];
        for(let i = 0; i < 10; i++){
            grid.push([]);
            for(let j = 0; j < 20; j++) {
                grid[i].push(null);
            }        
        }
        return grid;
    }
    print() {
        const strs = [];
        for (let rowIdx = 0; rowIdx < 10; rowIdx++) {
            const marks = [];
            for (let colIdx = 0; colIdx < 20; colIdx++) {
                marks.push(
                    this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : " "
                );
            }
            strs.push(`${marks.join('|')}\n`);
        }

        console.log(strs.join('\n'));
    }

    isValidPos(pos) {
        return (0 <= pos[0]) &&
            (pos[0] < 10) &&
            (0 <= pos[1]) &&
            (pos[1] < 20);
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


    placeCandles(){
        let n = 10;
        let placed = 0;

        while (placed < n){
            let candleX = (Math.floor(Math.random() * 10));
            let candleY = (Math.floor(Math.random() * 20));
            let pos = [candleX, candleY];
            console.log(pos);
            if (this.isAvailableForPlacement(pos)){
                this.grid[pos[0]][pos[1]] = "X";
                placed++;
            }
        }
        console.log(this.grid);
    }

    
    










}