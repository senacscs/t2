const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

inputComando.focus()
 
const historia = [
  { // 0: O Portão do Guardião
      texto: "Você se aproxima do Portão do Guardião. O que você faz?",
      opcoes: ["Pedir permissão para entrar", "Tentar invadir"],
      regras: {
          "1": 1,
          "2": 2
      }
  },
  { // 1: Pedir Permissão
      texto: "O guardião ouve seu pedido e decide testá-lo. Ele oferece um desafio de sabedoria. O que você faz?",
      opcoes: ["Aceitar o desafio", "Recusar e lutar"],
      regras: {
          "1": 3,
          "2": 4
      }
  },
  { // 2: Tentar Invadir
      texto: "Você tenta invadir o portão, mas o guardião é poderoso. Ele o detém facilmente. O que você faz?",
      opcoes: ["Pedir perdão e solicitar permissão", "Lutar com todas as suas forças"],
      regras: {
          "1": 1,
          "2": 5
      }
  },
  { // 3: Aceitar o Desafio de Sabedoria
      texto: "Você aceita o desafio de sabedoria. O guardião lhe faz uma pergunta complicada: 'Qual é o próximo número na sequência 2, 3, 5, 8, 12, 17, ...?' O que você faz?",
      opcoes: ["Responder 29", "Responder 24"],
      regras: {
          "1": 6,
          "2": 15
      }
  },
  { // 4: Recusar e Lutar
      texto: "Você decide lutar. O guardião é forte, mas você vence após uma longa batalha. O que você faz?",
      opcoes: ["Entrar no portão", "Descansar e depois entrar"],
      regras: {
          "1": 6,
          "2": 6
      }
  },
  { // 5: Lutar com todas as suas forças
      texto: "Você luta com todas as suas forças, mas o guardião é imbatível. Você é derrotado e deve recuar.",
      opcoes: ["Recuar e descansar", "Tentar novamente"],
      regras: {
          "1": 0,
          "2": 2
      }
  },
  { // 6: O Jardim dos Segredos
      texto: "Você responde corretamente e entra no portão e encontra o Jardim dos Segredos. O que você faz?",
      opcoes: ["Explorar o jardim", "Seguir em frente"],
      regras: {
          "1": 7,
          "2": 8
      }
  },
  { // 7: Explorar o Jardim
      texto: "Você explora o jardim e encontra um artefato mágico que aumenta sua sabedoria. O que você faz?",
      opcoes: ["Pegar o artefato", "Deixar o artefato"],
      regras: {
          "1": 9,
          "2": 8
      }
  },
  { // 8: Seguir em Frente
      texto: "Você segue em frente e encontra uma porta misteriosa. O que você faz?",
      opcoes: ["Abrir a porta", "Ignorar a porta"],
      regras: {
          "1": 10,
          "2": 11
      }
  },
  { // 9: Pegar o Artefato
      texto: "Você pega o artefato e sente seu poder. Sua sabedoria aumenta consideravelmente.",
      opcoes: ["Continuar"],
      regras: {
          "1": 8
      }
  },
  { // 10: Abrir a Porta
      texto: "Você abre a porta e encontra um salão antigo cheio de tesouros. O que você faz?",
      opcoes: ["Pegar os tesouros", "Explorar o salão"],
      regras: {
          "1": 12,
          "2": 13
      }
  },
  { // 11: Ignorar a Porta
      texto: "Você ignora a porta e continua sua jornada.",
      opcoes: ["Continuar"],
      regras: {
          "1": 14
      }
  },
  { // 12: Pegar os Tesouros
      texto: "Você pega os tesouros e se sente mais rico, mas agora é alvo de ladrões.",
      opcoes: ["Continuar"],
      regras: {
          "1": 14
      }
  },
  { // 13: Explorar o Salão
      texto: "Você explora o salão e descobre segredos antigos que aumentam seu conhecimento.",
      opcoes: ["Continuar"],
      regras: {
          "1": 14
      }
  },
  { // 14: Fim da Parte 2
    texto: "Fim da Parte 2: O Guardião dos Segredos. A próxima parte será revelada em breve.",
    opcoes: ["Recomeçar", "Jogar parte 3"],
    regras: {
        "1": 0,
        "2": "https://senacscs.github.io/t2/pablo/terceiro/jogo_texto"
    }
  },
  { // 15: Responder 23
    texto: "Você errou.",
    opcoes: ["Tentar Novamente", "Desistir"],
    regras: {
        "1": 3,
        "2": 0
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
        const destino = regras[comando];
        if (typeof destino === "string") {
        window.location.href = destino;
        } else {
        estadoAtual = regras[comando];
        mostrarTexto(estadoAtual);
        }
        areaTexto.textContent += "\n\nComando inválido. Tente novamente.";
    }
}
 
inputComando.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        processarComando(inputComando.value);
        inputComando.value = "";
    }
});
 
mostrarTexto(estadoAtual);