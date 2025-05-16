import * as ex from 'excalibur';
import { Level } from './level';


const game = new ex.Engine({
    width: 600,
    height: 400,
    backgroundColor: ex.Color.fromRGB(100, 120, 105, 255),
    pixelArt: true,
    pixelRatio: 2,
    scenes: { Level: Level },
});

game.start().then(() => {
    game.goToScene('Level');
});