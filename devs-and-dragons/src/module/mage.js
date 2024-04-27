import { Character } from "./character.js";

export class Mage extends Character {
    static type = 'Mago'
    static color = 'green'
    static description = 'Detentor de poderes místicos e feitiçarias.'

    constructor(name) {
        super(name);
    }
}