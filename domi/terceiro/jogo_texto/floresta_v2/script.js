const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

inputComando.focus()

const historia = [
  { // 0 estágio 0
    texto: "A sua jornada começa ao adentrar a floresta. As árvores rodeiam você como um infinito teto verde, fazendo com que você se sinta insignificante na vastidão que lhe espera. Mas, apesar do seu coração acelerado, tente enfrentar a aventura com sua cabeça erguida. Altos e baixos lhe aguardam, tudo depende das suas escolhas. ",
    opcoes: ["continuar", "voltar"],
    regras: {
      "continuar": 1, // Ajuste para minúsculas
      "1": 1, // Ajuste para minúsculas
      "voltar": "../",
      "2": "../"
    }
  },
  { // 1 Novo estágio para "continuar" e encontrar uma mansão
    texto: "Após andar por horas, você percebe que se desviou da trilha original da floresta. O sol não brilha mais no céu, os arbustos se unem como se fossem paredes de um labirinto sem fim, as árvores cobrem a sua perspectiva como monstros de pesadelos infantis. Mas, ao longe, você vê algo que chama sua atenção: uma mansão abandonada.",
    opcoes: ["entrar na mansão", "ignorar a mansão"],
    regras: {
      "entrar na mansão": 2,  // Índice do próximo estágio (você precisa criar esse estágio)
      "1": 2,
      "ignorar a mansão": 4, // Vai para o estágio de ser atacado pelo vampiro
      "2": 4,
    }
  },
  { // 2 Novo estágio para "entrar na mansão"
    texto: "Você se aproxima da porta da mansão e percebe que ela está trancada. Para conseguir entrar, é necessário inserir uma senha de dois dígitos no cadeado. Entalhado na madeira ao lado da porta, há uma charada.",
    opcoes: ["ler o enigma"],
    regras: {
      "ler o enigma": 3,
      "1": 3 // Vai para o estágio do enigma 
    }
  },
  { // 3 Novo estágio para "ler o enigma"
    texto: '"O ancião vampiro declarou que a caça será feita em grupos sempre à meia-noite. Considerando que cada grupo é composto por 10 vampiros, que horas são?"',
    opcoes: ["8:50", "24:24", "23:50"],
    regras: {
      "8:50": 19, // Índice do estágio do vampiro te mata pela resposta errada
      "1": 19,
      "24:24": 21, // Índice do estágio do universo te matando pela resposta errada
      "2": 21,
      "23:50": 4,
      "3": 4,
      "69": 18 // Vai para o easter egg
    }
  },
  { // 4 Novo estágio para ser atacado pelo vampiro
    texto: "Antes que você pudesse dar mais um passo, um vulto circula você com uma agilidade nunca vista antes em todas as suas jornadas. Em choque, não há nada que você possa fazer quando um monstro pula para cima de você e tenta morder seu pescoço. Ou será…",
    opcoes: ["esfaquear", "escapar", "rezar"],
    regras: {
      "esfaquear": 5, // Vai para o estágio que inicia o final ruim
      "1": 5,
      "escapar": 22, // Vai para o estágio que inicia o escapar final ruim
      "2": 22,
      "rezar": 7, // Vai para o estágio que vai para o final bom
      "3": 7
    }
  },
  { // 5 Novo estágio para esfaquear
    texto: "Você consegue reagir a tempo de puxar uma pequena faca que fica guardada dentro de um bolso discreto costurado em sua roupa. Levantando a arma, você acerta um golpe fatal que seria fatal para qualquer ser humano… porém, nesse momento, você percebe que seu inimigo é um vampiro, e sua super-regeneração é o suficiente para ele se recuperar. Ele se teletransporta para atrás de você e finalmente consegue enterrar as presas em seu pescoço.",
    opcoes: ["resistir"],
    regras: {
      "resistir": 6, // Vai para o estágio que inicia o final ruim
      "1": 6,
    }
  },
  { // 6 Novo estágio para final ruim
    texto: "Apesar dos seus esforços admiráveis, o vampiro não se compadece com sua situação e drena seu sangue. A floresta desaparece. Tudo o que você enxerga são suas memórias mais importantes passando na frente de seus olhos, seus batimentos cardíacos acelerados pela adrenalina somem aos poucos, você sente tudo e logo é entregue ao nada. Esse é o sentimento de morrer.",
    opcoes: ["GAME OVER"],
    regras: {
      "game over": 0, // Volta para o primeiro estágio
      "1": 0
    }
  },
  { // 7 Novo estágio para rezar
    texto: "Com medo da morte iminente, seu último recurso é recorrer à sua fé. Você começa a rezar, proferindo todas as cantigas ancestrais ensinadas a você por sua família, e coloca a mão no bolso para puxar o crucifixo que sempre carrega consigo. Nesse momento, o monstro em cima de você grita e se afasta aterrorizado.",
    opcoes: ["continuar"],
    regras: {
      "continuar": 8, // Você sobrevive e vai para o resto do jogo
      "1": 8
    }
  },
  { // 8 Novo estágio para continuar rezar
    texto: "Sem mais temer por sua própria vida, você pode relaxar por alguns segundos e analisar a criatura à sua frente. É um vampiro - que você espantou com o crucifixo. Cabelos longos, estranhamente bem cuidados, caindo sobre seu rosto; ele levanta a cabeça para lançar uma expressão raivosa na sua direção e você registra que seus olhos são dourados. Uma cor inesperada, mas encantadora para alguém que já viu todo tipo de surpresas em suas aventuras.",
    opcoes: ["fugir"],
    regras: {
      "fugir": 9, // Segue para o resto do jogo
      "1": 9
    }
  },
  { // 9 Novo estágio para fugir
    texto: "O vampiro te segue, não importando o quanto você diga que não quer companhia. Ele questiona sobre sua missão, admirado com sua força e inteligência, o suficiente para ter conseguido derrotá-lo. Internamente, você pensa que ele só está tentando se convencer isso, pois se sente humilhado de ter sido derrotado. Ou se sente solitário por passar seus dias numa mansão abandonada. De qualquer maneira, você deixa que ele siga você.",
    opcoes: ["prosseguir o caminho"],
    regras: {
      "prosseguir o caminho": 10, // Segue para o resto do jogo
      "1": 10
    }
  },
  { // 10 Novo estágio para prosseguir o caminho
    texto: 'Continuando a trilha da floresta, você e seu companheiro vampiro se deparam com uma criatura dormindo pacificamente. "Ela pode parecer fofa, mas não se engane!" O vampiro avisa, com suspense na voz. "Esse monstro mata qualquer viajante que passa por esse caminho, devemos atacá-lo antes que nos ataque." O que você faz?',
    opcoes: ["atacar a criatura", "ignorar a criatura"],
    regras: {
      "atacar a criatura": 11, // Segue para o resto do jogo
      "1": 11,
      "ignorar a criatura": 12, // Segue para o resto do jogo
      "2": 12,
    }
  },
  { // 11 Novo estágio para atacar a criatura
    texto: 'Você saca sua arma e acerta um golpe em cheio na criatura, que até então dormia pacificamente. Ela acorda em desespero, olhando ao redor, e você se prepara para repetir seu ataque. Antes que você consiga dar o golpe final, ela solta um choramingo de dor e foge por entre as árvores. Você machucou a criatura.',
    opcoes: ["prosseguir o caminho"],
    regras: {
      "prosseguir o caminho": 13, // Segue para o resto do jogo
      "1": 13
    }
  },
  { // 12 Novo estágio para ignorar a criatura
    texto: 'Você revira os olhos e ignora os sussurros do vampiro ao seu lado. Seguindo seu caminho, vocês contornam a criatura dormindo. Apesar dos avisos sérios que você ouviu, ela não se move e continua descansando tranquilamente. Você prova para o vampiro que ele estava errado.- Vocês encontram uma fada e ela diz que só permitirá que vocês sigam em frente caso você resolva um enigma.',
    opcoes: ["prosseguir o caminho"],
    regras: {
      "prosseguir o caminho": 13, // Segue para o resto do jogo
      "1": 13
    }
  },
  { // 13 Novo estágio para prosseguir o caminho
    texto: 'Inesperadamente, brilhinhos preenchem sua visão e, esfregando os olhos para se acostumar à luz repentina, vocês percebem que uma fada aparece à sua frente. "Para passar por esse caminho, é necessário resolver um enigma!" Com cansaço, você ouve o que ela tem a dizer.',
    opcoes: ["continuar"],
    regras: {
      "continuar": 14, // Segue para o resto do jogo
      "1": 14
    }
  },
  { // 14 Novo estágio para resolver o enigma 2
    texto: '"Quando eu tinha 12 anos, a fada anciã da minha aldeia tinha o triplo da minha idade. Agora tenho 127 anos, quantos anos tem a fada anciã?"',
    opcoes: ["Digite a resposta correta do enigma."],
    regras: {
      "151": 15, // Segue para o resto do jogo
      "151 anos": 15,
      "digite a resposta correta do enigma": 15,
      "1": 15
    }
  },
  { // 15 Novo estágio para seguir o caminho
    texto: 'Após falar a resposta correta para a fadinha, ela olha incrédula para vocês dois. "Poucos conseguem passar pelos meus enigmas e sobrevivem para contar a história, vocês tiveram sorte!" Ela desaparece em uma nuvem brilhosa e o caminho fica livre novamente.',
    opcoes: ["sair da floresta"],
    regras: {
      "sair da floresta": 16, // Segue para o resto do jogo
      "1": 16
    }
  },
  { // 16 Novo estágio para o fim do jogo
    texto: 'Após muitos altos e baixos, você e o vampiro conseguem sair da floresta. Com sorte, é de noite e não há necessidade de se preocupar com o Sol. Você declara que é aqui que sua jornada juntos chega ao fim, você irá para sua aldeia completar sua missão e o seu companheiro voltará para a floresta.',
    opcoes: ["continuar"],
    regras: {
      "continuar": 17, // Segue para o resto do jogo
      "1": 17
    }
  },
  { // 17 Novo estágio para o fim do jogo
    texto: 'Ou seria isso, caso o vampiro não tivesse se virado de última hora e chamado por você. Levitando sobre o chão, ele abre suas asas de morcego e pergunta: "Ei, quer uma carona?"',
    opcoes: ["FIM (Ou será?)"],
    regras: {
      "FIM": 0, // Volta para a tela inicial
      "FIM (Ou será?)": 0,
      "1": 0,
    }
  },
  { // 18 estágio 0
    texto: "Você solta um risinho com a sua resposta, mesmo que o cadeado continue trancado. Entretanto, enquanto você se diverte, uma criatura aproveita da sua distração para atacar você pelas costas. Você não tem tempo o suficiente para reagir e a criatura suga todo o seu sangue.",
    opcoes: ["game over"],
    regras: {
      "game over": 0, // Volta para o primeiro estágio
      "1": 0
    }
  },
  { // 19 Novo estágio do vampiro te mata pela resposta errada
    texto: 'Vampiros não caçam durante o dia, tampouco às oito da manhã: momento em que o Sol está cobrindo todas as folhas da floresta. Apesar disso, você desafia a lógica e insere o horário no cadeado. Por um momento, você acha que consegue destrancar a porta.',
    opcoes: ['continuar'],
    regras: {
      'continuar': 20,
      '1': 20
    }
  },
  { // 20 Novo estágio do resto do estágio do vampiro te mata pela resposta errada
    texto: 'Mas, era apenas uma ilusão criada pela esperança dos seus pensamentos. Enquanto você se distraía com as suas respostas ilógicas e perdia tempo dando palpites que não levam a nada, uma criatura se espreitou por trás de você. Sem conseguir reagir de imediato, você sente seu sangue sendo drenado.',
    opcoes: ['resistir'],
    regras: {
      'resistir': 6,
      '1': 6
    }
  },
  { // 21 Novo estágio de ser esmagado por um piano
    texto: 'Um piano comicamente caricato cai em cima de você e te esmaga igual gelatina. Você nem sabia que isso era possível, mas a sua resposta foi tão sem sentido que o universo entrou em pane e confundiram a sua história com um episódio de desenho animado.',
    opcoes: ['GAME OVER'],
    regras: {
      'game over': 0,
      '1': 0
    }
  },
  { // 22 Novo estágio de escapar final ruim
    texto: 'Em pânico com a criatura que apareceu de súbito, você imediatamente tenta se desvencilhar e empurrar para longe o ser que te atacou. O que você não esperava, porém, era que você estava lutando contra um vampiro, com uma força inimaginável e impossível de escapar.',
    opcoes: ['socar', 'chutar', 'esfaquear'],
    regras: {
      'socar': 23, // Vai para o estágio de socar ou chutar final ruim
      '1': 23,
      'chutar': 23, // Vai para o estágio de socar ou chutar final ruim
      '2': 23,
      'esfaquear': 5,
      '3': 5
    }
  },
  { // 23 Novo estágio de socar ou chutar final ruim
    texto: 'Apesar dos seus esforços, o vampiro consegue colocar as presas no seu pescoço. Ele não perde tempo em drenar todo o sangue presente em seu corpo - que congela e, aos poucos, perde sua força vital. Lentamente, você percebe que lutou uma batalha sem chance de vitória.',
    opcoes: ['game over'],
    regras: {
      'game over': 0,
      '1': 0
    }
  }
];

function mostrarTexto(indice) {
    
  console.log("Função mostrarTexto chamada com índice:", indice);

  const paragrafoTexto = areaTexto.querySelector("p");
  const imagemJogo = areaTexto.querySelector("#imagem-jogo");

  console.log("paragrafoTexto:", paragrafoTexto);
  console.log("imagemJogo:", imagemJogo);

  paragrafoTexto.textContent = ""; // Limpa o texto anterior
  // imagemJogo.style.display = "none"; // Esconde a imagem

  console.log("paragrafoTexto:", paragrafoTexto);
  console.log("imagemJogo:", imagemJogo);

  let i = 0;
  let texto = historia[indice].texto;

  function digitar() {
    
    if (i < texto.length) {
      paragrafoTexto.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 50); // Atraso de 50ms (ajuste conforme desejado)
    } else {
      if (historia[indice].imagem) {
        imagemJogo.src = historia[indice].imagem;
        imagemJogo.style.display = "block";
      }

      if (historia[indice].opcoes) {
        paragrafoTexto.textContent += "\n\nOpções:\n";
        historia[indice].opcoes.forEach(opcao => {
          paragrafoTexto.textContent += "- " + opcao + "\n";
        });
      }

      inputComando.focus();
    }
  }

  digitar(); 
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
