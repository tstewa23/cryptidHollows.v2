import * as ex from 'excalibur';
import { Chest } from './chest'

export class Character extends ex.Actor {
    private target: ex.Vector;
    private dir: ex.Vector;
    private move: boolean = false;
    private xTurn: boolean;
    private speed: number = 150; // pixels per second

    constructor() {
        super({
            x: 30,
            y: 30,
            width: 30,
            height: 30,
            color: ex.Color.fromRGB(50, 50, 50, 255),
            z: 2
        });
    };

    moveTo(pos: ex.Vector) {
        this.target = pos;
        this.dir = this.target.sub(this.pos);
        this.move = true;
        this.xTurn = Math.abs(this.dir.x) > Math.abs(this.dir.y)
    }

    override onInitialize(engine: ex.Engine): void {
        this.body.collisionType = ex.CollisionType.Passive;
    }


    override onPreUpdate(engine: ex.Engine, delta: number) {
        if (this.move) {

            const threshold = 2; // or something small like 0.5

            if (this.xTurn && Math.abs(this.pos.x - this.target.x) < threshold) {
                // reached x target
                this.vel = ex.Vector.Zero;
                this.move = false;
            } else if (!this.xTurn && Math.abs(this.pos.y - this.target.y) < threshold) {
                // reached y target
                this.vel = ex.Vector.Zero;
                this.move = false;
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
            if (!this.move) {
                this.moveTo(targetPos);
            }
        });
    };

    override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
        if (other.owner instanceof Chest) {
            this.vel = ex.Vector.Zero;
            this.move = false;

            const chest = other.owner as Chest;
            chest.color = ex.Color.fromRGB(255, 255, 0, 255);
            console.log(chest.color);
        }
    }

};