const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

inputComando.focus();

const historia = [
    { // 0 estágio 0
        texto: "Elfa – Cascata  Ao chegar à cascata, você se depara com uma elfa, ela possui vestes verdes e cabelo claro. Ao passar pelos caminhos ela assegura que você não irá se machucar, ela lhe conta sobre o poder desse lugar e diz que: se a rota certa seguir, fome não irá sentir, boa viagem, viajante.  ",
        opcoes: ["Explorar"],
        regras: {
          "explorar": 1, // Ajuste para minúsculas
          "1": 1, // Ajuste para minúsculas

        }
      },
      { // 1 Novo estágio para "Explorar"
        texto: "Você entra em um caminho e chega em uma cascata, lá, alguém está coletando água",
        opcoes: ["Você se aproxima", "Você segue o caminho das pedras"],
        regras: {
          "você se aproxima": 2,  // Índice do próximo estágio (você precisa criar esse estágio)
          "você segue o caminho das pedras": 3 // Índice do próximo estágio (você precisa criar esse estágio)
        }
      },
      { // 2 Novo estágio para "Você se aproxima"
        texto: "A pessoa te joga uma poção que manda para a floresta, a elfa te busca, mas vai demorar para voltar",
        opcoes: ["Você segue o caminho das pedras"],
        regras: {
          "você segue o caminho das pedras": 3 // Índice do próximo estágio (você precisa criar esse estágio)
        }
      },
      { // 3 Novo estágio para "Você segue o caminho das pedras"
        texto: "Ao passar por ele, você precisa saber quantas pedras haviam, contando que na ida e na volta, conta 20 pedras. Sabendo disso, quantas pedras há no total?",
        opcoes: ["20", "40", "400"],
        regras: {
          "20": 4,  // Índice do próximo estágio (você precisa criar esse estágio)
          "40": 5, // Índice do próximo estágio (você precisa criar esse estágio)
          "400": 5 // Índice do próximo estágio (você precisa criar esse estágio)
        }
      },
      { // 4 Novo estágio para "20"
        texto: "Você chega ao campo onde pode coletar alimento de árvores frutíferas.",
        
        regras: {
          
        }
      },
      { // 5 Novo estágio para "40"
        texto: "É 20",
        
        regras: {
          
        }
      },
      { // 5 Novo estágio para "400"
        texto: "É 20",
        
        regras: {
          
        }
      }
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