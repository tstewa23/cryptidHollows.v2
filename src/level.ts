import * as ex from 'excalibur';
import { Config } from './config';
import { Character } from './character';
import { Villian } from './villian';
import { Chest } from './chest';
import { Wall } from './wall';

const unit = 32;

export class Level extends ex.Scene {
    character = new Character();
    villian = new Villian(this.character);
    chest = new Chest();
    wall = new Wall(unit * 3, unit * 6, unit, ex.Color.Black);
    map: number[][];

    constructor() {
        super();
        if (Array.isArray(Config.levelOne) && Array.isArray(Config.levelOne[0])) {
            this.map = Config.levelOne as number[][];
        }
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[0].length; x++) {
                console.log(`x:${x} y:${y}`);

            }
        }
    }

    override onInitialize(engine: ex.Engine): void {
        this.add(this.character);
        this.add(this.villian);
        this.add(this.chest);
        this.add(this.wall);

        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === 1) {
                    this.add(new Wall(x * unit, y * unit, unit, ex.Color.Black));
                }
            }
        }

    }
};