const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
const mazeContainer = document.getElementById("maze-container");
const puzzleContainer = document.getElementById("puzzle-container");
const puzzle = document.getElementById("puzzle");
const puzzleInput = document.getElementById("puzzle-input");

let estadoAtual = 0;
let playerPosition = { x: 0, y: 0 };

const historia = [
    { // Fase 0: Introdução
        texto: "Você é um detetive renomado, conhecido por resolver casos intrigantes e misteriosos. Um dia, você recebe uma carta anônima pedindo sua ajuda para desvendar o segredo por trás de uma mansão abandonada na periferia da cidade. Dizem que a mansão é assombrada e que ninguém que entrou nela voltou para contar a história. Sua curiosidade é despertada, e você decide investigar.\n\nVocê chega à mansão ao entardecer. O portão principal está entreaberto, rangendo ao vento. O jardim é coberto por ervas daninhas e a casa, imponente, está envolta em uma névoa espessa. O que você faz?",
        opcoes: ["1 - Entrar pela porta da frente", "2 - Contornar a casa e procurar uma entrada pelos fundos"],
        regras: {
            "1": 1,
            "2": 2,
        }
    },
    { // Fase 1: Hall de Entrada
        texto: "Ao entrar, você se depara com um hall de entrada grandioso, mas há algo assustador... Quadros antigos que dão a impressão que estão a te olhar conforme você anda. O que você faz?",
        opcoes: ["1 - Começar a correr e subir as escadas", "2 - Explorar o corredor à direita"],
        regras: {
            "1": 3,
            "2": 4
        }
    },
    { // Fase 2: Entrada pelos Fundos
        texto: "Ao contornar a casa, você encontra uma janela quebrada que dá acesso à cozinha. O que você faz?",
        opcoes: ["1 - Entrar pela janela", "2 - Continuar contornando a casa"],
        regras: {
            "1": 5,
            "2": 6
        }
    },
    { // Fase 3: No Topo das Escadas
        texto: "No topo da escada, há um longo corredor com várias portas. Um leve gemido pode ser ouvido vindo de uma das portas no fim do corredor. O que você faz?",
        opcoes: ["1 - Abrir a porta de onde vem o som", "2 - Explorar os quartos ao longo do corredor"],
        regras: {
            "1": 7,
            "2": 8
        }
    },
    { // Fase 4: Corredor à Direita
        texto: "Ao explorar o corredor você sente um cheiro forte como se fosse cheiro de decomposição. De tão curioso(a), você insiste em descobrir de onde está vindo esse cheiro. O que você faz?",
        opcoes: ["1 - Investigar a despensa", "2 - Deixar para o próximo espertinho e curioso tentar a sorte... kk"],
        regras: {
            "1": 9,
            "2": 10
        }
    },
    { // Fase 5: Cozinha pela Janela
        texto: "Você entra na cozinha e encontra uma porta de serviço destrancada. Ao entrar, você se vê em uma cozinha antiga e mal iluminada. Um forte cheiro de mofo e comida estragada invade suas narinas. O que você faz?",
        opcoes: ["1 - Investigar a despensa", "2 - Seguir pelo corredor à esquerda"],
        regras: {
            "1": 9,
            "2": 10
        }
    },
    { // Fase 6: Contornando a Casa
        texto: "Você continua contornando a casa e encontra uma porta dos fundos destrancada. Ao entrar, você se depara com um porão escuro e úmido. O que você faz?",
        opcoes: ["1 - Descer para o porão", "2 - Voltar para a cozinha"],
        regras: {
            "1": 11,
            "2": 10
        }
    },
    { // Fase 7: Quarto com Figura Sombria
        texto: "Você abre a porta de onde vem o som e encontra um quarto escuro com uma janela entreaberta. Uma figura sombria está em pé, murmurando palavras incompreensíveis. O que você faz?",
        opcoes: ["1 - Aproximar-se da figura", "2 - Sair do quarto"],
        regras: {
            "1": 12,
            "2": 8
        }
    },
    { // Fase 8: Quartos com Lençóis Brancos
        texto: "Os quartos estão cheios de móveis cobertos por lençóis brancos. Em um deles, você encontra um baú trancado. O que você faz?",
        opcoes: ["1 - Forçar o baú", "2 - Sair do quarto"],
        regras: {
            "1": 13,
            "2": 3
        }
    },
    { // Fase 9: Pessoa Caída na Despensa
        texto: "Você entra na despensa e encontra uma pessoa no chão (VIVA) com muito sangue para todos os lados. Você olha para ela e percebe que ela está falando algo. Mas como você não conseguiu escutar o que ela disse, você coloca o ouvido bem perto da boca dela... até que ela diz que tem uma pessoa que está seguindo ela o tempo inteiro. O que você faz?",
        opcoes: ["1 - Sair correndo da casa e chamar a polícia", "2 - Continuar investigando a mansão"],
        regras: {
            "1": 16,
            "2": 17
        }
    },
    { // Fase 10: Corredor com Porta para o Porão
        texto: "Você segue pelo corredor e encontra uma porta que leva a um porão. Há uma escada que desce para o porão, onde você pode ouvir o som de água pingando. O que você faz?",
        opcoes: ["1 - Descer para o porão", "2 - Voltar para a cozinha"],
        regras: {
            "1": 11,
            "2": 5
        }
    },
    { // Fase 11: Altar no Porão
        texto: "Você desce para o porão e encontra um altar antigo coberto de velas derretidas e símbolos estranhos. Você sente uma presença assustadora ao seu redor. O que você faz?",
        opcoes: ["1 - Investigar o altar", "2 - Sair do porão"],
        regras: {
            "1": 15,
            "2": 10
        }
    },
    { // Fase 12: Espírito com Amuleto
        texto: "A figura se revela como o espírito de um antigo morador, que lhe entrega um amuleto e pede que você desvende o mistério da mansão. O que você faz?",
        opcoes: ["1 - Aceitar o amuleto", "2 - Recusar o amuleto"],
        regras: {
            "1": 15,
            "2": 7
        }
    },
    { // Fase 13: Enigma do Baú
        texto: "QUER ABRIR O BAÚ?? KKKKKK Então resolva: 1 + 4 = 5, 2 + 5 = 12, 3 + 6 = 21, 8 + 11 = ??",
        opcoes: ["40", "19"],
        regras: {
            "40": 14,
            "19": 8
        }
    },
    { // Fase 14: Relíquias e Mapa
        texto: "Dentro do baú, você encontra antigas relíquias e um mapa da mansão. O que você faz?",
        opcoes: ["1 - Pegar as relíquias", "2 - Estudar o mapa"],
        regras: {
            "1": 15,
            "2": 15
        }
    },
    { // Fase 15: Conclusão
        texto: "Você descobre o segredo sombrio da mansão: um culto antigo realizava rituais macabros no porão. Com o mistério resolvido, você decide o que fazer com as descobertas. Guardará o segredo para si, ou revelará ao mundo o que realmente aconteceu na mansão? Fim.",
        opcoes: ["1 - Recomeçar"],
        regras: {
            "1": 0,
        }
    },
    { // Fase 16: Chamando a Polícia
        texto: "Você sai correndo da casa e chama a polícia. Eles chegam rapidamente e invadem a mansão. A pessoa ferida é resgatada e levada para o hospital. Você se sente aliviado, mas o mistério da mansão permanece. Fim.",
        opcoes: ["1 - Recomeçar"],
        regras: {
            "1": 0,
        }
    },
    { // Fase 17: Continuando a Investigação
        texto: "Você decide continuar investigando a mansão. Enquanto explora os corredores, você sente uma presença constante atrás de você. O que você faz?",
        opcoes: ["1 - Confrontar a presença", "2 - Tentar escapar pela janela mais próxima"],
        regras: {
            "1": 18,
            "2": 19
        }
    },
    { // Fase 18: Enfrentando a Presença
        texto: "Você se vira rapidamente e se depara com uma figura encapuzada. Antes que você possa reagir, a figura desaparece nas sombras, deixando apenas um bilhete no chão. O que você faz?",
        opcoes: ["1 - Ler o bilhete", "2 - Ignorar o bilhete e continuar investigando"],
        regras: {
            "1": 20,
            "2": 21
        }
    },
    { // Fase 19: Tentando Escapar
        texto: "Você corre para a janela mais próxima e a abre com dificuldade. Ao pular para fora, você sente uma dor aguda no tornozelo, mas continua correndo até se sentir seguro. O mistério da mansão permanece sem solução. Fim.",
        opcoes: ["1 - Recomeçar"],
        regras: {
            "1": 0,
        }
    },
    { // Fase 20: Lendo o Bilhete
        texto: "O bilhete contém um enigma: 'Eu não tenho boca, mas falo. Não tenho asas, mas voo. O que sou eu?' O que você faz?",
        opcoes: ["1 - Responder 'O Vento'", "2 - Responder 'Um Fantasma'"],
        regras: {
            "1": 22,
            "2": 21
        }
    },
    { // Fase 21: Ignorando o Bilhete
        texto: "Você decide ignorar o bilhete e continuar investigando. Enquanto anda pelo corredor, você sente a presença novamente. O que você faz?",
        opcoes: ["1 - Confrontar a presença", "2 - Tentar escapar pela janela mais próxima"],
        regras: {
            "1": 18,
            "2": 19
        }
    },
    { // Fase 22: Resolvendo o Enigma do Bilhete
        texto: "Ao responder 'O Vento', você sente uma brisa leve passar por você, levando embora a sensação de ser observado. Você continua investigando com uma nova determinação. O que você faz?",
        opcoes: ["1 - Explorar o porão", "2 - Investigar o altar"],
        regras: {
            "1": 11,
            "2": 18
        }
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
        mostrarTexto(estadoAtual);
        if (estadoAtual === 17 || estadoAtual === 18 || estadoAtual === 21) {
            document.body.classList.add('blinking');
            setTimeout(() => document.body.classList.remove('blinking'), 1000);
        }
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
