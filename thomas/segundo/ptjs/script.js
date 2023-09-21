function olaMundo() {
    document.getElementById("mostrar").innerHTML = "Olá Mundo!";
    console.log('Olá Mundo!');
    alert('Olá Mundo!');
}

function calcular(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operacao = document.getElementById("operacao").value;
    var resultado = document.getElementById("resultado");
  
    num1 = Number(num1);
    num2 = Number(num2);
  
    switch (operacao) {
      case "+":
        resultado.innerHTML = num1 + num2;
      break;
      case "/":
      resultado.innerHTML = num1 / num2
      break;
      case "*":
      resultado.innerHTML = num1 * num2
      break;
      case "-":
      resultado.innerHTML = num1 - num2
  
  }
    
  }
  
  function calcular1(){
    var a = document.getElementById("num3").value;
    var b = document.getElementById("num4").value;
  
    var soma = parseFloat(a) + parseFloat(b);
    var sub = parseFloat(a) - parseFloat(b);
    var mult = parseFloat(a) * parseFloat(b);
    var div = parseFloat(a) / parseFloat(b);
  
    document.getElementById("resultado1").innerHTML = 
      "A soma dos números é igual a: " + soma +
      "<br>A subtração dos números é igual a: " + sub +
      "<br>A multiplicação dos números é igual a: " + mult +
      "<br>A divisão dos números é igual a: " + div;
  }

function nomeDigitado() {
    document.getElementById("mostrarnome").innerHTML = "O nome digitado foi " + nome.value;
}

function numeroDigitado() {
    document.getElementById("mostrarnumero").innerHTML = "O número digitado foi " + numero.value;
}

function prim() {
    var resultado;

    resultado = 5.0 + 4.0 * 2.0;
    document.getElementById("mostrarprim").innerHTML = "<br>Operação: 5 + 4 * 2 = " + resultado;
}

function seg() {
    var resultado;

    resultado = (5.0 + 4.0) * 2.0;
    document.getElementById("mostrarseg").innerHTML= "<br>Operação:( 5 + 4 ) * 2 = " + resultado ;
}

function terc() {
    var resultado;

    resultado = 1.0 + 2.0 / 3.0 * 4.0;
    document.getElementById("mostrarterc").innerHTML="<br>Operação:  1 + 2 / 3 * 4 = " + resultado;
}

function quar() {
    var resultado;

    resultado = (1.0 + 2.0) / (3.0 * 4.0);
    document.getElementById("mostrarquar").innerHTML ="<br>Operação:(1 + 2) / (3 * 4)= " + resultado;
}