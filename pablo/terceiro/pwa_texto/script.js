const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

inputComando.focus();

const historia = [
    { // 0: O Santuário Esquecido
        texto: "Você chega ao Santuário Esquecido. O que você faz?",
        opcoes: ["Explorar o santuário", "Descansar no santuário"],
        regras: {
            "1": 1,
            "2": 2,

        }
    },
    { // 1: Explorar o Santuário
        texto: "Você encontra uma inscrição antiga no santuário que revela um segredo. O que você faz?",
        opcoes: ["Investigar o segredo", "Ignorar e continuar"],
        regras: {
            "1": 3,
            "2": 4
        }
    },
    { // 2: Descansar no Santuário
        texto: "Você descansa e recupera suas forças, mas perde tempo valioso. O que você faz?",
        opcoes: ["Explorar o santuário", "Seguir em frente"],
        regras: {
            "1": 1,
            "2": 4
        }
    },
    { // 3: Investigar o Segredo
        texto: "O segredo revela um portal oculto para outra dimensão. O que você faz?",
        opcoes: ["Entrar no portal", "Ignorar o portal"],
        regras: {
            "1": 13,  // Altera para 13, que é o enigma
            "2": 4
        }
    },
    { // 4: Seguir em Frente
        texto: "Você continua sua jornada e encontra uma bifurcação no caminho. O que você faz?",
        opcoes: ["Seguir pela esquerda", "Seguir pela direita"],
        regras: {
            "1": 6,
            "2": 7
        }
    },
    { // 5: Entrar no Portal
        texto: "Parabéns você acertou o enigma. Você entra no portal e é transportado para um mundo estranho cheio de criaturas mágicas. O que você faz?",
        opcoes: ["Explorar o novo mundo", "Procurar um caminho de volta"],
        regras: {
            "1": 8,
            "2": 9
        }
    },
    { // 6: Seguir pela Esquerda
        texto: "Você encontra um lago encantado com propriedades curativas. O que você faz?",
        opcoes: ["Beber a água", "Continuar sem beber"],
        regras: {
            "1": 10,
            "2": 11
        }
    },
    { // 7: Seguir pela Direita
        texto: "Você encontra um campo de batalha antigo cheio de armas e armaduras. O que você faz?",
        opcoes: ["Coletar armas", "Seguir em frente"],
        regras: {
            "1": 12,
            "2": 11
        }
    },
    { // 8: Explorar o Novo Mundo
        texto: "Você encontra um aliado poderoso que se junta a você. Sua jornada se torna mais fácil.",
        opcoes: ["Continuar"],
        regras: {
            "1": 11
        }
    },
    { // 9: Procurar um Caminho de Volta
        texto: "Você encontra um portal de retorno e volta para seu mundo original, mas com novas habilidades.",
        opcoes: ["Continuar"],
        regras: {
            "1": 11
        }
    },
    { // 10: Beber a Água
        texto: "A água cura todas as suas feridas e você se sente revitalizado.",
        opcoes: ["Continuar"],
        regras: {
            "1": 11
        }
    },
    { // 11: Continuar a Jornada
        texto: "Você continua sua jornada e enfrenta novos desafios com maior força e sabedoria.",
        opcoes: ["Continuar"],
        regras: {
            "1": 12
        }
    },
    { // 12: Fim da Parte 3
        texto: "Fim da Parte 3: O Santuário Esquecido. Parabéns você passou para próxima parte.",
        opcoes: ["Recomeçar", "Ir para parte 4"],
        regras: {
            "1": 0,
            "2": "https://senacscs.github.io/t2/eduardo/terceiro/pwa_texto"
        }
    },
    { // 13: Enigma Matemático
        texto: "Para passar pelo portal, você deve resolver este enigma matemático:\nNa sequência de números primos fornecida (13, 17, 19, 23, 29, ...), o próximo número primo é?",
        regras: {
            "31": 5  // Supondo que a resposta correta leva ao estado 5 (Entrar no Portal)
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
        areaTexto.textContent += "\n\nResposta errada. Tente novamente.";
    }
}


inputComando.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        processarComando(inputComando.value.toLowerCase()); // Converte para minúsculas
        inputComando.value = "";
    }
});

mostrarTexto(estadoAtual);
