import * as ex from 'excalibur';

export class Chest extends ex.Actor {

    constructor() {
        super({
            x: 300,
            y: 300,
            width: 32,
            height: 32,
            color: ex.Color.fromRGB(100, 50, 50, 255)
        });
    };

    override onInitialize(engine: ex.Engine): void {

        this.collider.set(ex.Shape.Box(32, 32)); // match the visual size
        this.body.collisionType = ex.CollisionType.Fixed;
    }



};