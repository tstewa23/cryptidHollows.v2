import * as ex from 'excalibur';

export class Character extends ex.Actor {
    private target: ex.Vector | null = null;
    private speed: number = 100; // pixels per second
    private xTurn: boolean = true;

    constructor() {
        super({
            x: 30,
            y: 30,
            width: 30,
            height: 30,
            color: ex.Color.fromRGB(100, 50, 50, 255)
        });
    };

    moveTo(pos: ex.Vector) {
        this.target = pos;
    }

    onPreUpdate(engine: ex.Engine, delta: number) {
        if (this.target) {
            const dir = this.target.sub(this.pos);
            const distance = dir.magnitude;

            if (distance < 2) {
                this.vel = ex.Vector.Zero;
                this.target = null;
            } else {
                this.vel = dir.normalize().scale(this.speed);
            }
            // } else {
            //     const slope = dir.normalize().scale(this.speed);
            //     if (this.xTurn) {
            //         this.vel = new ex.Vector(slope.x, 0);
            //         this.xTurn = false;
            //     } else if (!this.xTurn) {
            //         this.vel = new ex.Vector(0, slope.x);
            //         this.xTurn = true;
            //     }
            // }
        }
    }

    override onPostUpdate(engine: ex.Engine): void {
        engine.input.pointers.primary.on("down", (evt) => {
            const targetPos = evt.worldPos; // Position in world space
            this.moveTo(targetPos);
        });
    };

};