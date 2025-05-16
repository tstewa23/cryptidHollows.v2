import * as ex from 'excalibur';
import { Character } from './character';

export class Villian extends ex.Actor {
    private target: ex.Vector;
    private dir: ex.Vector;
    private xTurn: boolean;
    private speed: number = 100; // pixels per second

    constructor() {
        super({
            x: 500,
            y: 120,
            width: 32,
            height: 32,
            color: ex.Color.fromRGB(150, 150, 150, 255)
        });
    };

    moveTo(pos: ex.Vector) {

        this.target = pos;
        this.dir = this.target.sub(this.pos);
        this.xTurn = Math.abs(this.dir.x) > Math.abs(this.dir.y)
        this.vel = new ex.Vector(1, 1);
    }

    override onInitialize(engine: ex.Engine): void {
        this.collider.set(ex.Shape.Box(32, 32)); // match the visual size
        this.body.collisionType = ex.CollisionType.Active;
    }


    override onPreUpdate(engine: ex.Engine, delta: number) {

        if (this.vel !== ex.Vector.Zero && this.target) {

            const threshold = 2; // or something small like 0.5

            if (this.xTurn && Math.abs(this.pos.x - this.target.x) < threshold) {
                // reached x target
                this.vel = ex.Vector.Zero;
            } else if (!this.xTurn && Math.abs(this.pos.y - this.target.y) < threshold) {
                // reached y target
                this.vel = ex.Vector.Zero;
            }
            else {
                if (this.xTurn) {
                    this.vel = new ex.Vector(Math.sign(this.dir.x), 0).scale(this.speed);
                } else {
                    this.vel = new ex.Vector(0, Math.sign(this.dir.y)).scale(this.speed);
                }
            }
        }
    }

    override onPostUpdate(engine: ex.Engine): void {
        engine.input.pointers.primary.on("down", (evt) => {

            const targetPos = evt.worldPos; // Position in world space
            if (this.vel.equals(ex.Vector.Zero)) {

                this.moveTo(targetPos);
            }
        });
    };

};