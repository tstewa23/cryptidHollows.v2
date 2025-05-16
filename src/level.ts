import * as ex from 'excalibur';
import { Character } from './character'
import { Villian } from './villian'
import { Chest } from './chest'
import { Wall } from './wall'

export class Level extends ex.Scene {
    character = new Character();
    villian = new Villian(this.character);
    chest = new Chest();
    wall = new Wall();

    override onInitialize(engine: ex.Engine): void {
        this.add(this.character);
        this.add(this.villian);
        this.add(this.chest);
        this.add(this.wall);
    }
};