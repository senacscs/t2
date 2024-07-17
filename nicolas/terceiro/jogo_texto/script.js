
const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;
inputComando.focus();

const historia = [
    { // 0 estágio 0
        texto: "Nicolas, dono da Farmácia Boa Saúde, sempre se orgulhou do atendimento pessoal que oferecia aos seus clientes. Conhecia a maioria pelo nome e fazia questão de entender suas necessidades. Em um dia comum de trabalho, Nicolas foi surpreendido pela chegada de Augusto, um pedreiro que frequentava a farmácia há anos. Augusto havia contraído uma doença da esposa de um amigo que o havia traído e agora precisava de um remédio específico para se tratar. ",
        opcoes: ["1. Atender rapidamente o Augusto", "2. Perguntar mais detalhes sobre os sintomas", "3. Recomendar diretamente um médico para Augusto"],
        regras: {
          "1": 1, // Ajuste para minúsculas
          "2": 2,   // Ajuste para minúsculas
          "3": 3  // Ajuste para minúsculas
        }
      },
      { // 1 
        texto: "Nicolas percebe a gravidade da situação e decide ajudar rapidamente providenciando o remédio para Augusto. Como dono da farmácia, ele não perde tempo e vai direto para o estoque. Mas o remédio que Augusto precisa é muito caro então Nicolas guarda dentro do cofre da farmácia, para abrir este cofre ele precisa afetuar um cálculo simples: 100 + 20 x 5 = Digite qual seria a resposta da conta ",
        opcoes: ["1. 198", "2. 600", "3. 200","4. 000"],
        regras: {
          "198": 9,  // Índice do próximo estágio (você precisa criar esse estágio)
          "600": 9, // Volta para o primeiro estágio
          "200": 8,
          "000": 9
        }
      },
      { // 2 
        texto: "Nicolas decide fazer mais perguntas para entender melhor a situação.",
        opcoes: ["1. Vender o remédio que Augusto precisa", "2. Sugerir um check-up completo"],
        regras: {
          "1": 1, // Volta para o primeiro estágio
          "2": 3
        }
      },
      { // 3 
        texto: "Augusto percebe a Gravidade do prolema e decide procurar um médico o mais rápido possível após seu atendimento na farmácia",
        opcoes: ["1. Conversar mais com Augusto", "2. Terminar atendimento"],
        regras: {
          "1": 4,  // Índice do próximo estágio (você precisa criar esse estágio)
          "2": 4
        }
      },
      { // 4 
        texto: "Mas no momento em que Nicolas terminava seu atendimento, ele lembra que Augusto mencionou que tentou procurar o remédio no site da farmácia, mas não encontrou nada online. ",
        opcoes: ["1. Pedir dicas de como eu poderia criar o site", "2. Perguntar se Augusto conehece algum desenvolvedor para criar o site"],
        regras: {
          "1": 5 ,// Volta para o primeiro estágio
          "2": 6
        }
      },
      { // 5 
        texto: "Nicolas, sempre atento às necessidades de seus clientes, decidiu buscar a opinião de Augusto sobre a criação de um site para sua farmácia. Com um olhar curioso e um tom de voz amigável: Nicolas se aproximou de Augusto, e perguntou: 'Augusto, você mencionou que tentou procurar informações sobre o remédio no site da farmácia, mas não encontrou nada. Estou pensando em criar um site para facilitar a vida dos nossos clientes. Como você é alguém que já tentou utilizar um serviço online, poderia me dar algumas dicas sobre o que seria mais útil para você e outras pessoas como você?. Logo após a pergunta de Nicolas, Augusto sugere várias dicas para criar o site." ,
        opcoes: ["1. Perguntar se Augusto conehece algum desenvolvedor para criar o site"],
        regras: {
          "1": 6 // Volta para o primeiro estágio
        }
      },
      { // 6 
        texto: "Nicolas perguntou a Augusto se ele conhecia algum desenvolvedor que poderia ajudá-lo a criar o site para sua farmácia. Augusto prontamente respondeu afirmativamente: Sim, conheço um desenvolvedor excelente chamado Raul. Ele tem bastante experiência na criação de sites para pequenas empresas. Nicolas recordou-se de Raul como sendo seu colega de muitos anos atrás: Raul? Acho que me lembro dele. Ele era ótimo em tecnologia, não é? Exatamente, confirmou Augusto: ele é realmente muito bom no que faz. Tenho certeza de que ele pode te ajudar a criar um site profissional para a sua farmácia." ,      
        opcoes: ["1. Ligar para Raul"],
        regras: {
          "1": 7 // Volta para o primeiro estágio
        }
      },
      { // 7 
        texto: "Nicolas, após ouvir os conselhos de Augusto e perceber a importância de um site para a Farmácia Boa Saúde, decidiu seguir em frente com a ideia. Ele contatou Raul, um desenvolvedor web talentoso da cidade, para transformar sua visão em realidade. Raul, com sua habilidade e criatividade, trabalhou arduamente para criar um site que não apenas atendesse às necessidades dos clientes, mas também refletisse a dedicação de Nicolas ao seu negócio." ,      
        opcoes: ["1. Continuar história"],
        regras: {
          "1": 1 // Volta para o primeiro estágio
        }
        
      },
      { // 8 
        texto: "Parabéns Nicolas conseguiu abrir o cofre e entregar o remédio para Augusto, e Nicolas explica toda situação de sua doença," ,      
        opcoes: ["1. Continuar história"],
        regras: {
          "1": 3 // Volta para o primeiro estágio
        }
        
      },
      { // 9 
        texto: "Voce ê errou o código do cofre e acabou matando o Augusto por ficar sem seu remédio" ,      
        opcoes: ["1. Recomeçar história"],
        regras: {
          "1": 1 // Volta para o primeiro estágio
        }
        
      }
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
      const destino = regras[comando];
      if(typeof destino === "string") {
        window.location.href = destino;
      } else {
        areaTexto.textContent += "\n\nComando inválido. Tente novamente.";
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
