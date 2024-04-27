const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')
const messageModal = document.querySelector('.winner-message')
const closeModalBtn = document.querySelector('.modal-winner-close-btn')
const newCharacter = document.querySelector('.new-character-container')

const removeModal = () => {
    overlay.classList.remove('overlay')
    modal.classList.add('hidden')
    newCharacter.classList.add('hidden')
}

overlay.addEventListener('click', removeModal)
closeModalBtn.addEventListener('click', removeModal)

export const showModal = (message = '') => {
    messageModal.innerText = message
    overlay.classList.add('overlay')
    modal.classList.remove('hidden')
}
