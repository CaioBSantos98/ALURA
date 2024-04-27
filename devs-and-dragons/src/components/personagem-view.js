import { ArrowMage } from '../module/arrow-mage.js';
import { Arrow } from '../module/arrow.js';
import { Character } from '../module/character.js';
import { Mage } from '../module/mage.js';
import { Warrior } from '../module/warrior.js';
import { showModal } from './modal.js'

export class CharacterView {
    characters
    selectedCharacters
    
    constructor(characters) {
        this.listaDePersonagens = document.querySelector('.characterUl');
        this.characters = characters
        this.selectedCharacters = []
        this.listenEventDuel()
        this.listenEventNewCharacter()
    }

    render () {
        this.listaDePersonagens.innerHTML = ''
        this.characters.forEach(character => {
            const characterLi = this.createCharacter(character)
            this.listaDePersonagens.appendChild(characterLi)
        })
    }

    createCharacter(character) {
        const characterLi = document.createElement('li');

        
        characterLi.innerHTML = `
        <div class="card ${character.constructor.type.toLowerCase()}-card">
            <div class="header-card">
                <div class="badge-container ${character.constructor.type.toLowerCase()}-badge"></div>
                <div class="level-container">
                    <button class="plusLevel">+</button>
                    <p class="level-character-container ${character.constructor.color}-level">Level ${character.level}</p>
                    <button class="minusLevel">-</button>
                </div>
            </div>
            <div class="type-container">
                <div class="character-image-container ${character.constructor.type.toLowerCase()}-imagem"></div>
                <p class="character-type">${character.constructor.type}</p>
            </div>
            <div class="name-container">${character.name}</div>
            <div class="description-container">${character.constructor.description}</div>
            <div class="low-bar-container ${character.constructor.color}-low-bar">
                <div class="mana-container">
                    <i class="mana-icon"></i>
                    <p class="mana-value">${character.mana}</p>
                </div>
                <p class="insignia">${character.obterInsignia()}</p>
                <div class="life-container">
                    <i class="life-icon"></i>
                    <p class="life-value">${character.life}</p>
                </div>
            </div>
        </div>   
        `

        const upLevelBtn = characterLi.querySelector('.plusLevel')
        upLevelBtn.onclick = (evt) => {
            evt.stopPropagation()
            character.upLevel()
            this.render()
        }

        const downLevelBtn = characterLi.querySelector('.minusLevel')
        downLevelBtn.onclick = (evt) => {
            evt.stopPropagation()
            character.downLevel()
            this.render()
        }

        characterLi.onclick = () => {
            const has2Selected = this.selectedCharacters.length === 2
            const indexCharacterLi = this.selectedCharacters.indexOf(character)
            

            if (has2Selected) {
                if (characterLi.classList.contains('selected') && indexCharacterLi !== -1) {
                    characterLi.classList.toggle('selected')
                    upLevelBtn.classList.toggle('hidden')
                    downLevelBtn.classList.toggle('hidden')
                    this.selectedCharacters.splice(indexCharacterLi, 1)
                    //console.log(this.selectedCharacters)
                }
                
            } else {
                characterLi.classList.toggle('selected')
                upLevelBtn.classList.toggle('hidden')
                downLevelBtn.classList.toggle('hidden')
                
                if(characterLi.classList.contains('selected')) { // SE TIVER A CLASSE DE SELECIONADO ENTRA AQUI
                    this.selectedCharacters.push(character)
                } else {                                        // SE NAO TIVER A CLASSE DE SELECIONADO ENTRA AQUI
                    if (indexCharacterLi !== -1) {
                        this.selectedCharacters.splice(indexCharacterLi, 1)
                    }
                }
                //console.log(this.selectedCharacters)
            }
            
        }
                
        return characterLi
    }

    listenEventDuel() {
        const duelBtn = document.querySelector('.duelBtn')

        duelBtn.addEventListener('click', () => {
            if (this.selectedCharacters.length < 2) return showModal('Selecione ao menos 2 personagens!')

            const duelWinner = Character.verifyWinner(this.selectedCharacters[0], this.selectedCharacters[1])

            showModal(duelWinner)

            this.selectedCharacters.splice(0, this.selectedCharacters.length)

            this.render()
        })
    }

    listenEventNewCharacter() {
        const newCharacterBtn = document.querySelector('.newCharacterBtn')
        const containermNewCharacter = document.querySelector('.new-character-container')
        const newCharacterCloseBtn = document.querySelector('.new-character-close-btn')
        const overlay = document.getElementById('overlay')
        const sbtNewCharacterBtn = document.getElementById('new-character-confirm-btn')

        newCharacterBtn.addEventListener('click', () => {
            containermNewCharacter.classList.toggle('hidden')
            overlay.classList.add('overlay')
        })

        newCharacterCloseBtn.addEventListener('click', () => {
            containermNewCharacter.classList.add('hidden')
            overlay.classList.remove('overlay')
        })

        sbtNewCharacterBtn.addEventListener('click', (evt) => {
            evt.preventDefault()
            const characterName = document.querySelector('.character-name').value
            const characterVocation = document.querySelector('.character-vocation').value
            let addNewCharacter

            switch (characterVocation) {
                case 'Mago':
                    addNewCharacter = new Mage (characterName)
                    break
                case 'Arqueiro':
                    addNewCharacter = new Arrow (characterName)
                    break
                case 'Arqueiro-Mago':
                    addNewCharacter = new ArrowMage (characterName)
                    break
                case 'Guerreiro':
                    addNewCharacter = new Warrior (characterName)
                    break
                default:
                    break 
            }
            
            this.characters.push(addNewCharacter)
            this.render()

            containermNewCharacter.classList.add('hidden')
            overlay.classList.remove('overlay')
            document.querySelector('.character-name').value = ''
        })
    }

    
    
}