import * as ex from 'excalibur';
import { Config } from './config';
import { LevelOne } from './levelOne';


const game = new ex.Engine({
    width: 19 * Config.unit,
    height: 13 * Config.unit,
    backgroundColor: ex.Color.White,
    pixelArt: true,
    pixelRatio: 2,
    scenes: { L1: LevelOne },
});

game.start().then(() => {
    game.goToScene('L1');
});