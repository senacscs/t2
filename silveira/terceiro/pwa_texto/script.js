const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

inputComando.focus();

const historia = [
    { // 0 estágio 0
        texto: "Wesley é um mecânico dedicado que trabalha em uma pequena oficina na periferia da cidade. Um dia, ele recebe o carro de Thomas, um motorista de aplicativo, para fazer alguns reparos urgentes. Thomas precisa do carro pronto até o fim do dia para continuar trabalhando, então Wesley decide ficar até mais tarde para terminar o serviço. Wesley está trabalhando no carro de Thomas quando recebe uma mensagem no celular.",
        opcoes: ["Atender a mensagem", "Ignorar a mensagem"],
        regras: {
          "atender a mensagem": 1, // Ajuste para minúsculas
          "1": 1, // Ajuste para minúsculas
          "atender": 1, // Ajuste para minúsculas
          "ignorar a mensagem": 2,   // Ajuste para minúsculas
          "ignorar": 2,   // Ajuste para minúsculas
          "2": 2 // Ajuste para minúsculas
        }
      },
      { // 1 Novo estágio para "Atender a mensagem"
        texto: "Wesley decide olhar a mensagem. É de sua esposa, avisando que não vai voltar para casa tão cedo porque vai ajudar uma amiga. Ele acha a mensagem estranha, mas decide continuar trabalhando. Wesley finalmente termina o serviço no carro de Thomas e decide ir para casa. Ao chegar, ele percebe que a casa está mais escura e silenciosa do que o normal.",
        opcoes: ["Entrar direto em casa", "Ligar para a esposa"],
        regras: {
          "entrar direto em casa": 3,  // Índice do próximo estágio
          "entrar": 3,  // Índice do próximo estágio
          "1": 3,  // Índice do próximo estágio
          "ligar para a esposa": 4, // Índice do próximo estágio
          "ligar": 4, // Índice do próximo estágio
          "2": 4, // Índice do próximo estágio
        }
      },
      { // 2 Novo estágio para "Ignorar a mensagem"
        texto: "Wesley ignora a mensagem e continua focado no trabalho. Ele termina o serviço no carro de Thomas, mas não consegue tirar a sensação de que algo está errado de sua cabeça. Wesley finalmente termina o serviço no carro de Thomas e decide ir para casa. Ao chegar, ele percebe que a casa está mais escura e silenciosa do que o normal.",
        opcoes: ["Entrar direto em casa", "Ligar para a esposa"],
        regras: {
          "entrar direto em casa": 3,  // Índice do próximo estágio
          "entrar": 3,  // Índice do próximo estágio
          "1": 3,  // Índice do próximo estágio
          "ligar para a esposa": 4, // Índice do próximo estágio
          "ligar": 4, // Índice do próximo estágio
          "2": 4, // Índice do próximo estágio
        }
      },
      { // 3 Novo estágio para "Entrar direto em casa"
        texto: "Wesley entra em casa e começa a procurar sua esposa. Ele a encontra no quarto, mas percebe que a cama está desarrumada e há uma segunda taça de vinho na mesa de cabeceira. Ele ouve um barulho no banheiro. Wesley decide investigar o barulho vindo do banheiro.",
        opcoes: ["Abrir a porta", "Ouvir atrás da porta"],
        regras: {
          "abrir a porta": 5,  // Índice do próximo estágio
          "abrir a porta": 5,  // Índice do próximo estágio
          "abrir": 5,  // Índice do próximo estágio
          "1": 5,  // Índice do próximo estágio
          "ouvir atrás da porta": 6, // Índice do próximo estágio
          "ouvir": 6, // Índice do próximo estágio
          "2": 6 // Índice do próximo estágio
        }
      },
      { // 4 Novo estágio para "ligar para a esposa"
        texto: "Wesley liga para sua esposa, mas ela não atende. Ele decide entrar em casa e procurar por ela. Ao entrar no quarto, ele encontra pistas de que alguém esteve ali recentemente: a cama desarrumada e uma taça de vinho extra na mesa de cabeceira. Wesley decide investigar o barulho vindo do banheiro.",
        opcoes: ["Abrir a porta", "Ouvir atrás da porta"],
        regras: {
          "abrir a porta": 5,  // Índice do próximo estágio
          "abrir a porta": 5,  // Índice do próximo estágio
          "abrir": 5,  // Índice do próximo estágio
          "1": 5,  // Índice do próximo estágio
          "ouvir atrás da porta": 6, // Índice do próximo estágio
          "ouvir": 6, // Índice do próximo estágio
          "2": 6 // Índice do próximo estágio
        }
      },
      { // 5 Novo estágio para "Abrir a porta abruptamente"
        texto: "Wesley abre a porta abruptamente e encontra sua esposa com um pedreiro da vizinhança. Ambos ficam chocados ao ver Wesley. Wesley agora precisa decidir como lidar com a situação.",
        opcoes: ["Confrontar os dois diretamente", "Sair de casa para pensar"],
        regras: {
          "confrontar os dois diretamente": 7,  // Índice do próximo estágio
          "confrontar": 7,  // Índice do próximo estágio
          "brigar": 7,  // Índice do próximo estágio
          "lutar": 7,  // Índice do próximo estágio
          "sair de casa para pensar": 8, // Índice do próximo estágio
          "sair": 8  // Índice do próximo estágio
        }
      },
      { // 6 Novo estágio para "Ouvir atrás da porta"
        texto: "Wesley escuta atrás da porta e ouve vozes baixas. Ele reconhece a voz de sua esposa e a de um homem. Sentindo-se traído, Wesley decide confrontá-los. Wesley agora precisa decidir como lidar com a situação.",
        opcoes: ["Confrontar os dois diretamente", "Sair de casa para pensar"],
        regras: {
          "confrontar os dois diretamente": 7,  // Índice do próximo estágio
          "confrontar": 7,  // Índice do próximo estágio
          "1": 7,  // Índice do próximo estágio
          "lutar": 7,  // Índice do próximo estágio
          "sair de casa para pensar": 8, // Índice do próximo estágio
          "sair": 8,  // Índice do próximo estágio
          "2": 8  // Índice do próximo estágio
        }
      },
      { // 7 Novo estágio para "Confrontar os dois diretamente"
        texto: "Wesley entra no banheiro e exige uma explicação. Sua esposa tenta se justificar, mas Wesley está muito furioso para ouvir. Uma discussão acalorada começa. Perdoar ou pedir o divórcio?",
        opcoes: ["Perdoar", "Pedir o divórcio"],
        regras: {
          "perdoar": 9,  // Índice do próximo estágio
          "1": 9,  // Índice do próximo estágio
          "pedir o divórcio": 10,  // Índice do próximo estágio
          "2": 10,  // Índice do próximo estágio
        }
      },
      { // 8 Novo estágio para "Sair de casa"
        texto: "Na hora do acontecimento eram 19:45, Wesley demorou 10% de uma hora para sair de casa, que horas Wesley saiu de casa?",
        opcoes: ["19:50", "19:51", "19:52", "19,53"],
        regras: {
          "19:50": 11,  // Índice do próximo estágio
          "19:51": 12,  // Índice do próximo estágio
          "19:52": 11,  // Índice do próximo estágio
          "19:53": 11,  // Índice do próximo estágio
        }
      },
      { // 9 Novo estágio para "Perdoar"
        texto: "Wesley decide perdoar sua amada e vivem felizes para sempre",
        opcoes: ["Recomeçar o jogo",],
        regras: {
          "Recomeçar o jogo": 0,  // Índice estágio 0
          "1": 0,  // Índice destágio 0
          
        }
      },
      { // 10 Novo estágio para "pedir o divórcio"
        texto: "Wesley decide pedir divorcio de sua mulher, pois não suporta viver com essa traição, e cada um segue sua vida",
        opcoes: ["Recomeçar o jogo",],
        regras: {
          "Recomeçar o jogo": 0,  // Índice estágio 0
          "1": 0,  // Índice destágio 0
          
        }
      },
      { // 11 Novo estágio para "Errar a pergunta"
        texto: "Você errou, digite 1 para voltar a pergunta",
        opcoes: ["Digite 1",],
        regras: {
          "1": 8,  // Índice do próximo estágio
          "digite 1": 8,  // Índice do próximo estágio
        
        }
      },
      { // 12 Novo estágio para "Acertar a pergunta"
        texto: "Wesley sai de casa as 19:51 e decide ir para uma festa, lá ele encontra alguns conhecidos não tão conhecidos assim",
        opcoes: ["Digite 1 para saber onde Wesley está", "Recomeçar o jogo",],
        regras: {
          "1": 13,  // Índice do próximo estágio
          "recomeçar o jogo": 0,  // Índice do estágio 0
          "2": 0,  // Índice do estágio 0
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
