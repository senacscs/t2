const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

const historia = [
    { // 0 estágio 0
        texto: "Era uma noite escura e fria quando você decidiu voltar para casa após um longo dia de trabalho. As ruas estavam desertas, e uma sensação de desconforto pairava no ar. O que você faz??",
        opcoes: ["1 Continuar andando", "2 Olhar ao redor"],
        regras: {
          " continuar andando": 1,
          "1": 1, 
          "olhar ao redor": 2,    
        }
      },
      { 
        texto: "Enquanto caminhava rapidamente pela calçada, um ruído de passos ecoava ao longe, aumentando sua ansiedade. O que você faz?",
        opcoes: ["3 Acelerar o passo", "4 Parar e ouvir"],
        regras: {
          "acelerar o passo": 3,  
          "Parar e ouvir": 4,
        }
      },
      { 
        texto: "Você tenta apressar os passos, mas a sombra se aproxima cada vez mais. Quando está prestes a entrar em pânico, uma figura imponente aparece à sua frente, bloqueando o caminho da sombra. O que você faz?",
        opcoes: ["6 Observar a figura", "7 Fugir"],
        regras: {
          "observar a figura": 6,
          "fugir" : 7,  
        }
      },
      { 
        texto: "Você para e ouve com atenção, mas o som dos passos aumenta e a sombra se aproxima rapidamente. O que você faz?",
        opcoes: ["8 Acelerar o passo", "9 Confrontar a sombra"],
        regras: {
          "Acelerar o passo": 8,  
          "Confrontar a sombra": 9 
        }
      },
      { 
        texto: "Você decide confrontar a sombra, mas uma figura imponente aparece à sua frente, bloqueando o caminho da sombra. O que você faz?",
        opcoes: ["10 Observar a figura", "11 Fugir"],
        regras: {
          "observar a figura": 10,
          "fugir": 11
        }
      },
      { 
        texto: "Vestido com roupas típicas e um chapéu de aba larga, ele segura um tridente e seu semblante é sério, mas não ameaçador. 'Sou Exu Marabô', diz a figura com uma voz grave e firme. 'Estou aqui para protegê-lo.' O que você faz?",
        opcoes: ["12 Acreditar", "13 Duvidar"],
        regras: {
          "acreditar": 12,
          "duvidar": 13
        }
      },
      { 
        texto: "Você tenta fugir, mas a sombra te alcança e você se vê encurralado. De repente, Exu Marabô aparece novamente e te protege. O que você faz?",
        opcoes: ["14 Acreditar", "15 Duvidar"],
        regras: {
          "acreditar": 14,
          "duvidar": 15
        }
      },
      { 
        texto: "Marabô começa a caminhar ao seu lado, e enquanto vocês andam, ele conta histórias sobre suas funções como guardião dos caminhos e protetor dos viajantes. Aos poucos, sua presença forte e segura faz com que seu medo diminua. O que você faz?",
        opcoes: ["16 Continuar ouvindo", "17 Agradecer e seguir"],
        regras: {
          "continuar ouvindo": 16,
          "agradecer e seguir": 17
        }
      },
      { 
        texto: "Você, inicialmente cético e assustado, hesita em acreditar nas palavras daquela entidade misteriosa. No entanto, a sombra que te perseguia para e recua, parecendo respeitar a presença de Marabô. O que você faz?",
        opcoes: ["18 Acreditar", "19 Ainda duvidar"],
        regras: {
          "acreditar": 18,
          "ainda duvidar": 19
        }
      },
      { 
        texto: "Os perigos da noite parecem se dissipar à medida que Marabô guia você pelas ruas. Os becos sombrios e as figuras ameaçadoras se tornam menos intimidantes com ele ao seu lado. Finalmente, você chega à porta de sua casa, são e salvo. Marabô se despede com um aceno, sua missão cumprida.",
        opcoes: ["20 Agradecer"],
        regras: {
          "agradecer": 20
        }
      },
      { 
        texto: "Você agradece a Marabô e segue para casa, sentindo-se grato e mais seguro, sabendo que a proteção de Exu Marabô estará sempre presente, mesmo nos momentos mais difíceis.",
        opcoes: ["21 Fim"],
        regras: {
          "fim": 21
        }
      },
      { // 12 Ainda duvidar
        texto: "Você ainda está um pouco incrédulo, mas decide seguir Marabô. Ao longo do caminho, você percebe que os perigos realmente se dissipam e sente uma proteção ao seu redor. Finalmente, você chega à porta de sua casa, são e salvo. Marabô se despede com um aceno, sua missão cumprida.",
        opcoes: ["22 Agradecer"],
        regras: {
          "agradecer": 22
        }
      },
      { 
        texto: "Marabô apenas sorri e desaparece na escuridão, deixando você com a certeza de que, mesmo nas noites mais escuras, há sempre alguém cuidando de você.",
        opcoes: ["23 Fim"],
        regras: {
          "fim": 23
        }
      },
      { 
        texto: "Fim da história. Você foi protegido por Exu Marabô e chegou em casa são e salvo.",
        opcoes: [],
        regras: {}
      }
    







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
