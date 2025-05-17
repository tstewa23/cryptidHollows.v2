import * as ex from 'excalibur';
import { Config } from './config';
import { Character } from './character';
import { Villian } from './villian';
import { Chest } from './chest';
import { Wall } from './wall';

export class Level extends ex.Scene {
    character = new Character();
    map: number[][];

    constructor() {
        super();
        if (Array.isArray(Config.levelOne) && Array.isArray(Config.levelOne[0])) {
            this.map = Config.levelOne as number[][];
        }
    }

    override onInitialize(engine: ex.Engine): void {
        this.add(this.character);

        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === 1) {
                    this.add(new Wall(x * Config.unit, y * Config.unit, Config.unit, ex.Color.Black));
                }
                if (this.map[y][x] === 2) {
                    this.add(new Chest(x * Config.unit, y * Config.unit, Config.unit, ex.Color.fromRGB(100, 50, 50, 255)));
                }
                if (this.map[y][x] === 3) {
                    this.add(new Villian(x * Config.unit, y * Config.unit, Config.unit, ex.Color.fromRGB(100, 50, 50, 255), this.character));
                    console.log(`added`);
                }
            }
        }

    }
};