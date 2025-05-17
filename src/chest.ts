import * as ex from 'excalibur';
import { Config } from './config';

export class Chest extends ex.Actor {

    constructor() {
        super({
            x: Config.chestX,
            y: Config.chestY,
            width: Config.unit,
            height: Config.unit,
            color: Config.chestColor,
        });
    };

    override onInitialize(engine: ex.Engine): void {

        this.collider.set(ex.Shape.Box(32, 32)); // match the visual size
        this.body.collisionType = ex.CollisionType.Fixed;
    }

};