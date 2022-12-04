export default class Character{
    constructor(candleCanvas){
        this.candleCanvas = candleCanvas;
        this.candleContext = candleCanvas.getContext('2d');
        this.dimensions = { width: candleCanvas.width, height: candleCanvas.height}

        this.animate(this.candleContext);
    }

    animate(candleCtx) {
        let playerImage = new Image();
        playerImage.src = './assets/Sprite-0002.png';

        playerImage.onload = () => {
            this.candleContext.drawImage(playerImage, 350, 100, 100, 100);
        }
    }

}