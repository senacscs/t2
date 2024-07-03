const game = {
  estagios: [
      { // Estágio 0
          texto: "Você acorda em uma nave espacial. O que você faz?",
          opcoes: [
              { texto: "Explorar a nave", proximoEstagio: 1 },
              { texto: "Verificar sistemas", proximoEstagio: 2 }
          ]
      },
      { // Estágio 1
          texto: "Você encontra uma sala misteriosa. O que você faz?",
          opcoes: [
              { texto: "Investigar os controles", proximoEstagio: 3 },
              { texto: "Procurar por artefatos", proximoEstagio: 4 }
          ]
      },
      { // Estágio 2
          texto: "Os sistemas estão instáveis. O que você faz?",
          opcoes: [
              { texto: "Reparar os sistemas", proximoEstagio: 5 },
              { texto: "Explorar outras áreas", proximoEstagio: 6 }
          ]
      },
      { // Estágio 3
          texto: "Os controles revelam uma mensagem codificada. O que você faz?",
          opcoes: [
              { texto: "Decifrar a mensagem", proximoEstagio: 7 },
              { texto: "Continuar explorando", proximoEstagio: 8 }
          ]
      },
      { // Estágio 4
          texto: "Você encontra artefatos valiosos. O que você faz?",
          opcoes: [
              { texto: "Coletar os artefatos", proximoEstagio: 9 },
              { texto: "Explorar mais a fundo", proximoEstagio: 8 }
          ]
      },
      { // Estágio 5
          texto: "Os sistemas foram reparados. O que você faz agora?",
          opcoes: [
              { texto: "Continuar a jornada", proximoEstagio: 7 },
              { texto: "Explorar a nave", proximoEstagio: 9 }
          ]
      },
      { // Estágio 6
          texto: "Você encontra uma passagem bloqueada. O que você faz?",
          opcoes: [
              { texto: "Procurar por uma chave", proximoEstagio: 8 },
              { texto: "Voltar para a sala principal", proximoEstagio: 7 }
          ]
      },
      { // Estágio 7
          texto: "Você decifra a mensagem e descobre um mapa estelar. O que você faz?",
          opcoes: [
              { texto: "Seguir para o próximo destino", proximoEstagio: 9 },
              { texto: "Explorar planetas próximos", proximoEstagio: 8 }
          ]
      },
      { // Estágio 8
          texto: "Você explora áreas desconhecidas da nave. O que você faz?",
          opcoes: [
              { texto: "Descobrir mais sobre a nave", proximoEstagio: 9 },
              { texto: "Retornar para a sala principal", proximoEstagio: 7 }
          ]
      },
      { // Estágio 9
          texto: "Você encontra um portal interdimensional. O que você faz?",
          opcoes: [
              { texto: "Ativar o portal", proximoEstagio: 10 },
              { texto: "Estudar o portal", proximoEstagio: 8 }
          ]
      },
      { // Estágio 10
          texto: "O portal se abre para um novo universo. O que você faz?",
          opcoes: [
              { texto: "Explorar o novo universo", proximoEstagio: null },
              { texto: "Fechar o portal", proximoEstagio: 9 }
          ]
      }
  ]
};

const areaTexto = document.getElementById("area-texto");
const opcoesContainer = document.getElementById("opcoes");

// Função para exibir o estágio atual do jogo
function exibirEstagio(numeroEstagio) {
  const estagioAtual = game.estagios[numeroEstagio];

  areaTexto.textContent = estagioAtual.texto;
  opcoesContainer.innerHTML = '';

  // Exibir opções clicáveis
  estagioAtual.opcoes.forEach((opcao, index) => {
      const botaoOpcao = document.createElement("button");
      botaoOpcao.textContent = opcao.texto;
      botaoOpcao.classList.add("opcao");

      botaoOpcao.addEventListener("click", () => {
          const proximoEstagio = opcao.proximoEstagio;
          if (proximoEstagio !== null && proximoEstagio !== undefined) {
              exibirEstagio(proximoEstagio);
          } else {
              areaTexto.textContent = "Você chegou ao fim da jornada. Obrigado por jogar!";
              opcoesContainer.innerHTML = '';
          }
      });

      opcoesContainer.appendChild(botaoOpcao);
  });
}

// Iniciar o jogo a partir do primeiro estágio
exibirEstagio(0);
