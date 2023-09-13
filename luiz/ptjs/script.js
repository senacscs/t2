

//ola mundo
function olaMundo() {
    document.getElementById("mostrar").innerHTML = "Olá Mundo!";
    console.log(`Olá Mundo!`);
    alert(`Olá Mundo!`);
}

function numeroDigitado() {
    document.getElementById("mostrar").innerHTML = "O número digitado foi " + numero.value;
}

// funcao inicio ()
// {
//     cadeia nome

//     escreva("Digite seu nome: ")
//     leia(nome)
// }
function nomeDigitado() {
    //var nome = prompt("Digite seu nome: ");
    //document.getElementById("mostrar").innerHTML = "O nome digitado foi " + nome;
    document.getElementById("mostrar").innerHTML = "O nome digitado foi " + nome.value;
    
}