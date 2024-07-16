const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

inputComando.focus();

const historia = [
  { // 0 estágio 0
    texto: "Você trabalha entregando cartas! É um trabalho que ninguém quer fazer, mas é mais do que necessário; constantemente, há uma nova aventura que você deve enfrentar para que as cartas na sua bolsa sejam entregues aos seus destinos, independente dos perigos que aparecerão no seu caminho. Mas, apesar de não podermos controlar o destino, hoje você pode escolher como você quer chegar lá.",
    opcoes: ["quero trilhar o caminho da floresta", "quero entrar na base da montanha", "quero passar pelo túnel verde"],
    regras: {
      "quero trilhar o caminho da floresta": "/floresta", // rota do vampiro na floresta (theo)
      "1": "floresta/index.html",  // rota do vampiro na floresta (theo)
      "quero entrar na base da montanha": "/caverna", // rota do dragão na caverna (nick)
      "2": "caverna/index.html", // rota do dragão na caverna (nick)
      "quero passar pelo túnel verde": "/tunel", // rota do cavaleiro (henryque)
      "3": "tunel/index.html" // rota do cavaleiro (henryque)
    }
  },
  { // 1 Novo estágio para "continuar" e encontrar uma mansão
    texto: "Não tem ainda <3",
    opcoes: ["voltar"],
    regras: {
      "voltar": 0,  // Índice do próximo estágio (você precisa criar esse estágio)
      "1": 0,
    }
  },
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
    if (typeof destino === "string") {
      window.location.href = destino;
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
