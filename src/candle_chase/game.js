import Board from './board';

export default class Game{
    
    constructor(canvas){
        // this.ctx = canvas.getContext('2d');
        this.dimensions = {width: canvas.width, height: canvas.height}
        this.game = new Board(canvas);
    }

}