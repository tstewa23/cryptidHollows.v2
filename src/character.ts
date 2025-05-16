import * as ex from 'excalibur';
import { Chest } from './chest';

export class Character extends ex.Actor {
    private target: ex.Vector;
    private dir: ex.Vector;
    private xTurn: boolean;
    private speed: number = 200; // pixels per second
    private boxGraphic: ex.Rectangle;
    public armed: boolean = false;

    constructor() {
        super({
            x: 30,
            y: 30,
            width: 32,
            height: 32,
        });

        // Create and store the graphic
        this.boxGraphic = new ex.Rectangle({
            width: 32,
            height: 32,
            color: ex.Color.fromRGB(50, 50, 50, 255)
        });

        // Use it for the actor’s appearance
        this.graphics.use(this.boxGraphic);

    };

    public changeColor(newColor: ex.Color) {
        this.boxGraphic.color = newColor;
    }

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

    override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
        if (other.owner instanceof Chest) {
            this.changeColor(ex.Color.fromRGB(120, 100, 0, 255));
            this.armed = true;
        }
    }

};