const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

const historia = [
    { // 0 estágio 0
        texto: "Isadora é uma manicure dedicada que trabalha em um salão de beleza movimentado. Um dia, Karol, esposa de Wesley, vem fazer as unhas do pé. .",
        opcoes: ["1. Começar jogo",],
        regras: {
          "Começar jogo": 1, // Ajuste para minúsculas
          "1": 1, // Ajuste para minúsculas
          
        }
      },
      { // 1 
        texto: "Isadora está terminando de fazer as unhas de Karol, quando ela ouve uma conversa de Karol com um outro homem, mas logo suspeita, por Karol ser casada, e logo não gosta disso, pois Isadora é super fiel. O que você faz?",
        opcoes: ["1. Ficar em silencio", "2. Perguntar com quem ela está falando"],
        regras: {
          "Ficar em silencio": 2,  // Índice do próximo estágio (você precisa criar esse estágio)
          "1": 2, // Volta para o primeiro estágio
          "Perguntar com quem ela está falando": 2, // Volta para o primeiro estágio
          "2": 3, // Volta para o primeiro estágio
        }
      },
      { // 2 
        texto: "Isadora fica em silencio, termina o atendimento de Karol e ela vai embora, mas retorna na semana seguinte.",
        opcoes: ["1. Atender Karol novamente"],
        regras: {
          "1": 1, // Volta para o primeiro estágio
          "Atender Karol novamente": 1 // Volta para o primeiro estágio
        }
      },
      { // 3 
        texto: "Karol fica um pouco nervosa sobre a pergunta de Isadora, então decide pagar o serviço, que custa R$ 77, e Karol entrega a Isadora R$ 110. Quanto de troco isadora dará para Karol?",
        opcoes: ["1. R$ 30", "2. R$ 31", "3. R$ 32", "4. R$ 33"],
        regras: {
          "1": 4,  // Índice do próximo estágio (você precisa criar esse estágio)
          "30": 4, // Volta para o primeiro estágio
          "2": 4, // Volta para o primeiro estágio
          "31": 4, // Volta para o primeiro estágio
          "3": 4, // Volta para o primeiro estágio
          "32": 4, // Volta para o primeiro estágio
          "33": 5, // Volta para o primeiro estágio
          "4": 5 // Volta para o primeiro estágio
        }
      },
      { // 4 
        texto: "Você errou o troco, conte novamente.",
        opcoes: ["1. Contar o troco novamente"],
        regras: {
          "Contar o troco novamente": 3, // Volta para o primeiro estágio
          "1": 3 // Volta para o primeiro estágio
        }
      },
      { // 5
        texto: "Karol recebe o troco, mas Isadora pergunta novamente, com quem ela está falando, Karol fica nervosa, começa a tremer mas assume quase aos prantos, que era com o Augusto, pedreiro da região",
        opcoes: ["1. Conhecer mais sobre Augusto"],
        regras: {
          "Conhecer mais sobre Augusto": 'https://senacscs.github.io/t2/silveira/terceiro/pwa_texto',
          "1": 'https://senacscs.github.io/t2/augusto/terceiro/pwa_texto'
        }
      },
    // ... (adicione mais estágios da história aqui)
];

function mostrarTexto(indice) {
  areaTexto.textContent = historia[indice].texto;
  if (historia[indice].opcoes) {
      areaTexto.textContent += "\n\nOpções:";
      historia[indice].opcoes.forEach(opcao => {
          areaTexto.textContent += "\n- " + opcao;
      });
  }
}

function processarComando(comando) {
  comando = comando.replace(/^\d+\s*-\s*/, '').trim().toLowerCase(); // Remove número e ajusta
  const regras = historia[estadoAtual].regras;

  console.log("Comando digitado:", comando); // Depuração
  console.log("Regras:", regras); // Depuração

  if (comando in regras) {
    const destino = regras[comando];
    if(typeof destino === "string") {
      window.location.href = destino;
    } else {
      areaTexto.textContent += "\n\nComando inválido. Tente novamente.";
  }
      estadoAtual = regras[comando];
      mostrarTexto(estadoAtual);
  } else {
      areaTexto.textContent += "\n\nComando inválido. Tente novamente.";
  }
}

inputComando.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
      processarComando(inputComando.value.toLowerCase()); // Converte para minúsculas
      inputComando.value = "";
  }
});

mostrarTexto(estadoAtual);