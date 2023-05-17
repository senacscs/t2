const meuCabecalho = document.querySelector("h1");
meuCabecalho.textContent = "Ola mundo!";

let minhaVariavel = 'Bob';
minhaVariavel = 'Steve';
minhaVariavel = 10;
minhaVariavel = true;
minhaVariavel = [1,'Bob','Steve',10];

minhaVariavel = document.querySelector('h1');
alert("ão deu");
let sorvete = 'chocolate';
if (sorvete === 'chocolate') {
  alert('Opa, Eu amo sorvete de chocolate!');
} else {
  alert('Ahh, mas chocolate é o meu favorito...');
}
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/firefox-icon.png') {
      minhaImagem.setAttribute ('src','imagens/firefox2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/firefox-icon.png');
    }
}

