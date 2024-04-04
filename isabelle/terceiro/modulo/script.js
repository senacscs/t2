function calcularValorAbsoluto() {
  var nome = prompt("Por favor, insira seu nome:");
  if (nome != null && nome != "") {
    var numero = parseFloat(document.getElementById('numero').value);
    var resultado = Math.abs(numero);
    document.getElementById('resultado').innerHTML = "Olá, " + nome + "! O valor absoluto de " + numero + " é " + resultado + ".";
    
    // Explicação sobre o valor absoluto
    var explicacao = document.getElementById('explicacao');
    explicacao.innerHTML = `
        <p><strong>O que é Valor Absoluto (Módulo)?</strong></p>
        <p>O valor absoluto, também conhecido como módulo, de um número real é a distância desse número até o zero na reta numérica, independente da direção. Em outras palavras, é o valor numérico positivo de um número, ignorando seu sinal. Por exemplo, o valor absoluto de -5 é 5, pois a distância de -5 até 0 é 5 unidades na reta numérica.</p>
        <p><strong>Por que é Útil?</strong></p>
        <p>O valor absoluto é útil em várias situações, especialmente quando queremos medir a distância entre dois pontos ou quando estamos interessados apenas na magnitude de uma quantidade, sem levar em consideração sua direção. Por exemplo, ao calcular diferenças entre valores, ao resolver equações ou ao representar grandezas físicas que não têm direção, como temperatura.</p>
        <p><strong>Como Calcular?</strong></p>
        <p>Em matemática, o valor absoluto de um número x é representado por |x| e é calculado de forma simples. Se x for positivo ou zero, seu valor absoluto é o próprio x. Se x for negativo, seu valor absoluto é o oposto de x, ou seja, -x.</p>
        <p><strong>Exemplo:</strong></p>
        <p>O valor absoluto de 5 é |5| = 5.</p>
        <p>O valor absoluto de -8 é |-8| = 8.</p>
    `;
  } else {
    alert("Por favor, insira seu nome para continuar.");
  }
}
