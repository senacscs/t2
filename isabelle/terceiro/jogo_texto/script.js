const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
const bau = document.getElementById("bau");
let estadoAtual = 0;

const historia = [
    {
        texto: "Você é um detetive renomado, conhecido por resolver casos intrigantes e misteriosos. Um dia, você recebe uma carta anônima pedindo sua ajuda para desvendar o segredo por trás de uma mansão abandonada na periferia da cidade. Dizem que a mansão é assombrada e que ninguém que entrou nela voltou para contar a história. Sua curiosidade é despertada, e você decide investigar.\n\nVocê chega à mansão ao entardecer. O portão principal está entreaberto, rangendo ao vento. O jardim é coberto por ervas daninhas e a casa, imponente, está envolta em uma névoa espessa. O que você faz?",
        opcoes: ["Entrar pela porta da frente", "Contornar a casa e procurar uma entrada pelos fundos"],
        regras: {
            "entrar pela porta da frente": 1,
            "contornar a casa e procurar uma entrada pelos fundos": 2
        }
    },
    {
        texto: "Ao entrar, você se depara com um hall de entrada grandioso, mas empoeirado. Quadros antigos pendem das paredes e há uma escada imponente à sua frente. O que você faz?",
        opcoes: ["Subir a escada", "Explorar o corredor à direita"],
        regras: {
            "subir a escada": 3,
            "explorar o corredor à direita": 4
        }
    },
    {
        texto: "Você encontra uma porta de serviço destrancada. Ao entrar, se vê em uma cozinha antiga e mal iluminada. Um forte cheiro de mofo e comida estragada invade suas narinas. O que você faz?",
        opcoes: ["Investigar a despensa", "Seguir pelo corredor à esquerda"],
        regras: {
            "investigar a despensa": 5,
            "seguir pelo corredor à esquerda": 6
        }
    },
    {
        texto: "No topo da escada, há um longo corredor com várias portas. Um leve gemido pode ser ouvido vindo de uma das portas no fim do corredor. O que você faz?",
        opcoes: ["Abrir a porta de onde vem o som", "Explorar os quartos ao longo do corredor"],
        regras: {
            "abrir a porta de onde vem o som": 7,
            "explorar os quartos ao longo do corredor": 8
        }
    },
    {
        texto: "Você encontra um velho diário com uma capa desgastada. O que você faz?",
        opcoes: ["Ler o diário", "Guardar o diário e sair"],
        regras: {
            "ler o diário": 9,
            "guardar o diário e sair": 10
        }
    },
    {
        texto: "Você entra na despensa e encontra um velho diário com uma capa desgastada. O que você faz?",
        opcoes: ["Ler o diário", "Sair da despensa"],
        regras: {
            "ler o diário": 9,
            "sair da despensa": 2
        }
    },
    {
        texto: "O corredor escuro leva a um porão. Há uma escada que desce para o porão, onde você pode ouvir o som de água pingando. O que você faz?",
        opcoes: ["Descer para o porão", "Voltar para a cozinha"],
        regras: {
            "descer para o porão": 11,
            "voltar para a cozinha": 2
        }
    },
    {
        texto: "Você encontra um quarto escuro com uma janela entreaberta. Uma figura sombria está sentada em uma cadeira, murmurando palavras incompreensíveis. O que você faz?",
        opcoes: ["Aproximar-se da figura", "Sair do quarto"],
        regras: {
            "aproximar-se da figura": 12,
            "sair do quarto": 2
        }
    },
    {
        texto: "Os quartos estão cheios de móveis cobertos por lençóis brancos. Em um deles, você encontra um baú trancado. O que você faz?",
        opcoes: ["Forçar o baú", "Sair do quarto"],
        regras: {
            "forçar o baú": 13,
            "sair do quarto": 2
        }
    },
    {
        texto: "O diário revela segredos obscuros sobre os antigos moradores da mansão, mencionando rituais e acontecimentos macabros. Você sente uma presença estranha ao seu redor, como se estivesse sendo observado. O que você faz?",
        opcoes: ["Continuar lendo o diário", "Sair da mansão"],
        regras: {
            "continuar lendo o diário": 14,
            "sair da mansão": 10
        }
    },
    {
        texto: "Você decide sair da mansão, levando consigo as lembranças do que descobriu. Fim.",
        opcoes: [],
        regras: {}
    },
    {
        texto: "Você desce para o porão e encontra um altar antigo coberto de velas derretidas e símbolos estranhos. Você sente uma presença assustadora ao seu redor. O que você faz?",
        opcoes: ["Investigar o altar", "Sair do porão"],
        regras: {
            "investigar o altar": 14,
            "sair do porão": 2
        }
    },
    {
        texto: "A figura se revela como o espírito de um antigo morador, que lhe entrega um amuleto e pede que você desvende o mistério da mansão. O que você faz?",
        opcoes: ["Aceitar o amuleto", "Recusar o amuleto"],
        regras: {
            "aceitar o amuleto": 14,
            "recusar o amuleto": 2
        }
    },
    {
        texto: "Dentro do baú, você encontra antigas relíquias e um mapa da mansão. O que você faz?",
        opcoes: ["Pegar as relíquias", "Estudar o mapa"],
        regras: {
            "pegar as relíquias": 14,
            "estudar o mapa": 14
        }
    },
    {
        texto: "Você descobre o segredo sombrio da mansão: um culto antigo realizava rituais macabros no porão. Com o mistério resolvido, você decide o que fazer com as descobertas. Guardará o segredo para si, ou revelará ao mundo o que realmente aconteceu na mansão? Fim.",
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
        
        if (estadoAtual === 13) { // Verifica se a fase é a do baú
            mostrarAnimacaoBau();
        }
    } else {
        areaTexto.textContent += "\n\nComando inválido. Tente novamente.";
    }
}

function mostrarAnimacaoBau() {
    bau.style.display = 'block';
    bau.classList.add('animacao-bau');
    setTimeout(() => {
        bau.classList.add('aberto');
    }, 2000); // Tempo para a animação do baú abrir
}

inputComando.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        processarComando(inputComando.value.toLowerCase()); // Converte para minúsculas
        inputComando.value = "";
    }
});

mostrarTexto(estadoAtual);
