import { Character } from "./character.js";

export class Arrow extends Character {
    static type = 'Arqueiro'
    static color = 'blue'
    static description = 'Você não escapará da mira de um poderoso arqueiro!'

    constructor (name) {
        super(name)
    }
}