import Board from './board';

const boardCanvas = document.getElementById("candle-canvas");
const screenCanvas = document.getElementById("screen-canvas");

export default class Game{
    constructor(){
        this.score = 0;
        this.timer = 500;
        this.winningScore = 100;
        this.game = new Board(boardCanvas, screenCanvas);
    }

}