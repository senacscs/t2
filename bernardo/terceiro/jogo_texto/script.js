const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

const historia = [
  { // 0: Encruzilhada do Destino
      texto: "Você se encontra em uma encruzilhada misteriosa, onde a densa neblina esconde os caminhos à frente. O vento frio sussurra segredos antigos enquanto você pondera sua escolha. O que você faz?",
      opcoes: ["Seguir pelo caminho da luz", "Seguir pelo caminho das sombras"],
      regras: {
        "1": 1,
        "2": 2
      }
  },
  { // 1: Caminho da Luz
      texto: "O caminho da luz é sereno, iluminado por uma luz suave que parece emanar das próprias árvores. Você encontra um ancião de olhos sábios, cuja presença emana uma aura de paz. Ele oferece a você uma espada mágica que brilha com um fulgor místico. O que você faz?",
      opcoes: ["Aceitar a espada", "Recusar a espada"],
      regras: {
        "1": 3,
        "2": 4
      }
  },
  { // 2: Caminho das Sombras
      texto: "O caminho das sombras é escuro e ameaçador, com árvores retorcidas e sombras que parecem se mover. Monstros poderosos surgem das trevas, mas você encontra uma armadura antiga, reluzente e forte. O que você faz?",
      opcoes: ["Vestir a armadura", "Deixar a armadura"],
      regras: {
        "1": 5,
        "2": 4
      }
  },
  { // 3: Aceitar a Espada
      texto: "Você aceita a espada mágica e sente um poder novo correr por suas veias. Sua jornada agora está marcada pela confiança e pelo brilho da arma em sua mão.",
      opcoes: ["Continuar"],
      regras: {
        "1": 6
      }
  },
  { // 4: Recusar a Espada/Armadura
      texto: "Você decide seguir sua jornada sem aceitar nenhuma oferta, acreditando em sua própria força. Contudo, as dificuldades à frente parecem se multiplicar a cada passo.",
      opcoes: ["Continuar"],
      regras: {
        "1": 6
      }
  },
  { // 5: Vestir a Armadura
      texto: "Você veste a armadura, sentindo-se imediatamente mais protegido, mas a armadura também pesa sobre seus ombros, limitando seus movimentos.",
      opcoes: ["Continuar"],
      regras: {
        "1": 6
      }
  },
  { // 6: A Ponte Desmoronada
      texto: "Diante de você, uma ponte desmoronada balança precariamente sobre um abismo profundo. Você deve escolher entre um salto arriscado ou um desvio perigoso. O que você faz?",
      opcoes: ["Salto da Fé", "Desvio Perigoso"],
      regras: {
        "1": 7,
        "2": 8
      }
  },
  { // 7: Salto da Fé
      texto: "Com coragem, você salta pela ponte e encontra, no outro lado, um artefato raro que emana uma luz suave, aumentando sua resistência à magia.",
      opcoes: ["Continuar"],
      regras: {
        "1": 9
      }
  },
  { // 8: Desvio Perigoso
      texto: "Você opta pelo desvio e se depara com um grupo de bandidos. Após uma luta intensa, você emerge vitorioso, carregando novos itens de cura e uma nova experiência em combate.",
      opcoes: ["Continuar"],
      regras: {
        "1": 9
      }
  },
  { // 9: A Vila Abandonada
    texto: "Você chega a uma vila abandonada, onde o silêncio é quebrado apenas pelo vento que assobia entre as casas em ruínas. Para continuar, você deve resolver um enigma antigo: Qual é a soma dos ângulos internos de um triângulo?",
    opcoes: ["Digite a resposta"],
    regras: {
      "180": 10 // Resposta correta
    }
},
{ // 10: Resgatar os Prisioneiros
    texto: "Parabéns, você encontrou um baú contendo uma armadura estilosa, incrustada de joias que brilham intensamente.",
    opcoes: ["Continuar"],
    regras: {
      "1": 12
    }
},
{ // 11: Ignorar a Vila
    texto: "Você decide ignorar a vila e, ao fazê-lo, perde a chance de obter valiosas recompensas. Sua jornada continua, agora mais árdua e cheia de incertezas.",
    opcoes: ["Continuar"],
    regras: {
      "1": 12
    }
},
  { // 12: Fim da Parte 1
      texto: "Fim da Parte 1: Ao seguir em frente, você se depara com o Portão do Guardião que brilha intensamente, revelando um novo desafio à sua frente. O que você faz?",
      opcoes: ["Recomeçar", "Seguir a estrada"],
      regras: {
        "1": 0,
        "2": "irProximoJogo",
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
  comando = comando.replace(/^\d+\s*-\s*/, '').trim().toLowerCase();
  const regras = historia[estadoAtual].regras;

  if (comando in regras) {
      // Verifica se a regra é uma função em vez de um índice de estado
      if (typeof regras[comando] === "string" && typeof window[regras[comando]] === "function") {
          window[regras[comando]](); // Chama a função correspondente
          return;
      }

      estadoAtual = regras[comando];
      mostrarTexto(estadoAtual);

      // Verifica se chegou ao final do jogo
      if (estadoAtual === 12) { // Altere para o estado final do jogo
          document.getElementById('final').style.display = 'block'; // Exibe o botão
      } else {
          document.getElementById('final').style.display = 'none'; // Oculta o botão se não for o estado final
      }

      // Exibe ou oculta a imagem com base no estadoAtual
      if (estadoAtual === 10) {
          document.getElementById('imagem').style.display = 'block'; // Exibe a imagem
      } else {
          document.getElementById('imagem').style.display = 'none'; // Oculta a imagem
      }
  } else {
      areaTexto.textContent += "\n\nComando inválido. Tente novamente.";
  }
}

function irProximoJogo() {
  window.location.href = "https://senacscs.github.io/t2/goritz/terceiro/pwa_texto/";
}


inputComando.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        processarComando(inputComando.value);
        inputComando.value = "";
    }
});

mostrarTexto(estadoAtual);
