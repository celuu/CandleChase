export default class Board{


    constructor(){
        this.grid = Board.makeGrid();
        this.print();
        this.placeCandles();
    }

    static makeGrid(){
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

    static isValidPos(pos) {
        return (0 <= pos[0]) &&
            (pos[0] < 10) &&
            (0 <= pos[1]) &&
            (pos[1] < 20);
    }


    placeCandles(){
        let n = 10;
        let placed = 0;

        while (placed < n){
            let candleX = (Math.floor(Math.random() * 10));
            let candleY = (Math.floor(Math.random() * 20));
            pos = [candleX, candleY];


        }




    }

    
    










}