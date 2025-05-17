import * as ex from 'excalibur';
import { Character } from './character';

export class Villian extends ex.Actor {
    private character: Character;
    private target: ex.Vector;
    private dir: ex.Vector;
    private speed: number;

    constructor(x: number, y: number, size: number, color: ex.Color, z: number, character: Character, speed: number) {
        super({
            x: x,
            y: y,
            width: size,
            height: size,
            color: color,
            z: z
        });
        this.character = character;
        this.speed = speed;
    };

    override onInitialize(engine: ex.Engine): void {
        this.collider.set(ex.Shape.Box(32, 32)); // match the visual size
        this.body.collisionType = ex.CollisionType.Passive;
    }

    override onPreUpdate(engine: ex.Engine, delta: number) {
        // if (this.target) {
        this.target = this.character.pos;
        this.dir = this.target.sub(this.pos);
        const distance = this.dir.magnitude;

        if (distance < 2) {
            // reached x target
            this.vel = ex.Vector.Zero;
        }
        else {
            this.vel = this.dir.normalize().scale(this.speed);
        }
    }

    override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
        if (other.owner instanceof Character) {
            if (!other.owner.armed) {
                other.owner.kill();
            } else {
                this.kill();
            }
        }
    }

};