import Board from './board';
import InputHandler from './input';
import Character from './character'


const candleCanvas = document.getElementById("candle-canvas");
const candleCtx = candleCanvas.getContext('2d');
const screenCanvas = document.getElementById("screen-canvas");

export default class Game{
    constructor(){
        this.score = 0;
        this.timer = 500;
        this.winningScore = 100;
        this.game = new Board(candleCanvas, screenCanvas);
        this.player = new Character(candleCanvas, this);
        this.input = new InputHandler();
    }

    update(){
        this.player.update(this.input.keys);
    }
    




}