import * as ex from 'excalibur';
import { Character } from './character'
import { Chest } from './chest'

export class Level extends ex.Scene {
    character = new Character();
    chest = new Chest();

    override onInitialize(engine: ex.Engine): void {
        this.add(this.character);
        this.add(this.chest);
    }
};