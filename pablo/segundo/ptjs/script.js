

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

function operacoesSimples() {
    var a = parseFloat(document.getElementById('numero1').value);
    var b = parseFloat(document.getElementById('numero2').value);

    if (isNaN(a) || isNaN(b)) {
        mostrar.innerHTML = 'Por favor, insira valores numéricos válidos em ambos os campos.';
    } 
        var soma = a + b; 
        var sub = a - b; 
        var mult = a * b; 
        var div = a / b; 

        mostrar.innerHTML = `A soma dos números é igual a ${soma}. <br>
        A subtração dos números é igual a ${sub}. <br>
        A multiplicação dos números é igual a ${mult}. <br>
        A divisão dos números é igual a ${div}.`;
}

function prioridades() {
    var resultado;

    resultado = 5 + 4 * 2;
    mostrar.innerHTML = "Operação: 5 + 4 * 2 = " + resultado;

    resultado = (5 + 4) * 2;
    mostrar.innerHTML += "<br>Operação: (5 + 4) * 2 = " + resultado;

    resultado = 1 + 2 / 3 * 4;
    mostrar.innerHTML += "<br>Operação: 1 + 2 / 3 * 4 = " + resultado;

    resultado = (1 + 2) / (3 * 4);
    mostrar.innerHTML += "<br>Operação: (1 + 2) / (3 * 4) = " + resultado;
}

function divisoesInteiras() {
    var num = parseFloat(document.getElementById('num').value);

    var metade_inteira = parseInt(num / 2);
    var resto = num % 3;

    mostrar.innerHTML = `A metade inteira do número é ${metade_inteira} e o resto (mod) da divisão é ${resto}.`;
}

function potenciaRaiz() {
    var valor= parseFloat(document.getElementById('valor').value);

    var potencia = Math.pow(valor, 3.0);  
    var raiz_quadrada = Math.sqrt(valor, 2.0); 

    mostrar.innerHTML = `${valor} elevado ao cubo é igual a ${potencia} e sua raíz quadrada é igual a ${raiz_quadrada}.`
}

function trocaVariaveis() {

    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var aux = 0

    mostrar.innerHTML = [`Os valores originais são: ${a} e ${b}.`]

    aux = a;
    a = b;
    b = aux;

    mostrar.innerHTML += [`<br> Os valores trocados são: ${a} e ${b}.`]
}

function maioridadePenal() {
    const MAIORIDADE = 18;

    var idade = parseInt(document.getElementById('idade').value);

    var anos = MAIORIDADE - idade;

    if (anos == 1) {
        mostrar.innerHTML = `Falta ${anos} ano para você atingir a maioridade.`;
    } else if (anos > 0) {
        mostrar.innerHTML = `Faltam ${anos} anos para você atingir a maioridade.`;
    } else {
        mostrar.innerHTML = `Você já atingiu a maioridade.`;
    }
}

function alturaMedia() {
    var altura1 = parseFloat(document.getElementById('Altura1:').value);
    var altura2 = parseFloat(document.getElementById('Altura2:').value);
    var altura3 = parseFloat(document.getElementById('Altura3:').value);

    mediaAltura = (altura1 + altura2 + altura3) / 3;

    mostrar.innerHTML = `A média das alturas é igual a ${mediaAltura}.`;
}
