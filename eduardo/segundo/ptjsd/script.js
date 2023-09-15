//ola mundo
function olaMundo() {
  document.getElementById("mostrar").innerHTML = "Olá Mundo!";
  console.log(`Olá Mundo!`);
  alert(`Olá Mundo!`);
}

function numeroDigitado() {
  document.getElementById("mostrar").innerHTML =
    "O número digitado foi " + numero.value;
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
  document.getElementById("mostrar").innerHTML =
    "O nome digitado foi " + nome.value;
}

function calculadora() {
  let a, b, soma, sub, mult, div;
  a = parseFloat(prompt("Digite o primeiro número:"));
  b = parseFloat(prompt("Digite o segundo número:"));

  soma = a + b;
  sub = a - b;
  mult = a * b;
  div = a / b;

  document.getElementById("mostrar").innerHTML =
    "Soma = " +
    soma +
    "\n" +
    "Subtração = " +
    sub +
    "\n" +
    "Multiplicação = " +
    mult +
    "\n" +
    "Divisão = " +
    div;
}

function prioridades() {
  let resultado;

  resultado = 5.0 + 4.0 * 2.0;
  document.getElementById("mostrar").innerHTML +=
    "Operação: 5 + 4 * 2 = " + resultado + "\n";

  resultado = (5.0 + 4.0) * 2.0;
  document.getElementById("mostrar").innerHTML +=
    "Operação: (5 + 4) * 2 = " + resultado + "\n";

  resultado = 1.0 + (2.0 / 3.0) * 4.0;
  document.getElementById("mostrar").innerHTML +=
    "Operação: 1 + 2 / 3 * 4 = " + resultado + "\n";

  resultado = (1.0 + 2.0) / (3.0 * 4.0);
  document.getElementById("mostrar").innerHTML +=
    "Operação: (1 + 2) / (3 * 4) = " + resultado + "\n";
}

function divisoes() {
  let metade_inteira, resto, valor;

  valor = parseFloat(prompt("Digite um valor: "));

  metade_inteira = valor / 2;
  resto = valor % 3;

  document.getElementById("mostrar").innerHTML =
    "A metade inteira do numero é: " +
    metade_inteira +
    "\n" +
    "O resto (mod) da divisão por 3 é: " +
    resto;
}

function potenciaRaiz() {
  let valor, potencia, raiz_quadrada;

  valor = parseFloat(prompt("Digite um valor: "));

  potencia = Math.pow(valor, 3.0);
  raiz_quadrada = Math.sqrt(valor, 2.0);

  document.getElementById("mostrar").innerHTML =
    "O número ao cubo é: " +
    potencia +
    "\n" +
    "A raiz quadrada do número é: " +
    raiz_quadrada;
}

function troca() {
    let a, b, aux;
  
    a = (prompt("Informe um valor para a variável A: "));
    b = (prompt("Informe um valor para a variável B: "));
  
    console.clear();
    document.getElementById("mostrar").innerHTML += ("Variáveis antes da troca: " + "A = " + a + "; B = " + b);
  
    aux = b;
    b = a;
    a = aux;
  
    console.log("\n");
  
    document.getElementById("mostrar").innerHTML += ("Variáveis após a troca: " + "A = " + a + "; B = " + b);
}

function maioridade(){
    const maioridade = 18;

    let idade, anos;

    idade = parseInt(prompt("Digite sua idade: "))

    anos = maioridade - idade;

    if (anos > 0){
        alert("Falta(m) " + anos + " ano(s) para você atingir a maioridade")
    }
    else{
        alert("Você já atingiu a maioridade")
    }
}

function altura(){
    let altura1, altura2, altura3, media_altura;

    altura1 = parseFloat(prompt("Escreva a primeira altura: "));
    altura2 = parseFloat(prompt("Escreva a segunda altura: "));
    altura3 = parseFloat(prompt("Escreva a terceira altura: "));
    media_altura = (altura1 + altura2 + altura3) / 3;
    alert("A média das alturas é: " + Math.round(media_altura) + " metros")
}

function loja() {
    // Os preços dos produtos são definidos em constantes
    const PRECO_PARAFUSO = 1.50;
    const PRECO_ARRUELA = 2.00;
    const PRECO_PORCA = 2.50;

    let nome;
    let quantidade_parafusos, quantidade_arruelas, quantidade_porcas;
    let total_parafusos, total_arruelas, total_porcas, total_pagar;

    nome = prompt("Digite seu nome: ");

    quantidade_parafusos = parseInt(prompt("Digite a quantidade de parafusos que deseja comprar: "));
    quantidade_arruelas = parseInt(prompt("Digite a quantidade de arruelas que deseja comprar: "));
    quantidade_porcas = parseInt(prompt("Digite a quantidade de porcas que deseja comprar: "));

    total_parafusos = PRECO_PARAFUSO * quantidade_parafusos;
    total_arruelas = PRECO_ARRUELA * quantidade_arruelas;
    total_porcas = PRECO_PORCA * quantidade_porcas;

    total_pagar = total_parafusos + total_porcas + total_arruelas;

    console.clear();
    
    alert("Cliente: " + nome);
    alert("Parafusos: " + quantidade_parafusos);
    alert("Arruelas: " + quantidade_arruelas);
    alert("Porcas: " + quantidade_porcas);
    alert("Total a pagar: R$ " + total_pagar.toFixed(2));
}

