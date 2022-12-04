export default class Character{
    constructor(candleCanvas){
        this.candleCanvas = candleCanvas;
        this.candleContext = candleCanvas.getContext('2d');
        this.dimensions = { width: candleCanvas.width, height: candleCanvas.height}
        const startingX = 350;
        const startingY = 50;
        this.animate(this.candleContext);
    }

    animate(candleCtx) {
        let playerImage = new Image();
        playerImage.src = './assets/Head.png';

        playerImage.onload = () => {
            this.candleContext.drawImage(playerImage, this.startingX, this.startingY, 100, 100);
        }
    }

}