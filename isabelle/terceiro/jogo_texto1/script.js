const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
const videoContainer = document.getElementById("video-container");
const video = document.getElementById("video");
let estadoAtual = 0;

const historia = [
    {
        texto: "Você é um detetive renomado, conhecido por resolver casos intrigantes e misteriosos. Um dia, você recebe uma carta anônima pedindo sua ajuda para desvendar o segredo por trás de uma mansão abandonada na periferia da cidade. Dizem que a mansão é assombrada e que ninguém que entrou nela voltou para contar a história. Sua curiosidade é despertada, e você decide investigar.\n\nVocê chega à mansão ao entardecer. O portão principal está entreaberto, rangendo ao vento. O jardim é coberto por ervas daninhas e a casa, imponente, está envolta em uma névoa espessa. O que você faz?",
        opcoes: ["Entrar pela porta da frente", "Contornar a casa e procurar uma entrada pelos fundos"],
        regras: {
            "entrar pela porta da frente": 1,
            "contornar a casa e procurar uma entrada pelos fundos": 2
        },
        video: "https://videocdn.cdnpk.net/videos/8e75fb52-03cd-41cb-ba8c-f41957ba2146/horizontal/previews/clear/small.mp4?token=exp=1720537977~hmac=abf69b787a38c18cdc9c4ffd351a5448e1e96cb4ba30cad8f9619b1f23acc150"
    },
    {
        texto: "Ao entrar, você se depara com um hall de entrada grandioso, mas empoeirado. Quadros antigos pendem das paredes e há uma escada imponente à sua frente. O que você faz?",
        opcoes: ["Subir a escada", "Explorar o corredor à direita"],
        regras: {
            "subir a escada": 3,
            "explorar o corredor à direita": 4
        },
        video: "https://videocdn.cdnpk.net/videos/398c8d0a-1dae-46db-b74b-00e5a85341bf/horizontal/previews/clear/small.mp4?token=exp=1720537897~hmac=eb5b3d25108d426e45b07fc678d694794e703ba3b394fa4b50c55717a91fb2c1"
    },
    {
        texto: "Você encontra uma porta de serviço destrancada. Ao entrar, se vê em uma cozinha antiga e mal iluminada. Um forte cheiro de mofo e comida estragada invade suas narinas. O que você faz?",
        opcoes: ["Investigar a despensa", "Seguir pelo corredor à esquerda"],
        regras: {
            "investigar a despensa": 5,
            "seguir pelo corredor à esquerda": 6
        },
        video: "https://videocdn.cdnpk.net/videos/1f4d5166-5d90-42ac-a614-526182469150/horizontal/previews/clear/small.mp4?token=exp=1720537977~hmac=6ea2f51bbbe689dea02da64893dc71432ee76c674a94c46774916956ef6475f3"
    },
    {
        texto: "No topo da escada, há um longo corredor com várias portas. Um leve gemido pode ser ouvido vindo de uma das portas no fim do corredor. O que você faz?",
        opcoes: ["Abrir a porta de onde vem o som", "Explorar os quartos ao longo do corredor"],
        regras: {
            "abrir a porta de onde vem o som": 7,
            "explorar os quartos ao longo do corredor": 8
        },
        video: "https://videocdn.cdnpk.net/videos/edf07319-5b29-4e9e-a928-0240af62c599/horizontal/previews/clear/small.mp4?token=exp=1720537834~hmac=7841d5d139c91dbe239f0a2b9bad3e0d624cd983de9a8c6e9adf3248140e3eb1"
    },
    {
        texto: "Você encontra um velho diário com uma capa desgastada. O que você faz?",
        opcoes: ["Ler o diário", "Guardar o diário e sair"],
        regras: {
            "ler o diário": 9,
            "guardar o diário e sair": 10
        },
        video: "https://videocdn.cdnpk.net/videos/edf07319-5b29-4e9e-a928-0240af62c599/horizontal/previews/clear/small.mp4?token=exp=1720537834~hmac=7841d5d139c91dbe239f0a2b9bad3e0d624cd983de9a8c6e9adf3248140e3eb1"
    },
    {
        texto: "Você entra na despensa e encontra um velho diário com uma capa desgastada. O que você faz?",
        opcoes: ["Ler o diário", "Sair da despensa"],
        regras: {
            "ler o diário": 9,
            "sair da despensa": 2
        },
        video: "https://videocdn.cdnpk.net/videos/790a985d-cedb-4ad3-91b1-a0da25cd266b/horizontal/previews/clear/small.mp4?token=exp=1720538948~hmac=980889a96ed11e68672853d494a006491e0c3bcc30e4da06a58eb33bdd7a34c6"
    },
    {
        texto: "O corredor escuro leva a um porão. Há uma escada que desce para o porão, onde você pode ouvir o som de água pingando. O que você faz?",
        opcoes: ["Descer para o porão", "Voltar para a cozinha"],
        regras: {
            "descer para o porão": 11,
            "voltar para a cozinha": 2
        },
        video: "https://videocdn.cdnpk.net/videos/96b44b96-e1a3-437b-ba33-337eeb71440d/horizontal/previews/clear/small.mp4?token=exp=1720538771~hmac=42ec3fc7eaa22507aaf357dd99171481888634df0084e682e73eb7886d11f71a"
    },
    {
        texto: "Você encontra um quarto escuro com uma janela entreaberta. Uma figura sombria está em pé, murmurando palavras incompreensíveis. O que você faz?",
        opcoes: ["Aproximar-se da figura", "Sair do quarto"],
        regras: {
            "aproximar-se da figura": 12,
            "sair do quarto": 2
        },
        video: "https://videocdn.cdnpk.net/videos/8739886f-ca80-4e0b-b1de-e656554f1314/horizontal/previews/clear/small.mp4?token=exp=1720538552~hmac=5ce9c28ea55c14a054804f16b71d902b07b5122accb5e812dcc42153a83d2b5a"
    },
    {
        texto: "Os quartos estão cheios de móveis cobertos por lençóis brancos. Em um deles, você encontra um baú trancado. O que você faz?",
        opcoes: ["Forçar o baú", "Sair do quarto"],
        regras: {
            "forçar o baú": 13,
            "sair do quarto": 2
        },
        video: "https://example.com/video_abrindo_bau.mp4"
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
    const { texto, opcoes, video } = historia[indice];
    areaTexto.textContent = texto;
    if (opcoes) {
        areaTexto.textContent += "\n\nOpções:";
        opcoes.forEach(opcao => {
            areaTexto.textContent += `\n- ${opcao}`;
        });
    }
    if (video) {
        videoContainer.style.display = 'flex';
        video.src = video;
    } else {
        videoContainer.style.display = 'none';
        video.src = '';
    }
}

function processarComando(comando) {
    comando = comando.trim().toLowerCase();
    const regras = historia[estadoAtual].regras;
    if (regras[comando] !== undefined) {
        estadoAtual = regras[comando];
        mostrarTexto(estadoAtual);
    } else {
        areaTexto.textContent += "\n\nComando inválido. Tente novamente.";
    }
}

inputComando.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        processarComando(inputComando.value);
        inputComando.value = "";
    }
});

mostrarTexto(estadoAtual);