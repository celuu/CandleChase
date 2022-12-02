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
        if(this.isValidPos(pos) && this.grid[pos[0]][pos[1]] === null){
            return true;
        } else {
            return false;
        }
    }

    isSurroundingAreaEmpty(pos){
        let arrX = [1, -1];
        let arrY = [1, -1];

        
    }


    placeCandles(){
        let n = 10;
        let placed = 0;
        let newArr = []

        while (placed < n){
            let candleX = (Math.floor(Math.random() * 10));
            let candleY = (Math.floor(Math.random() * 20));
            let pos = [candleX, candleY];
            if(this.isValidPos(pos) && this.isEmpty(pos)){
                newArr.push(pos);
                this.grid[pos[0]][pos[1]] = "X";
                placed++;
            }
        }
        console.log(newArr);
        console.log(this.grid);
    }

    
    










}