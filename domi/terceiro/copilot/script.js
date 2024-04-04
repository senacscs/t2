// Nossos números com personalidades únicas
const numeroNegativo = -7;
const numeroPositivo = 13;

// Função criativa: "Valor Absoluto da Personalidade"
function valorAbsolutoDaPersonalidade(numero) {
    const valorAbsoluto = Math.abs(numero);
    if (numero < 0) {
        alert(`O número ${numero} é um rebelde, mas seu valor absoluto é ${valorAbsoluto}.`)
        console.log(`O número ${numero} é um rebelde, mas seu valor absoluto é ${valorAbsoluto}.`)
    } else {
        alert(`O número ${numero} é um otimista, e seu valor absoluto continua sendo ${valorAbsoluto}.`)
        console.log(`O número ${numero} é um otimista, e seu valor absoluto continua sendo ${valorAbsoluto}.`)
    }
}

// Vamos ver como nossos números se comportam!
console.log(valorAbsolutoDaPersonalidade(numeroNegativo));
console.log(valorAbsolutoDaPersonalidade(numeroPositivo));

/* Neste exemplo criativo:

O número -7 é um rebelde, mas seu valor absoluto é 7.
O número 13 é um otimista, e seu valor absoluto permanece 13.
Lembre-se de que, na realidade, a função Math.abs(x) simplesmente retorna o valor absoluto de um número, mas aqui demos um toque de imaginação! */