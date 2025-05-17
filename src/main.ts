import * as ex from 'excalibur';
import { Config } from './config';
import { Level } from './level';


const game = new ex.Engine({
    width: 19 * Config.unit,
    height: 13 * Config.unit,
    backgroundColor: ex.Color.fromRGB(100, 120, 105, 255),
    pixelArt: true,
    pixelRatio: 2,
    scenes: { Level: Level },
});

game.start().then(() => {
    game.goToScene('Level');
});