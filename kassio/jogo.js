// Definir as informações da bomba
var bomba = {
  fios: ['vermelho', 'azul', 'amarelo', 'preto', 'verde'],
  senha: 'algo', // Senha correta para desarmar a bomba
  simbolos: ['♦', '♣', '♥', '♠', '▲', '▼', '►', '◄']
};

// Embaralhar os fios
function embaralharFios(fios) {
  var fiosEmbaralhados = fios.slice();
  for (var i = fiosEmbaralhados.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = fiosEmbaralhados[i];
      fiosEmbaralhados[i] = fiosEmbaralhados[j];
      fiosEmbaralhados[j] = temp;
  }
  return fiosEmbaralhados;
}

// Cortar um fio
function cortarFio(fio) {
  if (fio === 'vermelho' || fio === 'preto' || fio === 'azul' || fio === 'verde') {
      return 'Bomba explodiu! Game Over.';
  } else {
      return 'Fio cortado com sucesso.';
  }
}

// Resolver o desafio de símbolos
function resolverDesafioSimbolos(simbolos) {
  var simbolosEmbaralhados = embaralharFios(bomba.simbolos);
  var desafioCorreto = ['♣', '♥', '▼'];

  var resposta = prompt('Digite os símbolos em ordem (sem espaços):');
  var respostaSemEspacos = resposta.replace(/\s/g, ''); // Remover espaços da resposta
  var respostaArray = respostaSemEspacos.split('');

  if (respostaArray.length === 3 && respostaArray.every(function(item, index) {
      return item === desafioCorreto[index];
  })) {
      return 'Desafio de símbolos resolvido corretamente.';
  } else {
      return 'Resposta incorreta! Bomba explodiu! Game Over.';
  }
}

// Verificar a senha
function verificarSenha(senha) {
  var tentativa = prompt('Digite a senha:');
  if (tentativa === senha) {
      return 'Senha correta! Bomba desarmada.';
  } else {
      return 'Senha incorreta! Bomba explodiu! Game Over.';
  }
}

// Iniciar o jogo
var fiosEmbaralhados = embaralharFios(bomba.fios);
document.getElementById('fios').innerHTML = 'Fios: ' + fiosEmbaralhados.join(', ');

document.getElementById('cortar-btn').addEventListener('click', function() {
  var fio = document.getElementById('fio-input').value.toLowerCase();
  var resultado = cortarFio(fio);
  document.getElementById('cortar-resultado').innerHTML = resultado;
});

document.getElementById('resolver-simbolos-btn').addEventListener('click', function() {
  var resultado = resolverDesafioSimbolos(bomba.simbolos);
  document.getElementById('resolver-simbolos-resultado').innerHTML = resultado;
});

document.getElementById('verificar-btn').addEventListener('click', function() {
  var senha = document.getElementById('senha-input').value;
  var resultado = verificarSenha(bomba.senha);
  document.getElementById('verificar-resultado').innerHTML = resultado;
});
