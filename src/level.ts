import * as ex from 'excalibur';
import { Config } from './config';
import { Character } from './character';
import { Villian } from './villian';
import { Chest } from './chest';
import { Wall } from './wall';

export class Level extends ex.Scene {
    character = new Character();

    constructor(
        public map: number[][],
        public wallColor: ex.Color,
        public villianSize: number,
        public villianColor: ex.Color,
        public villianZ: number,
        public villianSpeed: number,
        public backgroundColor: ex.Color,
        public chestColor: ex.Color = ex.Color.Brown
    ) {
        super();
    }

    override onInitialize(engine: ex.Engine): void {
        this.add(this.character);

        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                const actorX = (x * Config.unit) + (Config.unit / 2);
                const actorY = (y * Config.unit) + (Config.unit / 2);
                if (this.map[y][x] === 1) {
                    this.add(new Wall(actorX, actorY, Config.unit, this.wallColor));
                }
                if (this.map[y][x] === 2) {
                    this.add(new Chest(actorX, actorY, Config.unit, this.chestColor));
                }
                if (this.map[y][x] === 3) {
                    this.add(new Villian(actorX, actorY, this.villianSize, this.villianColor, this.villianZ, this.character, this.villianSpeed));
                }
            }
        }

    }

    override onActivate(ctx: ex.SceneActivationContext): void {
        this.engine.backgroundColor = this.backgroundColor;
    }
};