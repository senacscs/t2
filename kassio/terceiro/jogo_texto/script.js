const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

const historia = [
    { // 0
        texto: "Você está em uma cidade futurística. O que você faz?",
        opcoes: [
            "Explorar a cidade"
        ],
        regras: {
            "explorar a cidade": 1 // Leva ao estágio 1
        }
    },
    { // 1
        texto: "Você encontra um beco escuro. O que você faz?",
        opcoes: ["Entrar no beco", "Voltar para a cidade"],
        regras: {
            "entrar no beco": 4,
            "voltar para a cidade": 0
        }
    },
    { // 2
        texto: "Você encontra um mercado movimentado. O que você faz?",
        opcoes: ["Comprar itens", "Voltar para a cidade"],
        regras: {
            "comprar itens": 6,
            "voltar para a cidade": 0
        }
    },
    { // 3
        texto: "Você encontra uma missão interessante. O que você faz?",
        opcoes: ["Aceitar a missão", "Recusar a missão"],
        regras: {
            "aceitar a missão": 7,
            "recusar a missão": 0
        }
    },
    { // 4
        texto: "Você encontra um beco escuro e uma caixa misteriosa. O que você faz?",
        opcoes: ["Abrir a caixa", "Voltar para a cidade"],
        regras: {
            "abrir a caixa": 5,
            "voltar para a cidade": 0
        }
    },
    { // 5 - Adiciona a questão matemática
        texto: "Para continuar, resolva a seguinte questão: Qual é o resto da divisão do polinômio x² - 4x + 3 por (x - 1)?",
        opcoes: ["Digite a resposta correta"],
        regras: {
            "2": 6, // Resposta correta (resto da divisão)
            "qualquer outra coisa": 0 // Resposta incorreta volta ao início
        }
    },
    { // 6
        texto: "Parabéns! Você resolveu a equação corretamente e encontrou um mapa antigo. O que você faz?",
        opcoes: ["Seguir o mapa", "Voltar para a cidade"],
        regras: {
            "seguir o mapa": 7,
            "voltar para a cidade": 0
        }
    },
    { // 7
        texto: "Você segue o mapa e encontra uma caverna misteriosa. O que você faz?",
        opcoes: ["Entrar na caverna", "Voltar para a cidade"],
        regras: {
            "entrar na caverna": 8,
            "voltar para a cidade": 0
        }
    },
    { // 8
        texto: "Dentro da caverna, você encontra um artefato poderoso. O que você faz?",
        opcoes: ["Pegar o artefato", "Voltar para a cidade"],
        regras: {
            "pegar o artefato": 9,
            "voltar para a cidade": 0
        }
    },
    { // 9
        texto: "Você voltou para a cidade com o artefato. Parabéns por completar sua jornada!",
        opcoes: ["Recomeçar"],
        regras: {
            "recomeçar": 0
        }
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
    comando = comando.trim().toLowerCase(); // Ajuste na entrada do comando
    const regras = historia[estadoAtual].regras;

    console.log("Comando digitado:", comando); // Depuração
    console.log("Regras:", regras); // Depuração

    if (estadoAtual === 5 && comando === "2") { // Verifica se está na etapa da equação e a resposta correta é "2"
        estadoAtual = 6;
        mostrarTexto(estadoAtual);
    } else if (comando in regras) {
        estadoAtual = regras[comando];
        mostrarTexto(estadoAtual);
    } else {
        areaTexto.textContent += "\n\nComando inválido ou resposta errada. Tente novamente.";
        estadoAtual = 0; // Volta ao início em caso de erro
        mostrarTexto(estadoAtual);
    }
}

inputComando.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        processarComando(inputComando.value.toLowerCase()); // Converte para minúsculas
        inputComando.value = "";
    }
});

mostrarTexto(estadoAtual);
