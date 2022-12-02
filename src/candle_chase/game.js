import Board from './board';

export default class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.score = 0;
        this.timer = 500;
        this.winningScore = 100;
        this.game = new Board();
    }

}