import * as ex from 'excalibur';

export class Character extends ex.Actor {
    constructor() {
        super({
            x: 30,
            y: 30,
            width: 30,
            height: 30,
            color: ex.Color.fromRGB(100, 50, 50, 255)
        });
    }
};