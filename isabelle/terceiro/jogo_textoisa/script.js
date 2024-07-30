const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
const mazeContainer = document.getElementById("maze-container");
const puzzleContainer = document.getElementById("puzzle-container");
const puzzle = document.getElementById("puzzle");
const puzzleInput = document.getElementById("puzzle-input");

let estadoAtual = 0;
let playerPosition = { x: 0, y: 0 };

// const puzzles = [
//     { question: "Resolva: 1 + 4 = 5, 2 + 5 = 12, 3 + 6 = 21, 8 + 11 = ??", answer: "40" },
//     { question: "Resolva: 12 / 4", answer: "3" },
//     { question: "Resolva: 7 * 6", answer: "42" },
//     { question: "Resolva: 15 - 9", answer: "6" }
// ];

const historia = [
    { //vetor 0 = fase 1
        texto: "Você é um detetive renomado, conhecido por resolver casos intrigantes e misteriosos. Um dia, você recebe uma carta anônima pedindo sua ajuda para desvendar o segredo por trás de uma mansão abandonada na periferia da cidade. Dizem que a mansão é assombrada e que ninguém que entrou nela voltou para contar a história. Sua curiosidade é despertada, e você decide investigar.\n\nVocê chega à mansão ao entardecer. O portão principal está entreaberto, rangendo ao vento. O jardim é coberto por ervas daninhas e a casa, imponente, está envolta em uma névoa espessa. O que você faz?",
        opcoes: ["1 - Entrar pela porta da frente", "2 - Contornar a casa e procurar uma entrada pelos fundos"],
        regras: {
            "entrar pela porta da frente": 1,
            "1": 1,
            "contornar a casa e procurar uma entrada pelos fundos": 2,
            "2": 2,
            "fim": 15,
            "bau": 9,
        }
    },
    { //vetor 1 = fase 2
        texto: "Ao entrar, você se depara com um hall de entrada grandioso, mas empoeirado. Quadros antigos pendem das paredes e há uma escada imponente à sua frente. O que você faz?",
        opcoes: ["1 - Subir a escada", "2 - Explorar o corredor à direita"],
        regras: {
            "1": 3,
            "2": 4
        }
    },
    { //vetor 2 = fase 3
        texto: "Você encontra uma porta de serviço destrancada. Ao entrar, se vê em uma cozinha antiga e mal iluminada. Um forte cheiro de mofo e comida estragada invade suas narinas. O que você faz?",
        opcoes: ["Investigar a despensa", "Seguir pelo corredor à esquerda"],
        regras: {
            "investigar a despensa": 5,
            "seguir pelo corredor à esquerda": 6
        }
    },
    { //vetor 3
        texto: "No topo da escada, há um longo corredor com várias portas. Um leve gemido pode ser ouvido vindo de uma das portas no fim do corredor. O que você faz?",
        opcoes: ["Abrir a porta de onde vem o som", "Explorar os quartos ao longo do corredor"],
        regras: {
            "abrir a porta de onde vem o som": 7,
            "explorar os quartos ao longo do corredor": 8
        }
    },
    { //vetor 4
        texto: "Você encontra um velho diário com uma capa desgastada. O que você faz?",
        opcoes: ["Ler o diário", "Guardar o diário e sair"],
        regras: {
            "ler o diário": 9,
            "guardar o diário e sair": 10
        }
    },
    { //vetor 5
        texto: "Você entra na despensa e encontra um velho diário com uma capa desgastada. O que você faz?",
        opcoes: ["Ler o diário", "Sair da despensa"],
        regras: {
            "ler o diário": 9,
            "sair da despensa": 2
        }
    },
    { //vetor 6
        texto: "O corredor escuro leva a um porão. Há uma escada que desce para o porão, onde você pode ouvir o som de água pingando. O que você faz?",
        opcoes: ["Descer para o porão", "Voltar para a cozinha"],
        regras: {
            "descer para o porão": 11,
            "voltar para a cozinha": 2
        }
    },
    { //vetor 7
        texto: "Você encontra um quarto escuro com uma janela entreaberta. Uma figura sombria está em pé, murmurando palavras incompreensíveis. O que você faz?",
        opcoes: ["Aproximar-se da figura", "Sair do quarto"],
        regras: {
            "aproximar-se da figura": 12,
            "sair do quarto": 2
        }
    },
    { //vetor 8
        texto: "Os quartos estão cheios de móveis cobertos por lençóis brancos. Em um deles, você encontra um baú trancado. O que você faz?",
        opcoes: ["Forçar o baú", "Sair do quarto"],
        regras: {
            "forçar o baú": 13,
            "sair do quarto": 2
        }
    },
    { //vetor 9
        texto: "A senha do bau blablabal é 1 + 4 = 5, 2 + 5 = 12, 3 + 6 = 21, 8 + 11 = ??",
        opcoes: ["76 ", "585"],
        regras: {
            "76": 9,
            "sair do quarto": 2
        }
    },
    { //vetor 10
        texto: "O diário revela segredos obscuros sobre os antigos moradores da mansão, mencionando rituais e acontecimentos macabros. Você sente uma presença estranha ao seu redor, como se estivesse sendo observado. O que você faz?",
        opcoes: ["Continuar lendo o diário", "Sair da mansão"],
        regras: {
            "continuar lendo o diário": 14,
            "sair da mansão": 10
        }
    },
    { //vetor 11
        texto: "Você decide sair da mansão, levando consigo as lembranças do que descobriu. Fim.",
        opcoes: [],
        regras: {}
    },
    { //vetor 12
        texto: "Você desce para o porão e encontra um altar antigo coberto de velas derretidas e símbolos estranhos. Você sente uma presença assustadora ao seu redor. O que você faz?",
        opcoes: ["Investigar o altar", "Sair do porão"],
        regras: {
            "investigar o altar": 14,
            "sair do porão": 2
        }
    },
    { //vetor 13
        texto: "A figura se revela como o espírito de um antigo morador, que lhe entrega um amuleto e pede que você desvende o mistério da mansão. O que você faz?",
        opcoes: ["Aceitar o amuleto", "Recusar o amuleto"],
        regras: {
            "aceitar o amuleto": 14,
            "recusar o amuleto": 2
        }
    },
    { //vetor 14
        texto: "Dentro do baú, você encontra antigas relíquias e um mapa da mansão. O que você faz?",
        opcoes: ["Pegar as relíquias", "Estudar o mapa"],
        regras: {
            "pegar as relíquias": 14,
            "estudar o mapa": 14
        }
    },
    { //vetor 15
        texto: "Você descobre o segredo sombrio da mansão: um culto antigo realizava rituais macabros no porão. Com o mistério resolvido, você decide o que fazer com as descobertas. Guardará o segredo para si, ou revelará ao mundo o que realmente aconteceu na mansão? Fim.",
        opcoes: [],
        regras: {}
    }
];


