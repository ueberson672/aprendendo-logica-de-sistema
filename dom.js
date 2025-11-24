const botao = document.querySelector("#botao")

const titulo = document.querySelector("#titulo")

function trocaTexto(){
    titulo.innerText = "Ueberson"
}


botao.addEventListener("click", trocaTexto)