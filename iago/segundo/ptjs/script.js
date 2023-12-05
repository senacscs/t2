// programa 
// { 
// 	funcao inicio () 
// 	{
// 		escreva("Olá Mundo!\n")
// 	} 
// }

function olaMundo() {
    document.getElementById("mostrarSE").innerHTML = "<br> Olá Mundo!";
    console.log("Olá Mundo!");
    alert("Olá mundo!");
}

// programa 
// { 
// 	funcao inicio () 
// 	{ 
// 		inteiro numero
// 		escreva("Digite um número inteiro: ")
// 		leia(numero)	
// 	    escreva("O número digitado foi: ", numero, "\n")
// 	} 
// }

function numeroDigitado() {
    document.getElementById("mostrarSE").innerHTML = "<br> O número digitado foi " + numero.value;
}

// programa
// {
// 	funcao inicio ()
// 	{
// 		cadeia nome
// 		escreva("Digite seu nome: ")
// 		leia(nome)
// 	}
// }

function nomeDigitado() {
    var nome = document.getElementById("nome");
    document.getElementById("mostrarSE").innerHTML = "<br> O nome digitado foi " + nome.value;
}

// programa
// {
// 	funcao inicio()
// 	{
// 		real a, b, soma, sub, mult, div

// 		escreva("Digite o primeiro número: ")
// 		leia(a)

// 		escreva("Digite o segundo número: ")
// 		leia(b)

// 		soma = a + b // Soma os dois valores
// 		sub  = a - b // Subtrai os dois valores
// 		mult = a * b // Multiplica os dois valores
// 		div  = a / b // Divide os dois valores

// 		escreva("\nA soma dos números é igual a: ", soma) 		// Exibe o resultado da soma
// 		escreva("\nA subtração dos números é igual a: ", sub) 		// Exibe o resultado da subtração
// 		escreva("\nA multiplicação dos números é igual a: ", mult) 	// Exibe o resultado da multiplicação
// 		escreva("\nA divisão dos números é igual a: ", div, "\n") 	// Exibe o resultado da divisão
// 	}
// }

function operaSimples() {

    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);

    let soma = a + b;
    let sub = a - b;
    let mult = a * b;
    let div = a / b;

    document.getElementById("mostrarOA").innerHTML = 
    "<br> A soma dos números é igual a: " + soma 
    + "<br> A subtração dos números é igual a: " + sub 
    + "<br> A multiplicação dos números é igual a: " + mult 
    + "<br> A divisão dos números é igual a: " + div;
}

// programa
// {
// 	funcao inicio()
// 	{
// 		real resultado
// 		// Neste exemplo, a operação de multiplicação (*) será executada primeiro
// 		resultado = 5.0 + 4.0 * 2.0
// 		escreva("Operação: 5 + 4 * 2 = ", resultado)

// 		// Neste exemplo, a operação de soma (+) será executada primeiro
// 		resultado = (5.0 + 4.0) * 2.0
// 		escreva("\nOperação: (5 + 4) * 2 = ", resultado)
// 		/*
// 		 * Neste exemplo, a operação de divisão (/) será executada primeiro,
// 		 * seguida pela operação de multiplicação (*). Por último, será
// 		 * executada a operação de soma (+)
// 		 */
// 		resultado = 1.0 + 2.0 / 3.0 * 4.0
// 		escreva("\nOperação: 1 + 2 / 3 * 4 = ", resultado)
// 		/*
// 		 * Neste exemplo, a operação de soma (+) será executada primeiro,
// 		 * seguida pela operação de multiplicação (*). Por último, será
// 		 * executada a operação de divisão (/).
// 		 */
// 		resultado = (1.0 + 2.0) / (3.0 * 4.0)
// 		escreva("\nOperação: (1 + 2) / (3 * 4) = ", resultado, "\n")
// 	}
// }

function propriedades() {
    let resultadoMult = 5.0 + 4.0 * 2.0;
    document.getElementById("mostrarP1").innerHTML = "<br>Operação: 5 + 4 * 2 = " + resultadoMult;

    let resultadoSoma = (5.0 + 4.0) * 2.0;
    document.getElementById("mostrarP2").innerHTML = "Operação: (5 + 4) * 2 = " + resultadoSoma;

    let resultadoDMS = 1.0 + 2.0 / 3.0 * 4.0;
    document.getElementById("mostrarP3").innerHTML = "Operação: 1 + 2 / 3 * 4 = " + resultadoDMS;

    let resultadoSMD = (1.0 + 2.0) / (3.0 * 4.0);
    document.getElementById("mostrarP4").innerHTML = "Operação: (1 + 2) / (3 * 4) = " + resultadoSMD;
}