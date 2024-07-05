const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

inputComando.focus();

const historia = [
    { // 0 estágio 0
        texto: "Thomas, um simples motorista de aplicativo, acordou cedo em uma manhã, como fazia todos os dias. Ele olhou para o relógio e suspirou. A vida como motorista de aplicativo não era exatamente o que ele havia sonhado, mas era o que lhe permitia pagar as contas e manter seu velho Gol rodando. Enquanto tomava café, Thomas pensou nas histórias que havia vivido ao volante. Os passageiros variavam desde executivos apressados até estudantes animados. Cada corrida era uma oportunidade para conhecer alguém novo, ouvir suas histórias e compartilhar um pouco da sua própria vida. Hoje seria mais um dia de viagens pelas ruas movimentadas da cidade. Thomas pegou as chaves do carro, olhou para o retrovisor e sorriu, e começou suas corridas.",
        opcoes: ["1. Começar"],
        regras: {
          "começar": 1, // Ajuste para minúsculas
          "start": 1, // Ajuste para minúsculas
          "": 1,   // Ajuste para minúsculas
          "comecar":1,
          "1": 1
        }
      },
      { // 1 Novo estágio para "Ir para o norte"
        texto: "Primeira corrida aparece a Thomas as 08:02 com o passageiro Juan Carlos",
        opcoes: ["1. Aceitar a corrida", "2. Negar a corrida"],
        regras: {
          "aceitar corrida": 2,
          "aceitar a corrida": 2,
          "aceitar": 2,
          "1" : 2,
          "negar": 4,
          "negar corrida": 4,
          "negar a corrida": 2,
          "2": 4
        }
      },
      { // 2 Novo estágio para "Ir para o norte"
        texto: "Ao aceitar a corrida, o aplicativo mostra a estimativa de tempo da corrida, que é de 0,40 horas. Em qual horário Juan Carlos chegará ao seu destino segundo a previsão?(08:02 horário de saída)",
        opcoes: ["1. 08:32","2. 08:42","3. 08:29","4. 08:26","5. 08:35"],
        regras: {
          "08:32": 3 ,
          "08:42": 3 ,
          "08:29": 3 ,
          "08:26": 5 ,
          "08:35": 3 ,
          "1" : 3,
          "2" : 3,
          "3" : 3,
          "4" : 5,
          "5" : 3,
        }
      },
      { // 3 Novo estágio para "gritar por ajuda"
        texto: "Errado! Juan ve sua resposta e acha que será muito demorado por causa do trânsito, e decide ir correndo por um caminho alternativo",
        opcoes: ["1. Desistir de ser motorista de aplicativo","2. Correr atrás do Juan e obrigar ele a fazer a corrida com você" ],
        regras: {
          "1": 7,
          "desistir": 7,
          "desistir de ser motorista de aplicativo": 7,
          "2": 8,
          "correr": 8,
          "correr atrás do juan e obrigar ele a fazer a corrida com você": 8,
          "correr atras do juan e obrigar ele a fazer a corrida com voce": 8,
        }
      },
      { // 4 Novo estágio para "gritar por ajuda"
        texto: "Você negou a corrida e decide ir dar uma volta de carro pela cidade, sem nenhum passageiro, somente você e sua mente. No meio da viagem, você vê uma bela moça, loira, olhos lindos, cabelo encantador, baixinha... e você se apaixona só de olhar. Então você desce do carro e vai até ela, e pergunta seu nome, ela responde:'Bárbara', e você se apaixona mais ainda, e marca um encontro com ela. No encontro, vocês veem que são feitos um para o outro, e começam a namorar, e ficam juntos para todo sempre.",
        opcoes: ["1. Continuar"],
        regras: {
          "Continuar": 6, // Volta para o primeiro estágio
          "1" :6
        }
      },
      { // 5 Novo estágio para "gritar por ajuda"
        texto: "Correto! Você continua sua corrida normalmente com Juan Carlos. No meio do caminho, você percebe uma obra, que não estava mostrando no GPS, então precisa fazer um desvio, e ir por uma rota que você não conhecia. Mas, no meio dessa nova rota, você não vê a placa de pare, e segue reto, e um carro, que por sorte não estava tão rápido, bate na lateral do seu carro e amassa toda porta. Ninguém fica ferido, mas a porta do carro não fecha mais, então você deixa Juan Carlos ir apé e não cobra a corrida, e decide levar seu carro para o mecânico.",
        opcoes: ["1. Levar o carro para o mecânico"],
        regras: {
          "levar": 'https://senacscs.github.io/t2/silveira/terceiro/jogo_texto',
          "1": 'https://senacscs.github.io/t2/silveira/terceiro/jogo_texto',
          "levar o carro para o mecânico": 'https://senacscs.github.io/t2/silveira/terceiro/jogo_texto'
        }
      },
      { // 6 Novo estágio para "gritar por ajuda"
        texto: "Então, depois de um tempo juntos, você decide voltar a ser uber, e começa suas corridas novamente, e por coincidência você encontra Juan Carlos novamente querendo carona, e dessa vez decide aceitar a corrida com ele.",
        opcoes: ["1. Continuar"],
        regras: {
          "1": 2, // Volta para o primeiro estágio
          "continuar": 2  // Volta para o primeiro estágio
        }
      },
      { // 7 Novo estágio para "gritar por ajuda"
        texto: "Ao desistir, você acorda, e ve que tudo foi apenas um pesadelo. Então você levanta e começa suas corridas.",
        opcoes: ["1. Continuar"],
        regras: {
          "1": 1, // Volta para o primeiro estágio
          "continuar": 1  // Volta para o primeiro estágio
        }
      },
      { // 8 Novo estágio para "gritar por ajuda"
        texto: "Você estaciona seu carro e sai correndo freneticamente atrás de Juan Carlos, que percebe que você está seguindo ele, então começa a correr mais rapidamente. Em uma dobra de esquina, Juan Carlos tropeça e cai, e não se levanta a tempo para continuar fugindo, então você pega ele e amarra seus braços e pernas e tampa sua boca com fita, e leva ele até o carro sem dificuldades, porque aquela zona era deserta, e ninguém vê nada. E você continua sua corrida com Juan Carlos.",
        opcoes: ["1. Continuar"],
        regras: {
          "1": 9, // Volta para o primeiro estágio
          "continuar": 9  // Volta para o primeiro estágio
        }
      },
      { // 9 Novo estágio para "gritar por ajuda"
        texto: "Você continua sua corrida normalmente com Juan Carlos. No meio do caminho, você percebe uma obra, que não estava mostrando no GPS, então precisa fazer um desvio, e ir por uma rota que você não conhecia. Mas, no meio dessa nova rota, você não vê a placa de pare, e segue reto, e um carro, que por sorte não estava tão rápido, bate na lateral do seu carro e amassa toda porta. Ninguém fica ferido, mas a porta do carro não fecha mais, então você deixa Juan Carlos ir apé e não cobra a corrida, e decide levar seu carro para o mecânico.",
        opcoes: ["1. Levar o carro para o mecânico"],
        regras: {
          "levar": 'https://senacscs.github.io/t2/silveira/terceiro/jogo_texto' ,
          "1": 'https://senacscs.github.io/t2/silveira/terceiro/jogo_texto',
          "levar o carro para o mecânico": 'https://senacscs.github.io/t2/silveira/terceiro/jogo_texto'
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
      const destino = regras[comando];
      if(typeof destino === "string" ){
        window.location.href = destino;
      }
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
