const botao = document.querySelector("#btn")

function chamaFuncao() {
    alert("Olá")
    segundaFuncao()
    quintaFuncao()
}

function segundaFuncao() {
    alert("segunda funçao chamada")
    terceiraFuncao()
}

function terceiraFuncao() {
    alert("Terceira funçao chamada")
    QuartaFuncao()
}

function QuartaFuncao() {
    alert("Quarta funçao chamada")
}

function quintaFuncao(params) {
    alert("Quinta funçao chamada")
}
botao.addEventListener(`click`, chamaFuncao)