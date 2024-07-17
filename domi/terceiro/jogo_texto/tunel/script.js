const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

inputComando.focus();

const historia = [
  { // 0 estágio 0
    texto: "Você avança pela estrada de chão sentindo o peso de sua mochila em suas costas, de repente um alto estrondo pode ser escutado atravessando a floresta. Você se apressa para ver o que é, se escondendo atrás de pedras é possível se notar uma carroça capotada.",
    opcoes: ["observar", "voltar"],
    regras: {
      "observar": 1, // Ajuste para minúsculas
      "1": 1, // Ajuste para minúsculas
      "voltar": 2,   // Ajuste para minúsculas
      "2": 2,
    }
  },
  { // 1 Novo estágio para "observar"
    texto: "Um grupo de ladrões! eles se agrupam não muito longe da carroça conversando sobre seus achados, rapidamente tudo fica quieto, os bandidos olham ao redor enquanto é possível se escutar o som das folhas rodeando o lugar, como se alguém estivesse se aproximando, todos eles se juntam e começam a olhar em todas as direções procurando o que causa esses sons...",
    opcoes: ["...!"],
    regras: {
      "...!": 2,  // Índice do próximo estágio (você precisa criar esse estágio)
      "1": 2,
    }
  },
  { // 2 Novo estágio para "...!"
    texto: "Um golpe, foi tudo que precisou, sua visão banhada em vermelho, onde uma vez havia um grupo de ladrões agora tem uma armadura prateada, banhada em sangue a armadura começa a se aproximar de você, de algum modo ela aparenta ter te percebido.",
    opcoes: ["fugir", "continuar escondido"],
    regras: {
      "fugir": 3,
      "1": 3,
      "continuar escondido": 4,
      "2": 4,
    }
  },
  { // 3 Novo estágio para "fugir"
    texto: "Os passos pesados fazem com que o chão estremeça, você sente enquanto se afasta os passos acelerarem.",
    opcoes: ["continuar", "parar"],
    regras: {
      "continuar": 5,
      "1": 5,
      "parar": 6,
      "2": 6,
    }
  },
  { // 4 Novo estágio para "continuar escondido"
    texto: "Com passos lentos e pesados a armadura se aproxima, ela se abaixa ficando bem próxima de você.",
    opcoes: ["ficar parado", "contra-atacar", "fingir de morto"],
    regras: {
      "ficar parado": 6,
      "1": 6,
      "contra-atacar": 7,
      "2": 7,
      "fingir de morto": 8,
      "3": 8,

    }
  },
  { // 5 Novo estágio para "continuar"
    texto: "Você é o próximo, você sente isso, o fim eminente se aproxima cada vez mais. Mais rápido, você precisa ir mais rápido, você sente a presença da armadura cada vez mais próxima.",
    opcoes: ["!!!"],
    regras: {
      "!!!": 9, //descrição de morte -> game over
      "1": 9,
    }
  },
  { // 6 Novo estágio para "ficar parado/parar"
    texto: "Você tenta se mover mas não consegue, você se encontra imóvel, lentamente a armadura se aproxima e para em sua frente, a fria armadura se mantém em silêncio, ela estende a espada para perto de seu corpo. \n- Você... - ela pausa - Você era um deles? - a grande armadura aponta sua espada na direção dos corpos decepados dos ladrões.",
    opcoes: ["sim", "não", "se manter em silêncio"],
    regras: {
      "sim": 10,
      "1": 10,
      "não": 11,
      "2": 11,
      "se manter em silêncio": 12,
      "3": 12,
    }
  },
  { // 7 Novo estágio para "contra-atacar"
    texto: "Foi rápido, você sente uma dor extrema e, de repente, não sente mais nada, o som alto dos ossos em seu pescoço estalando ecoa na floresta e assim, tudo fica escuro.",
    opcoes: ["GAME OVER"],
    regras: {
      "game over": 0,
      "1": 0,
    }
  },
  { // 8 Novo estágio para "fingir de morto"
    texto: "tem que fazer",
    opcoes: ["GAME OVER"],
    regras: {
      "game over": 0,
      "1": 0,
    }
  },
  { // 9 Novo estágio para "!!!"
    texto: "Frio, tudo fica frio. você baixa seu olhar encarando o vermelho que mancha suas roupas, uma lâmina penetra seu corpo e você se mantém imóvel.",
    opcoes: ["..."],
    regras: {
      "...": 13, //descrição de morte -> game over
      "1": 13,
    }
  },
  { // 10 Novo estágio para "ficar parado/sim"
    texto: "O golpe é rápido, sua cabeça cai contra o chão e seu sangue mancha o solo, seu corpo se contorce no chão por alguns minutos até parar, para assim nunca mais se mover.",
    opcoes: ["GAME OVER"],
    regras: {
      "game over": 0,
      "1": 0,
    }
  },
  { // 11 Novo estágio para "ficar parado/não"
    texto: "A armadura abaixa sua espada. \n- Então diga o que faz aqui.",
    opcoes: ["se manter em silêncio", "explicar"],
    regras: {
      "se manter em silêncio": 14,
      "1": 14,
      "explicar": 15,
      "2": 15,
    }
  },
  { // 12 Novo estágio para "ficar parado/se manter em silêncio"
    texto: "- Se não responder com certeza vai acabar como eles, me responda, você é um deles? ",
    opcoes: ["sim", "não"],
    regras: {
      "sim": 10,
      "1": 10,
      "não": 11,
      "2": 11,
    }
  },
  { // 13 Novo estágio para "continuar/!!!/..."
    texto: "Sem forças seu corpo colide contra o chão e a vida foge de seu corpo.",
    opcoes: ["GAME OVER"],
    regras: {
      "game over": 0, //descrição de morte -> game over
      "1": 0,
    }
  },
  { // 14 Novo estágio para "ficar parado/não/se manter em silêncio"
    texto: "- Não é muito de conversar? Entendo, sinto muito que tenha que ter visto tudo isso - a armadura encara o horizonte vendo o sol se por - bem, está ficando tarde, acredito que não é seguro ficar aqui.\nA armadura ergue a carroça.\n- Suba, eu vou te levar ao vilarejo mais próximo.",
    opcoes: ["sim", "não"],
    regras: {
      "não": 0,
      "1": 0,
      "fiz ainda": 0,
      "2": 0,
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
    estadoAtual = regras[comando];
    if (typeof destino === "string"){
      window.location.href = destino;
    }else {
      estadoAtual = regras[comando];
      mostrarTexto(estadoAtual);
    }
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