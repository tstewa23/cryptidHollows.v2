import * as ex from 'excalibur';
import { Character } from './character'
import { Villian } from './villian'
import { Chest } from './chest'

export class Level extends ex.Scene {
    character = new Character();
    villian = new Villian();
    chest = new Chest();

    override onInitialize(engine: ex.Engine): void {
        this.add(this.character);
        this.add(this.villian);
        this.add(this.chest);
    }
};