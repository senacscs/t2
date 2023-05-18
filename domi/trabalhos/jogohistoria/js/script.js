window.onload = function () {
    var nome = prompt('Qual seu nome?')
    var texto = document.querySelector('p')

    texto.innerHTML =
    (`Meu nome é ${nome} e herdei dos meus pais a cor de meus cabelos... `)
}