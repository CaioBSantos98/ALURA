export class Character {
    name
    #level
    life = 100
    mana = 100

    constructor(name) {
        this.name = name
        this.#level = 1
    }

    get level () {
        return this.#level
    }

    set level(newLevel) {
        if(newLevel >= 1 && newLevel <= 10){
            this.#level = newLevel
        }
    }

    upLevel() {
        this.level += 1
    }

    downLevel() {
        this.level -= 1
    }

    obterInsignia () {
        if (this.#level >= 5) {
            return `${this.constructor.type} implacável!`
        }
        return `${this.constructor.type} iniciante.`
    }

    static verifyWinner(character1, character2) {
        if(character1.level === character2.level) {
            return 'Empate!'
        }
        if (character1.level > character2.level) {
            return `${character1.constructor.type} ${character1.name} venceu o duelo!`
        }
        return `${character2.constructor.type} ${character2.name} venceu o duelo!`
    }


}