        
         function calcularTotal() {
          const PRECO_PARAFUSO = 1.50;
          const PRECO_ARRUELA = 2.00;
          const PRECO_PORCA = 2.50;

          const nome = document.getElementById('nome').value;
          const quantidadeParafusos = parseInt(document.getElementById('quantidadeParafusos').value);
          const quantidadeArruelas = parseInt(document.getElementById('quantidadeArruelas').value);
          const quantidadePorcas = parseInt(document.getElementById('quantidadePorcas').value);

          const totalParafusos = PRECO_PARAFUSO * quantidadeParafusos;
          const totalArruelas = PRECO_ARRUELA * quantidadeArruelas;
          const totalPorcas = PRECO_PORCA * quantidadePorcas;
          const totalPagar = totalParafusos + totalPorcas + totalArruelas;

          const outputDiv = document.getElementById('output');
          outputDiv.innerHTML = "<p>Cliente: " + nome + "</p>";
          outputDiv.innerHTML += "<hr>";
          outputDiv.innerHTML += "<p>Parafusos: " + quantidadeParafusos + "</p>";
          outputDiv.innerHTML += "<p>Arruelas: " + quantidadeArruelas + "</p>";
          outputDiv.innerHTML += "<p>Porcas: " + quantidadePorcas + "</p>";
          outputDiv.innerHTML += "<hr>";
          outputDiv.innerHTML += "<p>Total a pagar: R$ " + totalPagar.toFixed(2) + "</p>";
      }
  
          calcularTotal();

          function numeroDigitado() {
            document.getElementById("mostrar").innerHTML = "O número digitado foi " + numero.value;
        }
  
        function nomeDigitado() {

            document.getElementById("mostrar").innerHTML = "O nome digitado foi " + nome.value;
            
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
  

  function prioridades() {
    let resultado;
  
    resultado = 5.0 + 4.0 * 2.0;
    document.getElementById("mostrar").innerHTML +=
      "Operação: 5 + 4 * 2 = " + resultado + "<br>";
  
    resultado = (5.0 + 4.0) * 2.0;
    document.getElementById("mostrar").innerHTML +=
      "Operação: (5 + 4) * 2 = " + resultado + "<br>";
  
    resultado = 1.0 + (2.0 / 3.0) * 4.0;
    document.getElementById("mostrar").innerHTML +=
      "Operação: 1 + 2 / 3 * 4 = " + resultado + "<br>";
  
    resultado = (1.0 + 2.0) / (3.0 * 4.0);
    document.getElementById("mostrar").innerHTML +=
      "Operação: (1 + 2) / (3 * 4) = " + resultado + "<br>";
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
  

  function troca() {
    var a = document.getElementById("primeiraVar").value;
    var b = document.getElementById("segundaVar").value;
  
    var aux = a;
    var aTroca = b;
    var bTroca = aux;
  
    document.getElementById("mostrar").innerHTML =
      "Variáveis antes da troca: " +
      "A = " +
      a +
      " B = " + 
      b +
      "<br>" +
      "Variáveis após a troca: " +
      "A = " +
      aTroca +
      " B = " +
      bTroca;
  }
  
  
  function maioridade() {
    const maioridade = 18;
    var idade = document.getElementById("idade").value;
  
    if (idade < maioridade) {
      var tempo = maioridade - idade;
      document.getElementById("mostrar").innerHTML =
        "Faltam " + tempo + " ano(s) para você atingir a maioridade";
    } else {
      document.getElementById("mostrar").innerHTML =
        "Você já atingiu a maioridade";
    }
  }
  
  
  function altura() {
    var altura1 = parseFloat(document.getElementById("primeiraAltura").value);
    var altura2 = parseFloat(document.getElementById("segundaAltura").value);
    var altura3 = parseFloat(document.getElementById("terceiraAltura").value);
    
    media_altura = (altura1 + altura2 + altura3) / 3;
  
    document.getElementById("mostrar").innerHTML =
      "Média das alturas é: " + Math.round(media_altura) + " metros";
  }

function multiplo() {
    var numero = document.getElementById("number").value;
    if (numero % 5 == 0) {
      document.getElementById("mostrar").innerHTML =
        "O número " + numero + " é múltiplo de 5";
    } else {
      document.getElementById("mostrar").innerHTML =
        "O número " + numero + " não é múltiplo de 5";
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
  
  function mediaFinal() {
    var nome = document.getElementById("nm").value;
    var nota1 = parseFloat(document.getElementById("primeiraNota").value);
    var nota2 = parseFloat(document.getElementById("segundaNota").value);
    var nota3 = parseFloat(document.getElementById("terceiraNota").value);
  
    var media = (nota1 + nota2 + nota3) / 3;
  
    if (media >= 6) {
      document.getElementById("mostrar").innerHTML =
        "Parabéns " +
        nome +
        ", você foi aprovado com a média " +
        Math.round(media);
    } else {
      document.getElementById("mostrar").innerHTML =
        "Que pena " +
        nome +
        ", você foi reprovado com a média " +
        Math.round(media);
    }
  }