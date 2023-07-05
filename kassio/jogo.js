// Definir as informações da bomba
var bomba = {
    fios: ['vermelho', 'azul', 'amarelo', 'preto', 'verde'],
    senha: 'openai123',
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
    var desafio = simbolosEmbaralhados.slice(0, 3); // Obter os 3 primeiros símbolos embaralhados
  
    var resposta = prompt('Digite os símbolos em ordem (separados por vírgula):');
    var respostaArray = resposta.split(',').map(function(item) {
      return item.trim();
    });
  
    if (respostaArray.length === 3 && respostaArray.every(function(item, index) {
      return item === desafio[index];
    })) {
      return 'Desafio de símbolos resolvido corretamente. Bomba desarmada.';
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
  