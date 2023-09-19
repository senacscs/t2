function olaMundo() {
    document.getElementById("mostrar").innerHTML = "Olá Mundo!"; 
    console.log('Olá Mundo!');
    alert('Olá Mundo!'); 
}

function numeroDigitado() {
    document.getElementById("mostrar").innerHTML = "O nome número digitado foi " + number.value;
 }

 function nomeDigitado() {
    document.getElementById("mostrar").innerHTML = "O nome digitado foi " +  nome.value;
 }

function calcular() {
    var primNum = document.getElementById("primeiroNum").value;
    var segmNum = document.getElementById("segundoNum").value;
    const sel = document.getElementById("select").value; 
  
    if (sel == "opcao1") {
      const resultado = parseFloat(primNum) + parseFloat(segmNum);
      document.getElementById("mostrar").innerHTML = resultado.toString();
    } else if (sel == "opcao2") {
      const resultado = parseFloat(primNum) - parseFloat(segmNum);
      document.getElementById("mostrar").innerHTML = resultado.toString();
    } else if (sel == "opcao3") {
      const resultado = parseFloat(primNum) / parseFloat(segmNum);
      document.getElementById("mostrar").innerHTML = resultado.toString();
    } else if (sel == "opcao4") {
      const resultado = parseFloat(primNum) * parseFloat(segmNum);
      document.getElementById("mostrar").innerHTML = resultado.toString();
    }
  }

function div() {
    var valor = document.getElementById("valor").value;
    var metade_inteira = valor / 2;
    var resto = valor % 3;
    document.getElementById("mostrar").innerHTML =
      "metade inteira: " + metade_inteira + "<br>" + "resto: " + resto;
  }

function pot() {
    var numero = document.getElementById("num").value;
    const potencia = Math.pow(numero, 3.0);
    const raiz = Math.sqrt(numero);
    document.getElementById("mostrar").innerHTML =
      "O número ao cubo é: " +
      potencia +
      "<br>" +
      "A raiz quadrada do número é: " +
      raiz +
      "<br>";
}

function idade() {
    var idade = document.getElementById("idadeUser").value;
    if (idade < 18) {
      document.getElementById("mostrar").innerHTML = "Você é menor de idade";
    } else {
      document.getElementById("mostrar").innerHTML = "Você é maior de idade";
    }
  }

function num() {
    var num_digitado = document.getElementById("numIgual").value;
    var num_sorteado = Math.floor(Math.random() * 7);
  
    if (num_digitado >= 0 && num_digitado <= 6) {
      if (num_digitado == num_sorteado) {
        document.getElementById("mostrar").innerHTML = "Os números são iguais!";
      } else {
        document.getElementById("mostrar").innerHTML =
          "Os números são diferentes!" +
          "<br>" +
          "Número digitado: " +
          num_digitado +
          "<br>" +
          "Número sorteado: " +
          num_sorteado;
      }
    } else {
      document.getElementById("mostrar").innerHTML =
        "O número digitado deve estar entre 0 e 6";
    }
  }
inicio(); 






