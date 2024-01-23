const listaDeTeclas = document.querySelectorAll('input[type="button"]');
let inputTelefone = document.querySelector('input[type="tel"]');

function addNumber(number) {
    inputTelefone.value += number;
} 

for (let i=0; i < listaDeTeclas.length; i++) {
    listaDeTeclas[i].onclick = function () {
        addNumber(listaDeTeclas[i].value);
    }

    listaDeTeclas[i].onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
            listaDeTeclas[i].classList.add('ativa');
        }
    }

    listaDeTeclas[i].onkeyup = function () {
        listaDeTeclas[i].classList.remove('ativa');
    }
}