import * as ex from 'excalibur';

export class Chest extends ex.Actor {
    private target: ex.Vector;
    private dir: ex.Vector;
    private move: boolean = false;
    private xTurn: boolean;
    private speed: number = 150; // pixels per second

    constructor() {
        super({
            x: 300,
            y: 300,
            width: 30,
            height: 30,
            color: ex.Color.fromRGB(100, 50, 50, 255),
            z: 1
        });
    };

    override onInitialize(engine: ex.Engine): void {
        this.body.collisionType = ex.CollisionType.Fixed;
    }



};