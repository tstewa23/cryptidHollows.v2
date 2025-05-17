import * as ex from 'excalibur';
import { Level } from './level';
import { Config } from './config';

//example level with brown character that is chased by white villians

export class LevelOne extends Level {

    constructor() {
        const bgdColor = ex.Color.DarkGray;

        const wColor = ex.Color.Gray;

        const vSize = Config.unit;
        const vColor = ex.Color.White;
        const vZ = 10;
        const vSpeed = Config.unit * 3;

        const levelMap = Config.levelOne;

        //Uses level map to make map with sent specifications
        if (Array.isArray(levelMap) && Array.isArray(levelMap[0])) {
            super(levelMap as number[][], wColor, vSize, vColor, vZ, vSpeed, bgdColor);
        }
    }

};