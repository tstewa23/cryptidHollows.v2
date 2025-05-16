import * as ex from 'excalibur';

export class Wall extends ex.Actor {

    constructor() {
        super({
            x: 50,
            y: 220,
            width: 32,
            height: 32,
            color: ex.Color.Black
        });
    };

    override onInitialize(engine: ex.Engine): void {

        this.collider.set(ex.Shape.Box(32, 32)); // match the visual size
        this.body.collisionType = ex.CollisionType.Fixed;
    }



};