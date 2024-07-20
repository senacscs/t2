const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

const historia = [
    { // 0 estágio 0
        texto: "Você encosta no pólen de uma flor e vai parar na entrada de um bosque. Você encontra uma fada e ela te mostra dois caminhos, para a direita um caminho de pedras com vagalumes iluminando, para a esquerda um caminho de terra com flores cintilantes. Por qual caminho você prefere seguir?",
        opcoes: ["Direita", "Esquerda"],
        regras: {
          "direita": 1, 
          "esquerda": 2,  
        }
      },
    { // 1 Novo estágio para "direita"
        texto: "você caminha com um pouco de dificuldade pois os vagalumes não iluminam o suficiente para enxergar os defeitos das pedras do caminho. No final encontra uma árvore com frutos, deseja comer?",
        opcoes: ["Sim", "Não"],
        regras: {
          "sim": 3,  
          "não": 4, 
        }
      },
    { // 2 Novo estágio para "esquerda"
        texto: "Com um pouco de medo, você passa pelo caminho sem muitas dificuldades. Porém demora mais do que o esperado e está com fome, no final do caminho você encontra uma árvore com frutos dourados, deseja comer? ",
        opcoes: ["Sim", "Não"],
        regras: {
          "sim": 3,  
          "não": 4, 
        }
      },
    { // 3 Novo estágio para "sim"
        texto: "Os frutos foram enfeitiçados pela fada e você morreu.",
        opcoes: ["Voltar para o início"],
        regras: {
          "voltar para o início": 0, 
        }
      },
    {// 4 Novo estágio para "não"
      texto: "Você não come, passa pela árvore e se depara com um enorme animal, já que está com muita fome não tem forças para lutar, então você tenta fugir para uma caverna, porém para entrar, a fada te da um enigma para ser resolvido. Você prefere:",
      opcoes: ["Desistir", "Fazer o enigma"],
      regras: {
        "desistir": 5, 
        "fazer o enigma": 6,
        }
      },
    {// 5 Novo estágio para "Desistir"
      texto: "Você desistiu e entregou sua vida para o animal.",
      opcoes: ["Voltar para o início"],
      regras: {
        "voltar para o início": 0, 
        }
      },
    {// 6 Novo estágio para "Fazer o enigma"
      texto: "enigma pipipipopopo",
      opcoes: ["r1", "r2", "r3"],
      regras: {
        "r1": 7, 
        "r2": 8,
        "r3": 7,
        }
      },
    {// 7 Novo estágio para "errado R1 R3"
      texto: "Você não conseguiu resolver e foi atacado pelo animal.",
      opcoes: ["Voltar para o início"],
      regras: {
        "voltar para o início": 0,
        }
      },
    {// 8 Novo estágio para "Certo R2"
      texto: "Parabéns, você acertou!!",
      opcoes: ["Entrar na caverna"],
      regras: {
        "entrar na caverna": 9,
        }
      },
    {// 9 Novo estágio para "entrar na caverna"
      texto: "Seguindo a caverna, você encontra a saída e se depara com uma casinha iluminada e bonita, então decide procurar alimentos lá. Você prefere: ",
      opcoes: ["Olhar pela janela e ver oque tem la dentro", "Procurar alimentos na horta atrás da casa"],
      regras: {
        "olhar pela janela e ver oque tem la dentro": 11,
        "procurar alimentos na horta atrás da casa": 10,
        }
      },
    {// 10 Novo estágio para "procurar alimentos na horta atrás da casa"
      texto: "Ao chegar na horta uma senhorinha de cabelos rosa viu você. Você até tentou correr, mas ela atingiu você com uma pá e você morreu. ",
      opcoes: ["Voltar para o início"],
      regras: {
        "voltar para o início": 0,
        }
      },
    {// 11 Novo estágio para "olhar pela janela e ver oque tem la dentro"
      texto: "Você achou um bolo recém assado em cima da mesa da cozinha, estende o braço e consegue pegar. Ao lado da casa você enxerga uma trilha e decide segui-la, no final encontra um rio e do outro lado o seu destino! Porém para atravessar o rio você precisa escolher entre passar pela ponte de madeira, a qual estão apodrecendo, por uma ponte de cordas, parece ser bem-feita porém é bamba, ou nadar até o outro lado. ",
      opcoes: ["Madeira", "Corda", "Nadando"],
      regras: {
        "madeira": 12,
        "corda": 14,
        "nadando": 13,
        }
      },
    {// 12 Novo estágio para "madeira"
      texto: "A madeira da ponte é das arvores magicas, então elas não apodrecem. Porém no final da ponte você tropeça e cai no rio.",
      opcoes: ["Voltar para o início"],
      regras: {
        "voltar para o início": 0,
        }
      },
    {// 13 Novo estágio para "nadando"
      texto: "Você é louco? Não sabe nadar e morreu bobão.",
      opcoes: ["Voltar para o início"],
      regras: {
        "voltar para o início": 0,
        }
      },
    {// 14 Novo estágio para "corda"
      texto: "Você passou correndo e chegou!",
      opcoes: ["Voltar para o início"],
      regras: {
        "voltar para o início": 0,
        }
      },
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
