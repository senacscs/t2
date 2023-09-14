function olaMundo() {
    document.getElementById("mostrar").innerHTML = "Olá Mundo!";
    console.log(`Olá Mundo!`);
    alert(`Olá Mundo!`);
}
function numeroDigitado() {
    document.getElementById("mostrar").innerHTML = "O numero digitado foi " + numero.value;
}
function nomeDigitado () {
    var nome = prompt("Digite seu nome: ");
    document.getElementById("mostrar").innerHTML = "O nome digitado foi: " + nome;
}