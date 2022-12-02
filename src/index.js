import Game from './candle_chase/game';
import Board from './candle_chase/board';

const canvas = document.getElementById("candle-canvas");
const ctx = canvas.getContext('2d')

let startGame = new Game(ctx);