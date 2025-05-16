import * as ex from 'excalibur';
import { Character } from './character'

export class Level extends ex.Scene {
    character = new Character();

    override onInitialize(engine: ex.Engine): void {
        this.add(this.character);
    }
};