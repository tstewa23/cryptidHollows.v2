import * as ex from 'excalibur';

export class Chest extends ex.Actor {

    constructor(x: number, y: number, size: number, color: ex.Color) {
        super({
            x: x,
            y: y,
            width: size,
            height: size,
            color: color,
        });
    };

    override onInitialize(engine: ex.Engine): void {
        this.collider.set(ex.Shape.Box(32, 32)); // match the visual size
        this.body.collisionType = ex.CollisionType.Fixed;
    }

};