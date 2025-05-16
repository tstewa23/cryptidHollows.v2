import * as ex from 'excalibur'


const game = new ex.Engine({
    width: 600,
    height: 400,
    backgroundColor: ex.Color.fromRGB(100, 120, 105, 255),
    pixelArt: true,
    pixelRatio: 2,
    displayMode: ex.DisplayMode.FitScreen
});

game.start();