import { Character } from "./character.js";

export class Warrior extends Character {
    static type = 'Guerreiro'
    static color = 'red'
    static description = 'O guerreiro mais temido deste mundo!'

    constructor(name) {
        super(name);
    }
}