function olaMundo(){
    document.getElementById("mostrar").innerHTML = "Olá Mundo!";
    console.log('Olá Mundo!');
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