let resultado = document.getElementById("resultado");
let expressao = "";

function insert(valor) {
    expressao += valor;
    resultado.innerText = expressao;
}

function clean() {
    expressao = "";
    resultado.innerText = "";
}

function back() {
    expressao = expressao.slice(0, -1);
    resultado.innerText = expressao;
}

function calcular() {
    try {
        expressao = eval(expressao).toString();
        resultado.innerText = expressao;
    } catch (error) {
        resultado.innerText = "Erro";
    }
}