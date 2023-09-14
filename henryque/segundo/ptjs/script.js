function ola(){
    alert('Olá Mundo!');
}

function valorDigitado(){
    var numero = document.getElementById("numero");
    alert("O valor digitado foi: " + numero)
}

function nomeDigitado(){
    var nome = document.getElementById("nome");
    alert("O nome digitado foi: " + nome + "!")
}

function operacoes(){
    var num1 = parseFloat(document.getElementById("a").value);
    var num2 = parseFloat(document.getElementById("b").value);

    const soma = num1 + num2
    const div = num1 / num2
    const mult = num1 * num2
    const sub = num1 - num2

    alert("Aplicando as 4 operações os resultados seriam: " + "\nSoma: " + soma + "\nDivisão: " + div + "\nMultiplicação: " + mult + "\nSubtração: " + sub)

}