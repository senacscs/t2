const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

inputComando.focus();

const historia = [
    { // 0 estágio 0
        texto: "Olá, nesse jogo você ira passar por diversos desafios e perigos '",
        opcoes: ["Ir para o norte", "Ir para o sul", "Gritar por ajuda", "senac", "google"],
        regras: {
          "ir para o monte dos números": 1, // Ajuste para minúsculas
          "1": 1, // Ajuste para minúsculas
          "ir para o sul": 2,   // Ajuste para minúsculas
        }
      },
      { // 1 Novo estágio para "Ir para o norte"
        texto: "Você segue para o norte e encontra um caminho estreito. O que você faz?",
        opcoes: ["Seguir o caminho", "Voltar para a floresta"],
        regras: {
          "seguir o caminho": 3,  // Índice do próximo estágio (você precisa criar esse estágio)
          "voltar para a floresta": 4 // Volta para o primeiro estágio
        }
      },
      { // 2 Novo estágio para "Ir para o norte"
        texto: "Não pode, vai pro norte ou grite",
        opcoes: ["Voltar para a floresta"],
        regras: {
          "voltar para a floresta": 0 // Volta para o primeiro estágio
        }
      },
      { // 3 Novo estágio para "gritar por ajuda"
        texto: "AHHHHHHHHHHHHHHHHHHHHH",
        opcoes: ["Voltar para a floresta", "Gritar por ajuda"],
        regras: {
          "voltar para a floresta": 0,  // Índice do próximo estágio (você precisa criar esse estágio)
          "gritar por ajuda": 3 // Volta para o primeiro estágio
        }
      },
      { // 4 Novo estágio para "gritar por ajuda"
        texto: "Parabéns, você encontrou o tesouro!",
        opcoes: ["Voltar para a floresta", "Gritar por ajuda"],
        regras: {
          "voltar para a floresta": 0 // Volta para o primeiro estágio
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
      if (typeof destino === "string") {
        window.location.href = destino;
      } else {
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
