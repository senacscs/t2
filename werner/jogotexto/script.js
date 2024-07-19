const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

inputComando.focus();

const historia = [
  { // 0 estágio 0
    texto: "Quem é voce?",
    opcoes: ["Marco", "Aurelio", "Eliot"],
    regras: {
      "marco": 1, // Ajuste para minúsculas
      "1": 1, // Ajuste para minúsculas
      "aurelio": 1,   // Ajuste para minúsculas
      "2": 1, // Ajuste para minúsculas
      "eliot": 1,  // Ajuste para minúsculas
      "3": 1

    }
  },
  { // 1 - NOME
    texto: "Você acorda em uma cidade na superfície uma grande cidade com varios prédios ao estilo steampunk, ela aparenta ser mágica",
    opcoes: ["Explorar a cidade", "Voltar a dormir"],
    regras: {
      "Exlorar a cidade": 2,
      "1": 2, // Índice do próximo estágio (você precisa criar esse estágio)
      "Voltar a dormir": 0,
      "2": 0
    }
  },
  { // 2 Novo estágio para "explorar a cidade"
    texto: "Você entra no centro da cidade, você está com dor de cabeça e não lembra de muita coisa, apenas que você precisa ir ao ponto de coleta de missão para saber quem será o seu alvo",
    opcoes: ["Ir ao ponto de coleta", "Explorar mais o centro da cidade"],
    regras: {
      "Ir ao ponto de coleta": 4,
      "1": 4,
      "Explorar mais o centro da cidade": 3,
      "2": 3
    }
  },

  { // 3 Novo estágio para
    texto: "Você anda mais pela cidade, se depara com alguns moradores que te cumprimentam até chegar a um guarda que te para e te pergunta se você já fez seu serviço diário, você sabe que se mentir pode acabar se prejudicando então fala a verdade e ele te manda ir para o ponto de coleta.",
    opcoes: ["Ir ao ponto de coleta", "Ignorar e ameaçar o guarda"],
    regras: {
      "Ir ao ponto de coleta": 4, // Voltar para o ponto
      "1": 4,
      "Ignorar e ameaçar o guarda": 6,
      "2": 6
    }
  },

  { // 4 Novo estágio para "ir para o ponto de coleta"
    texto: "Você chega ao ponto de coleta e você pega o papel com o rosto do alvo, é um bardo cujo o papel revela a localização em um bar perto do centro da cidade",
    opcoes: ["Seguir para o bar"],
    regras: {
      "Seguir para o bar": 5,
      "1": 5 
    }
  },

  { // 5 
    texto: "Você entra no bar e se depara com o alvo tocando uma bela música para diversas pessoas totalmente bêbadas.enquanto você estava se aproximando do alvo é subtamente interrompido por um homem extremamente bombado e grande exalando um cheiro forte de alcool e começa a discutir com você sem motivo aparente. o que você faz?",
    opcoes: ["Ignorar", "Xingar o bebado", "Conversar com ele"],
    regras: {
      "Ignorar o bebado": 9,
      "1": 9,
      "Xingar o bebado": 8,
      "2": 8,
      "Conversar com ele": 7,
      "3": 7// O certo
    }
  },

  { // 6 
    texto: "O guarda olha para você estremamente irritado e saca a arma te pegando desprevenido, e em seguida te dá um corte que pega direto na sua garganta. Agonizando você começa a lentamente morrer pela perda de sangue",
    opcoes: ["Recomeçar"],
    regras: {
      "Recomeçar": 0,
      "1": 0,
    }
  },

  { // 7 
    texto: "Enquanto você conversava com o bêbado você acabou o conhecendo melhor e descobrindo que ele é um forte guerreiro e que seria um bom aliado. Ele parece contente em conversar com você e se apresenta como Aduarde o Bruto. *ADUARDE O BRUTO JUNTOU-SE A SEU GRUPO*. \nMas enquanto você conversa com Aduarde o alvo saiu pela porta dos fundos após terminar seu show.",
    opcoes: ["Seguir ele"],
    regras: {
      "Seguir ele": 10,
      "1": 10,
    }
  },

  { // 8 
    texto: "O homem te dá um soco e começa a gritar com você dizendo como que tu poderias xingar o grande ADUARDE, que em um surto pega um grande machado de suas costas e antes que você pudesse reagir você é partido em dois em um único golpe.",
    opcoes: ["Recomeçar"],
    regras: {
      "Recomeçar": 0,
      "1": 0,
    }
  },

  { // 9 
    texto: "O homem te puxa para frente dele e começa a gritar com você dizendo como que tu poderias ignorar o grande ADUARDE, que em um surto pega um grande machado de suas costas e antes que você pudesse reagir você é partido em dois em um único golpe.",
    opcoes: ["Recomeçar"],
    regras: {
      "Recomeçar": 0,
      "1": 0,
    }
  },

  { // 10
    texto: "No caminho você explica a Aduarde seu objetivo, ele incrivelmente compreende e decide te ajudar nessa missão. Aduarde no mesmo segundo sai correndo em direção ao alvo, pegando ele pelo pescoço e o arremeçando em um beco, e após isso manda um joinha para você.",
    opcoes: ["Se aproximar do alvo caído"],
    regras: {
      "Se aproximar do alvo caído": 11,
      "1": 11
    }
  },

  { // 11
    texto: "Quando você se aproxima da pessoa caída, analisando melhor você percebe que é uma mulher qualquer, alta de cabelos longos e loiros e não aparenta ser seu alvo. Você olha decepcionado e se desculpa, cansado você se vira, mas antes de você e Aduarde saírem a moça começa a falar: \n-Du korrupter Scheißer. Tinha que ser esse governo desgraçado mesmo, todos vocês estão sendo vendados com essa perda de crença na igreja! \nVocê se vira e começa uma conversa com ela, descobrindo que ela é uma poderosa necromante chamada Marta e logo ela decide ajudar vocês com a missão, porém ela ainda não concorda com as diretrizes do governo então você decide não contar pra ela que essa missão veio do governo, mas sim diretamente da igreja. *MARTA A MORTA JUNTOU-SE A SEU GRUPO",
    opcoes: ["Seguir a jornada em busca do alvo"],
    regras: {
      "Se aproximar do alvo caído": 12,
      "1": 12
    }
  },

  { // 12
    texto: "Vocês rondam por toda a cidade perguntando aos residentes locais sobre o alvo mas ninguém te da uma resposta além de você ter de ficar curando as pessoas porque Aduarde acabava batendo nelas. além de que as únicas informações acabam se mostrando falsas, até o momento em que o sol começa a se por e a luz do luar começa a surgir. Cansados e por já estar ficando muito tarde você guia seu grupo até a central do governo. Ao chegar Marta olha extremamente furiosa pra vocês por terem mentido para a ela e enquanto isso Aduarde fica confuso em um canto olhando para tudo.",
    opcoes: ["Convencer Marta a entrar", "(Utilizar magia clérica)"],
    regras: {
      "Convencer Marta a entrar": 13,
      "1": 13,
      "(Utilizar magia clérica)": 14,
      "2": 14
    }
  },

  { // 13
    texto: "Você tenta convencer ela mas nada que você diz consegue fazer ela mudar de ideia além de Aduarde não ajudar em nada.",
    opcoes: ["(Utilizar magia clérica)"],
    regras: {
      "(Utilizar magia clérica)": 14,
      "1": 14
    }
  },

  { // 14
    texto: "Você com suas últimas energias, utiliza uma magia clérica e começa a irradiar uma aura brilhante e acolhedora e diz que estas coisas estão no plano de Deus e que é um mal necessário. O que realmente parece funcionar.",
    opcoes: ["Adentrar o grande palácio real"],
    regras: {
      "Adentrar o grande palácio real": 15,
      "1": 15
    }
  },

  { // 15
    texto: "Você e seu grupo adentra o grande palácio real, percorrendo por todos aqueles corredores dourados repletos de estátuas e quadros até o momento em que vocês chegam ao salão que o rei se encontra até que antes mesmo de você conseguir falar algo você escuta uma melodia vindo de traz de você, uma bela melodia. Você extramente sente medo, os guardas locais sacam suas armas e antes de você apagar vê o rosto de Marta derretendo e se transformando em uma face masculina enquanto toca a melodia...",
    opcoes: ["Tentar acordar"],
    regras: {
      "Tentar acordar": 16,
      "1": 16
    }
  },

  { // 16
    texto: "Você não consegue, você se esforça muito, mas mesmo assim não consegue acordar, entretanto não é o momento para desistir.",
    opcoes: ["Tentar de novo"],
    regras: {
      "Tentar acordar": 17,
      "1": 17
    }
  },

  { // 17
    texto: "Você sente que está chegando em algum lugar, você consegue ver uma luz longe.",
    opcoes: ["Acordar"],
    regras: {
      "Acordar": 18,
      "1": 18
    }
  },

  { // 18
    texto: "Você anda em direção a luz e ao chegar nela, você é cegado por um clarão. Sua visão começa a se acostumar e você se encontra em pé, sozinho de seus companheiros, segurando sua espada banhada em sangue, enquanto em sua frente tem um ser humanoide, um alto centáuro desarmado, de joelhos enquanto implora por piedade e junto dele, outros 3 seres mortos que pareciam estar armados, você não consegue controlar seu corpo, você só consegue ver as coisas ocorrendo, você levanta sua espada que começa emanar uma luz dourada e o minotauro é eletrocutado por seu relâmpago divino. Após isso você consegue controlar seu corpo livremente, mas sabe que vai acabar perdendo o controle e apagando de novo. O que você faz?",
    opcoes: ["Acabar com sua própria vida", "Não fazer nada"],
    regras: {
      "Acabar com sua própria vida": 19,
      "1": 19,
      "Não fazer nada": 20, 
      "2": 20
    }
  },

  { // 19
    texto: "Você vendo o que é capaz de fazer e quantos seres pode acabar matando, você se ajoelha, pede perdão para Deus e enfia sua espada em seu peito, atraveçando seu coração, para que nada seja capaz de curá-lo. \n\n\n\n\ FIM"
  },

  {
    texto: "Você não consegue pensar em nada, você até pensa em usar alguma magia em si mesmo, mas nenhuma que seja realmente útil para esta situação vem a sua mente... quando lentamente você vai perdendo o controle do seu corpo, sua cabeça fica leve e seus olhos pesados e você apaga de novo, sem ter esperança de que em algum momento poderá acordar novamente. \n\n\n\nFIM"
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
