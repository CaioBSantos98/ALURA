import { Character } from "./character.js";
import { Arrow } from "./arrow.js"
import { Mage } from "./mage.js"

export class ArrowMage extends Character {
    sideArrow
    sideMage
    static type = 'Arqueiro-Mago'
    static color = 'purple'
    static description = 'Você não escapará da mira de um poderoso arqueiro de fogo!'

    constructor(name) {
        super(name)
        this.sideArrow = new Arrow(name)
        this.sideMage = new Mage(name)
    }
}