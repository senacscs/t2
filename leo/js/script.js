function olaMundo() {
    document.getElementById("mostrar").innerHTML = "Olá Mundo!";
    console.log(`Olá Mundo!`);
    alert(`Olá Mundo!`);
}

function numeroDigitado() {
    document.getElementById("mostrar").innerHTML = "O número digitado foi " + numero.value;
}

//funcao inicio ()
//{
//    cadeia nome

//    escreva("digite seu nome: ")
//    leia(nome)
//}
function nomeDigitado() {
//var nome = prompt("digite seu nome: ")
//document.getElementById("mostrar").innerHTML = "o nome digitado foi: "
document.getElementById("mostrar").innerHTML = "o nome digitado foi: " + nome.value;
}

function inicio() {
    let a, b, soma, sub, mult, div;

    a = parseFloat(prompt("Digite o primeiro número: "));
    b = parseFloat(prompt("Digite o segundo número: "));

    soma = a + b; 
    sub  = a - b; 
    mult = a * b; 
    div  = a / b;

    console.log(`\nA soma dos números é igual a: ${soma}`); 		// Exibe o resultado da soma
    console.log(`\nA subtração dos números é igual a: ${sub}`); 		// Exibe o resultado da subtração
    console.log(`\nA multiplicação dos números é igual a: ${mult}`); 	// Exibe o resultado da multiplicação
    console.log(`\nA divisão dos números é igual a: ${div}\n`); 	// Exibe o resultado da divisão
}
function inicio() {
       var resultado;
       resultado = 5.0 + 4.0 * 2.0;
       console.log("Operação: 5 + 4 * 2 = " + resultado);
       resultado = (5.0 + 4.0) * 2.0;
       console.log("\nOperação: (5 + 4) * 2 = " + resultado);
       resultado = 1.0 + 2.0 / 3.0 * 4.0;
       console.log("\nOperação: 1 + 2 / 3 * 4 = " + resultado);
       resultado = (1.0 + 2.0) / (3.0 * 4.0);
       console.log("\nOperação: (1 + 2) / (3 * 4) = " + resultado + "\n");
   }
   