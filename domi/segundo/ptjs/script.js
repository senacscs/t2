var mostrar = document.getElementById('mostrar')

/* Entrada e Saída */
function olaMundo() {
    mostrar.innerHTML = "Olá Mundo!"
    console.log(`Olá Mundo!`)
    alert(`Olá Mundo!`)
}

function numeroDigitado() {
    var numero = parseInt(document.getElementById('numero').value)

    mostrar.innerHTML = `O número inserido foi ${numero}.`
}

function seuNome() {
    var nome = document.getElementById('nome').value

    mostrar.innerHTML = `O seu nome é ${nome}.`
}

/* Operações Aritméticas */
function operacoesSimples() {
    var a = parseFloat(document.getElementById('numero1').value)
    var b = parseFloat(document.getElementById('numero2').value)

    var soma = a + b
    var sub = a - b
    var mult = a * b
    var div = a / b

    // mostrar.innerHTML = `Os números digitados são ${a} e ${b}.`

    mostrar.innerHTML = `A soma dos número é igual a ${soma}. \n
    A subtração dos números é igual a ${sub}.
    A multiplicação dos números é igual a ${mult}.
    A divisão dos números é igual a ${div}.`
}

function prioridade() {
    var resultado = parseFloat()

    resultado = 5 + 4 * 2 // a multiplicação será executada primeiro
    mostrar.innerHTML = [`Operação: 5 + 4 * 2 = ${resultado} <br>`]

    resultado = (5 + 4) * 2 // a soma será executada primeiro
    mostrar.innerHTML += [`Operação: (5 + 4) * 2 = ${resultado} <br>`]

    resultado = 1 + 2 / 3 * 4 // a divisão será executada primeiro, depois multiplicação e, por fim, a soma
    mostrar.innerHTML += [`Operação: 1 + 2 / 3 * 4 = ${resultado} <br>`]

    resultado = (1 + 2) / (3 * 4) // as equeações entre parenteses (soma e multiplicação) serão executadas primeiro, depois a divisão
    mostrar.innerHTML += [`Operação (1 + 2) / (3 * 4) = ${resultado} <br>`]
}

function divisoesInteiras() {
    var num = parseFloat(document.getElementById('numInt').value)

    var metade_inteira = parseInt(num / 2)
    var resto = num % 3

    mostrar.innerHTML = `A metade inteira do número é ${metade_inteira}
    e o resto (mod) da divisão é ${resto}.`
}

function potenciaRaiz() {
    var num = parseFloat(document.getElementById('num').value)

    var potencia = Math.pow(num, 3.0) // Retorna a base x elevada à potência y do expoente (x, y) = (2, 3) = 2³
    var raiz_quadrada = Math.sqrt(num, 2.0) // Retorna a raíz quadrada de um número

    mostrar.innerHTML = `${num} elevado ao cubo é igual a ${potencia} e sua raíz quadrada é igual a ${raiz_quadrada}.`
}

/* Algoritmos sequenciais */
function trocaVariaveis() {
    var valorUm = parseFloat(document.getElementById('valor_um').value)
    var valorDois = parseFloat(document.getElementById('valor_dois').value)
    var aux = 0

    mostrar.innerHTML = [`Os valores originais são: ${valorUm} e ${valorDois}.`]

    aux = valorUm
    valorUm = valorDois
    valorDois = aux

    mostrar.innerHTML += [`<br> Os valores trocados são: ${valorUm} e ${valorDois}.`]
}

function maioridadePenal() {
    const MAIORIDADE = 18

    var idade = parseInt(document.getElementById('idade').value)

    var anos = MAIORIDADE - idade

    if (anos == 1) {
        mostrar.innerHTML = `Falta ${anos} ano para você atingir a maioridade.`
    } else if (anos > 0) {
        mostrar.innerHTML = `Faltam ${anos} anos para você atingir a maioridade.`
    } else {
        mostrar.innerHTML = `Você já atingiu a maioridade.`
    }
}

function alturaMedia() {
    var altura1 = parseFloat(document.getElementById('altura1').value)
    var altura2 = parseFloat(document.getElementById('altura2').value)
    var altura3 = parseFloat(document.getElementById('altura3').value)

    mediaAltura = (altura1 + altura2 + altura3) / 3
    mediaArredondada = Math.round(mediaAltura)

    mostrar.innerHTML = `A média das alturas é igual a ${mediaArredondada}.`
}

function lojaDeFerramentas() {
    const PRECO_PARAFUSO = 1.50
    const PRECO_ARRUELA = 2.00
    const PRECO_PORCA = 2.50

    let nomeUsuario = document.getElementById('nome_usuario').value
    var quantidadeParafusos = parseInt(document.getElementById('quantidade_parafusos').value)
    var quantidadeArruelas = parseInt(document.getElementById('quantidade_arruelas').value)
    var quantidadePorcas = parseInt(document.getElementById('quantidade_porcas').value)

    var totalParafusos = PRECO_PARAFUSO * quantidadeParafusos
    var totalArruelas = PRECO_ARRUELA * quantidadeArruelas
    var totalPorcas = PRECO_PORCA * quantidadePorcas
    var totalPagar = totalParafusos + totalArruelas + totalPorcas

    mostrar.innerHTML = `Cliente: ${nomeUsuario}
    <br> ===============================
    <br> Parafusos: ${quantidadeParafusos}
    <br> Arruelas: ${quantidadeArruelas}
    <br> Porcas: ${quantidadePorcas}
    <br> ===============================
    <br> Total a pagar: ${totalPagar}`
}