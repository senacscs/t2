const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

inputComando.focus();
 
const historia = [
    { // 0: A Fortaleza do Guardião
        texto: "Você chega à Fortaleza do Guardião. O que você faz?",
        opcoes: ["Entrar furtivamente", "Entrar pela força"],
        regras: {
            "1": 1,
            "2": 2
        }
    },
    { // 1: Entrar Furtivamente
        texto: "Você tenta entrar furtivamente e evita vários guardas. O que você faz?",
        opcoes: ["Procurar a sala do trono", "Explorar a fortaleza"],
        regras: {
            "1": 3,
            "2": 4
        }
    },
    { // 2: Entrar pela Força
        texto: "Você luta contra os guardas na entrada e se abre caminho até a fortaleza. O que você faz?",
        opcoes: ["Procurar a sala do trono", "Explorar a fortaleza"],
        regras: {
            "1": 3,
            "2": 4
        }
    },
    { // 3: Procurar a Sala do Trono
        texto: "Você encontra a sala do trono e confronta o Guardião. O que você faz?",
        opcoes: ["Lutar contra o Guardião", "Tentar negociar"],
        regras: {
            "1": 5,
            "2": 6
        }
    },
    { // 4: Explorar a Fortaleza
        texto: "Você encontra tesouros escondidos e informações valiosas sobre o Guardião. O que você faz?",
        opcoes: ["Usar as informações para confrontar o Guardião", "Continuar explorando"],
        regras: {
            "1": 3,
            "2": 7
        }
    },
    { // 5: Lutar contra o Guardião
        texto: "Você luta bravamente e derrota o Guardião, reivindicando a fortaleza para si.",
        opcoes: ["Continuar"],
        regras: {
            "1": 8
        }
    },
    { // 6: Tentar Negociar
        texto: "Você tenta negociar com o Guardião e descobre um segredo que pode mudar o destino do reino.",
        opcoes: ["Usar o segredo para tomar a fortaleza", "Aliar-se ao Guardião"],
        regras: {
            "1": 5,
            "2": 9
        }
    },
    { // 7: Continuar Explorando
        texto: "Você encontra um aliado inesperado que oferece ajuda na batalha contra o Guardião.",
        opcoes: ["Procurar a sala do trono", "Sair da fortaleza"],
        regras: {
            "1": 3,
            "2": 10
        }
    },
    { // 8: Fim da Parte 4
        texto: "Fim da Parte 4: A Conquista da Fortaleza. Parabéns, você completou a jornada!",
        opcoes: ["Recomeçar", "Voltar para a Parte 1"],
        regras: {
            "1": 0,
            "2": "https://senacscs.github.io/t2/bernardo/terceiro/pwa_texto"
        }
    },
    { // 9: Aliar-se ao Guardião
        texto: "Você se alia ao Guardião e juntos governam o reino com justiça e sabedoria.",
        opcoes: ["Continuar"],
        regras: {
            "1": 8
        }
    },
    { // 10: Sair da Fortaleza
        texto: "Você decide sair da fortaleza e continuar sua jornada em busca de novos desafios. Porém, para concluir sua jornada, você deve resolver um enigma: Meu avô tem 5 filhos, cada filho tem 3 filhos. Quantos primos eu tenho?",
        regras: {
            "12": 8
        }
    }
];
 
function mostrarTexto(indice) {
    areaTexto.textContent = historia[indice].texto;
    if (historia[indice].opcoes) {
        areaTexto.textContent += "\n\nOpções:";
        historia[indice].opcoes.forEach((opcao, index) => {
            areaTexto.textContent += `\n${index + 1}. ${opcao}`;
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
      if (typeof destino === "string") {
      window.location.href = destino;
      } else {
      estadoAtual = regras[comando];
      mostrarTexto(estadoAtual);
      }
  } else {
      areaTexto.textContent += "\n\nResposta errada. Tente novamente.";
  }
}
 
inputComando.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        processarComando(inputComando.value);
        inputComando.value = "";
    }
});
 
mostrarTexto(estadoAtual);
   