function mostrarTexto(indice) {
    const { texto, opcoes } = historia[indice];
    areaTexto.textContent = texto;
    if (opcoes) {
        areaTexto.textContent += "\n\nOpções:";
        opcoes.forEach(opcao => {
            areaTexto.textContent += `\n- ${opcao}`;
        });
    }
}

function processarComando(comando) {
    comando = comando.trim().toLowerCase();
    const regras = historia[estadoAtual].regras;
    if (regras[comando] !== undefined) {
        estadoAtual = regras[comando];
        if (estadoAtual === 3 || estadoAtual === 7) {
            iniciarLabirinto();
        } else {
            mostrarTexto(estadoAtual);
        }
    } else {
        areaTexto.textContent += "\n\nComando inválido. Tente novamente.";
    }
}

function iniciarLabirinto() {
    mazeContainer.style.display = 'flex';
    criarLabirinto();
    moverJogador(0, 0);
}

function criarLabirinto() {
    mazeContainer.innerHTML = '';
    for (let y = 0; y < 5; y++) {
        const row = document.createElement('div');
        row.classList.add('maze-row');
        for (let x = 0; x < 5; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = x;
            cell.dataset.y = y;
            row.appendChild(cell);
        }
        mazeContainer.appendChild(row);
    }
    adicionarPortas();
}

function adicionarPortas() {
    const doorPositions = [
        { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 1, y: 3 }, { x: 3, y: 3 }
    ];
    doorPositions.forEach(pos => {
        const cell = document.querySelector(`.cell[data-x='${pos.x}'][data-y='${pos.y}']`);
        cell.classList.add('door');
        cell.addEventListener('click', () => mostrarEnigma(pos.x, pos.y));
    });
}

function moverJogador(x, y) {
    if (playerPosition.element) {
        playerPosition.element.classList.remove('player');
    }
    const cell = document.querySelector(`.cell[data-x='${x}'][data-y='${y}']`);
    cell.classList.add('player');
    playerPosition = { x, y, element: cell };
}

function mostrarEnigma(x, y) {
    const index = x + y; // Apenas para simplificar, pode ser qualquer lógica para determinar o enigma
    const puzzleData = puzzles[index % puzzles.length];
    puzzle.textContent = puzzleData.question;
    puzzleContainer.style.display = 'flex';
    puzzleInput.value = '';
    puzzleInput.focus();

    puzzleInput.onkeydown = (event) => {
        if (event.key === "Enter") {
            verificarResposta(puzzleInput.value, puzzleData.answer, x, y);
        }
    };
}

function verificarResposta(resposta, correta, x, y) {
    if (resposta.trim() === correta) {
        puzzleContainer.style.display = 'none';
        moverJogador(x, y);
        areaTexto.textContent = "Resposta correta! Você abriu a porta.";
    } else {
        areaTexto.textContent = "Resposta incorreta. Tente novamente.";
    }
}

inputComando.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        processarComando(inputComando.value);
        inputComando.value = "";
    }
});

mostrarTexto(estadoAtual);
