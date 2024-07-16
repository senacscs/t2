const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

const historia = [
    { // 0 estágio 0
        texto: "Você entra na caverna na base da montanha, ela e escura é você não consegue enxergar muito bem o seu interior. Ao fundo, você escuta o som de água pingando, o som ecoa pela caverna e você não consegue identificar a sua fonte. Olhando para entrada da caverna, você percebe um tocha que não havia sido notada antes, você deseja pegá-la e acendê-la para explorar a caverna?",
        opcoes: ["Sim", "Não"],
        regras: {
          "sim": 1,
          "não": 2,
        }
      },
      { // 1
        texto: "Você pega a tocha e a acende, a sua luz ilumina a caverna, sua estrutura rocha e empla se estende por alguns metros, você vem alguns buracos nas paredes, semelhantes a túneis que se parecem se estender por quilometros pela estrutura da montanha. Você decide seguir o caminho principal, sem se arriscar a entrar em algum túnel ainda. Conforme você avança, você escuta o som de algo se movendo, e um vulto passa muito rapidamente no fundo do caminho que você escolheu seguir. Mesmo sentindo medo, você continua seguindo esse caminho. Você chega em um espaço amplo, uma espécie de sala repleta de tesouros inimagináveis, amontoados pelo espaço. Conforme você caminha, olhado a sala, você percebe uma caixa e vai até ela, segurando ela em mãos, você percebe que para conseguir abri-la, você precisa resolver um enigma. O que voce deseja fazer?",
        opcoes: ["Resolver o enigma (1)", "Colocar a caixa de volta no lugar (2)"],
        regras: {
          "resolver o enigma": 4,
          "1": 4,
          "colocar a caixa de volta no lugar": 7,
          "2": 7, 
        }
      },
      { // 2
        texto: "Caminhando pelo breu, você não consegue perceber nada ao seu redor. Movendo as mãos para tentar tatear o ambiente ao seu redor, você não consegue sentir nenhuma parede ou rocha para se apoiar, ainda assim, você se move alguns passos para frente. Sem perceber, você pisa em falso, não conseguindo se segurar, você cai no chão. Na queda, você bateu sua testa em uma pedra afiada. Sentindo sua cabeça girar e sua consciência se esvair, você escuta um risada baixa e uma voz dizendo: “Humano tolo, pensei que você seria mais divertido... pelo menos poderei desfrutar de uma boa refeição agora.”",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 3
        }
      },
      { // 3
        texto: "Oh não! Parece que você virou comida de alguém... Deseja voltar para sua escolha anterior?",
        opcoes: ["Sim", "Não"],
        regras: {
          "sim": 0,
          "não":  "../",         
        }
      },
      { // 4
        texto: "Olhando a caixa mais de perto, você percebe que em suas laterais existem duas equações, na lateral menor está escrito “x +1” e na maior “2x - 3”, na tampa da caixa também está escrito a formula para calcular a área de um retângulo que é “a=b*h”. Na fechadura da caixa existem três opções: “monômio”, “dinômio” e “polinômio”, supõe-se que você resolva a conta e aperte o botão que corresponde ao tipo de polinômio resultante da conta.",
        opcoes: ["monômio (1)", "binômio (2)", "polinômio (3)"],
        regras: {
          "monômio": 5,
          "binômio": 5,
          "polinômio": 6,
          "1": 5,
          "2": 5,
          "3": 6,
        }
      },
      { // 5
        texto: "Resposta errada! Tente novamente!",
        opcoes: ["Voltar ao enigma"],
        regras: {
          "voltar ao enigma": 4
        }
      },
      { // 6
        texto: "Com um clique, a caixa se abre, revelando uma espécie de varinha brilhante. Parabéns! Agora você pode usá-la para iluminar o interior da caverna! Você apaga sua tocha e começa usar a varinha para iluminar seu caminho. Você segue em meio aos tesouros.",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 8
        }
      },
      { // 7
        texto: "Você coloca caixa de volta no lugar e segue seu caminho em meio aos tesouros",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 8
        }
      },
      { // 8
        texto: "Explorando os arredores, você acaba não notando os vultos que passam pela caverna. Mais uma vez, algo chama a sua atenção, um objeto semelhante a um cajado, sem segurar sua curiosidade, você pega o cajado com a mão livre e observa sua estrutura. O corpo do cajado é banhado a ouro com uma pedra roxa que brilha com o reflexo da luz que você carrega. De repente, você escuta um voz grave ecoando pelas paredes da caverna, “Eu acredito que você tem algo que me pertence, humano.”, voz diz e você sente seu corpo gelar em meio ao susto, olhando em volta, você não consegue ver ninguém. Você quer tentar se aprofundar no caminho?",
        opcoes: ["Continuar caminhando (1)", "Ficar parado (2)"],
        regras: {
          "continuar caminhando": 9,
          "1": 9,
          "ficar parado": 10,
          "2": 10,
        }
      },
      { // 9 
        texto: "Você deixa o cajado de lado e continua caminhando, enquanto usa sua luz para procurar pela fonte da voz, sem você perceber, um ser te segue pelo teto da caverna, observando seus movimentos de perto. Observando os arredores, você é pego de surpresa por uma pedra caindo do teto bem atrás de você. Você olha para pedra e para o teto, se perguntando que tipo de força foi necessária para que aquela pedra caísse ali. Enquanto você analisa, algo pousa atrás de você, fazendo o chão tremer, você escuta a voz novamente: “Parece que eu errei... Não vai acontecer de novo, pode ter certeza.”",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 11, 
        }
      },
      { // 10 
        texto: "Você deixa o cajado cair no chão e o som ecoa pelas paredes, você tenta achar a fonte da voz enquanto olha para os lados e para o teto. De repente, a voz fala novamente, dessa vez,  bem atrás de você: “Você não tem coração? Foi díficil conseguir isso.”",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 11, 
        }
      },
      { // 11 
        texto: "Você se vira lentamente, dando de cara um dragão enorme, suas escamas e olhos azuis reluzem com luz que você carrega, seu olhar penetra sua alma e você sente sua respiração começando a acelerar ainda mais. O rosto da criatura se aproxima do seu em um movimento brusco, você se assusta e cai no chão, arranhando sua mão no processo. O dragão parcesse se divertir com as suas reações e diz: “Vocês humanos são muito frágeis mesmo. O que você veio fazer aqui, coisinha? Aqui não é seguro para o seu tipo.” Você vai fazer?",
        opcoes: ["Responder (1)", "Ficar em silêncio (2)", "Sair correndo (3)"],
        regras: {
          "responder": 12,
          "1": 12,
          "ficar em silêncio": 13,
          "2": 13,
          "sair correndo": 14,
          "3": 14,
        }
      },
      { // 12 
        texto: "Apesar de relutante, você conta sua missão para o dragão, que te olha com  curiosidade. O dragão inclina a cabeça e diz: “Uma carta? Interessante...”",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 16, 
        }
      },
      { // 13 
        texto: "O dragão bufa e revira os grandes olhos azuis: “Você não vai me responder? Eu odeio quando me deixam falando sozinho.” Apesar de relutante, você conta sua missão para o dragão, que te olha com curiosidade. O dragão inclina a cabeça e diz: “Uma carta? Interessante...”",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 16, 
        }
      },
      { // 14
        texto: "O dragão revira os olhos, em um movimento rápido, ele abre suas asas e voa sobre você, pousando na sua frente. “Eu achei que poderiamos nos divertir juntos... Uma pena.” O dragão usa o gelo que sai da sua boca e você acaba com congelado em bloco de gelo. Não parece que você vai conseguir sair tão cedo.",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 15,
        }
      },
      { // 15
        texto: "Oh não! Você virou uma escultura de gelo! Você deseja voltar a escolha anterior?",
        opcoes: ["sim", "não"],
        regras: {
          "sim": 11,
          "não":  "../",
        }
      },
      { // 16
        texto: "Lentamente, uma névoa azul claro começa a envolver o dragão e com um passe de mágica, você já não vê um dragão a sua frente, mas sim, um homem de pele parda, longos cabelos azuis claros quase branco e longos chifres e asas  também na cor azul. “Acho que dessa forma podemos conversar melhor.” o homem-dragão sorri e você percebe seus dentes afiados. “Você despertou meu interesse, humano. Eu vou ajudar você agora.” O homem engancha o braço no seu e começa a te guiar pela caverna.",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 17,
        }
      },
      { // 17
        texto: "Sem muitas opções, você deixa o dragão te guiar pela caverna, a caminhada é até que tranquila, o dragão não fala muitas coisas, apenas cantarola alguma música aleatória, ele não parece ser do tipo que fala ou tem interações sociais muito frequentemente, apesar disso parece amigável. Depois de um bom tempo andando, vocês param em frente a uma porta de pedra coberta de símbolos e runas. “Para conseguirmos sair do outro lado da montanha, precisamos passar dessa porta... Mas eu não sei resolver o enigma para abrir, então você faz.” O dragão sorri e te empurra suavemente em direção a porta. O que você faz?",
        opcoes: ["Resolver o enigma (1)", "Usar força bruta (2)", "Pedir ajuda ao homem-dragão (3)"],
        regras: {
          "Resolver o enigma": 19,
          "Usar força bruta": 18,
          "Pedir ajuda ao homem-dragão": 22,
          "1": 19,
          "2": 18,
          "3": 22,
        }
      },
      { // 18
        texto: "Você se aproxima da porta e, reunindo todas as suas forças, você chuta a porta. O que você percebe ser uma péssima ideia, já que a porta não se mexe e você tem um novo hematoma. Você olha para o dragão que segura o riso e diz. “Deus, isso foi humilhante!” E então ele deixa sua risada correr solta. Talvez seja melhor tentar resolver o enigma...",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 19,
        }
      },
      { // 19
        texto: "No topo da porta de pedra, você percebe que está escrito “Se um polinômio tem Raízes imaginárias ele pertence a qual conjunto?”, e abaixo aparecem os seguintes símbolos: ℂ, ℝ e ∃, aperte o correto para liberar a passagem.",
        opcoes: ["∃ (1)", "ℂ (2)", "ℝ (3)"],
        regras: {
          "∃": 20,
          "ℂ": 21,
          "ℝ": 20,
          "1": 20,
          "2": 21,
          "3": 20,
        }
      },
      { // 20
        texto: "A porta treme, mas não se abre, parece que você errou! Tente novamente!",
        opcoes: ["Voltar ao enigma"],
        regras: {
          "voltar ao enigma": 19
        }
      },
      { // 21
        texto: "Você aperta o botão e com um tremor, a porta começa a abrir e a passagem é liberada. “Até que você é inteligente, eu esperava que você não conseguiria.” o dragão fala enquanto se aproxima de você.",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 23,
        }
      },
      { // 22
        texto: "Você olha para a porta por alguns segundos e tenta resolver o enigma. Você se dá conta que não faz a menor ideia da resposta, se virando para o dragão você pede que ele te ajude, ele suspira. “Eu pensei que você iria pelo menos tentar um pouco mais antes de pedir ajuda.” O dragão se aproxima da porta e com um soco, a porta é destruída. “Eu esperava poder ter essa porta para os dias frios, ao invés de destruí-la.” Ele suspira.",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 23,
        }
      },
      { // 23
        texto: "Com a passagem livre, você se arrisca a passar primeiro, apenas para quase cair da montanha. Parece que aquela porta dava para uma saída do outro lado da caverna, só que muito mais alto do que por onde você entrou e sem espaço para descer. Antes de você cair, o meio-dragão te segura e diz: “Então é isso que tinha atrás dessa porta... hm... interessante.” O dragão te puxa para o chão novamente e sorri. “Parece que vamos ter que voar, vou te dar uma carona!” Você vai aceitar?",
        opcoes: ["Aceitar. (1)", "Negar e tentar escalar até a o chão. (2)", "Desistir com medo. (3)"],
        regras: {
          "aceitar": 24,
          "negar e tentar escalar até a o chão": 27,
          "desistir com medo": 29,
          "1": 24,
          "2": 27,
          "3": 29,
        }
      },
      { // 24
        texto: "Você aceita a oferta e o dragão te pega no colo, estilo noiva e usa suas asas para vocês saírem da montanha. Ao longe, você avista uma casa em meio as árvores atrás da montanha, aquela é a casa da onde você deve entregrar sua carta! Você aponta para a casa e o dragão te leva até lá. Parece que a jornada de você está chegando ao fim...",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 25,
        }
      },
      { // 25
        texto: "Vocês dois caminham para a casa, você confirma que essa é mesmo a casa para a qual a carta é destinada. Você deixa na caixa de correio e olha para o dragão que sorri com melancolia. “Parece que nossa jornada chegou ao fim, pequeno humano... Eu vou te levar de volta para o outro lado da montanha.” O meio-dragão te leva para onde a sua jornada começou. “Eu me diverti com a sua companhia, considere voltar para me visitar, humano.” O dragão sorri e acena enquanto você caminha de volta para onde você veio.",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 26,
        }
      },
      { // 26
        texto: "Você terminou o jogo! Espero que você tenha aproveitado a rota platônica, mas caso deseje fazer a rota romântica, eu vou te dar essa colher de chá e permitir que você volte na escolha anterior!",
        opcoes: ["Voltar uma escolha e entrar na rota romântica. (1)", "Voltar a tela inicial e começar outra rota. (2)"],
        regras: {
          "voltar uma escolha e entrar na rota romântica": 23,
          "voltar a tela inicial e começar outra rota": "../",
          "1": 23,
          "2": "../",
        }
      },
      { // 27
        texto: "Você nega a oferta do dragão e começa a descer pelas pedras da montanha, parece perigoso, mas a princípio estava tudo bem. O dragão suspira e revira os olhos, decidindo usar suas asas e te esperar na base da montanha, “Você é uma pessoa muito teimosa! Você não percebe que comigo seria bem mais rápido?!” Você estava prestes a responder, quando um tremor começa  e uma pedra enorme começa a rolar do topo da montanha, você tenta desviar, mas não consegue, a pedra caí sobre você e te leva até a base da montanha, você foi esmagado. O homem-dragão, que desviou de você e da pedra, olha para você esmagado e suspira “É por isso que eu não faço amizades, eles morrem muito fácil!”",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 28,
        }
      },
      { // 28
        texto: "Você foi amassado! O dragão ficou triste com sua morte e deixou uma florzinha do seu lado e da pedra. Você deseja retornar a escolha anterior?",
        opcoes: ["Sim", "Não"],
        regras: {
          "sim": 23,
          "não":  "../",
        }
      },
      { // 29
        texto: "Você recua com medo e nega diversas vezes com a cabeça, por acaso você tem medo de altura? Ao observar essa cena, o dragão suspira e comenta: “Eu acho que sua carta não pode esperar sua birra. Chega de moleza, vamos embora!” Com isso, o dragão te pega pela cintura e te joga por cima do ombro. “Sem tempo para perder, você está seguro comigo, humano!” O dragão corre para a beirada e pula, levantando voo. Você grita de medo e tenta se debater, o dragão te segura com força e te puxa para o colo dele, você abraça o pescoço dele e coloca suas pernas em volta de sua cintura. “Não acredito que vou ter que te carregar que nem uma criança, você tem quantos anos? Seis?” Você para de gritar, observa as feições do meio-dragão mais de perto, se perdendo em meio aos olhos azuis que te encaram de volta. O que você faz?",
        opcoes: ["Desviar o olhar. (1)", "Se aproximar. (2)", "Dizer algo. (3)"],
        regras: {
          "desviar o olhar": 30,
          "se aproximar": 31,
          "dizer algo": 32, 
          "1": 30,
          "2": 31,
          "3": 32,
        }
      },
      { // 30
        texto: "Você desvia o olhar, sentindo o rubor cobrir suas bochechas. Você tenta se distrair com a paisagem, mas esses não parecem ser os mesmo planos do dragão, que segura seu rosto e te beija. É um beijo profundo e lento, que se finaliza com o dragão te dando uma leve mordida no seu lábio inferior. “Eu gostei de você, você é uma pessoa interessante.” O dragão sorri e beija sua bochecha, te levando para o chão. Você tenta descer do colo do dragão, mas ele não deixa e fala: “Não, não, humano, agora você é meu. Estou vendo uma casa daqui, deve ser onde você tem que entregar sua carta.”",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 34,
        }
      },
      { // 31
        texto: "Você se aproxima e puxa o meio-dragão para um beijo profundo e viciante , o dragão corresponde ao seu beijo e te segura mais perto dele. O beijo termina com você mordendo o lábio inferior dele e dando vários selinho em sua boca. O dragão sorri e diz: “Uau, humano! Eu não esperava que você gostasse tanto assim de mim!” O dragão ri enquanto te gira no ar. Depois de um tempo rodopiando no ar e beijando, vocês finalmente decidem voltar a sua missão inicial e pousam na floresta. Caminhando, vocês avistam uma casa, deve ser ali onde você deve entregar sua carta!",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 34,
        }
      },
      { // 32
        texto: "Você olha pra ele e franze a testa, você diz que seus olhos são estranhos e que de perto ele parece ainda mais assustador. O dragão se ofende com seu comentário e fala: “Eu estou tentando te ajudar e é assim que você me retribui?! Muito bem! Siga seu caminho sozinho de agora em diante!” O dragão te solta e você começa a cair no chão enquanto grita, enquanto o dragão retorna para sua caverna. Você sente suas costelas quebrarem e perfurarem seus órgão internos, você cospe sangue e seus sentidos ficam nublados, você só percebe que não sozinho quando escuta um uivo e lobos começam a comer a sua carne.",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 33,
        }
      },
      { // 33
        texto: "Você foi comido por lobinhos, bem na rota romântica! Você por acaso não quer ficar o dragãozinho? Bem... Se esse for o caso, você também tem a opção de voltar duas escolhar agora.",
        opcoes: ["Voltar uma escolha e continuar na rota romântica. (1)", "Voltar duas escolhas e voltar para a rota platônica. (2)", "Voltar a tela inicial e começar outra rota. (3)"],
        regras: {
          "voltar uma escolha e continuar na rota romântica": 29,
          "voltar duas escolhas e voltar para a rota platônica": 23,
          "voltar a tela inicial e começar outra rota": "../",
          "1": 29,
          "2": 23,
          "3": "../",
        }
      },
      { // 34
        texto: "Pouco tempo depois, vocês chegam a casa e confirmam que é a casa certa. Depois de colocar a carta na caixa de correio, você olha para o dragão com afeição, ele te dá um selinho e te leva de volta para a caverna. Vocês passam o voo beijando e aproveitando o tempo juntos, quando vocês chegam naquela porta que vocês atravessaram, vocês observam o pôr do sol juntos em meio a carinhos e abraços. “Já está tarde, talvez você considere passar a noite?”, o dragão sorri enquanto os braços dele envolvem sua cintura. O que você vai fazer?",
        opcoes: ["Ir embora. (1)", "Aceitar. (2)", "Negar. (3)"],
        regras: {
          "ir embora": 35,
          "aceitar": 37,
          "negar": 38,
          "1": 35,
          "2": 37,
          "3": 38,
        }
      },
      { // 35
        texto: "Você nega veementemente, se levantando e virando para sair. O dragão não gosta da sua atitude e te puxa pelo braço, você bate contra o peito dele e ele te beija, usando o gelo que sai de sua boca para congelar seus órgãos internos e te matar sem comprometer o exterior. “Poderia ter sido diferente, eu só queria brincar um pouco com você, mas acho que agora posso brincar com você para sempre!” Ele pega seu corpo gélido e te leva para aquela sala cheia de tesouros que você viu no início, ele te deita em meio as moedas de ouro e deixa um beijo em sua testa. Ele deita ao seu lado e abraça seu corpo morto, te trazendo para o peito dele. “Minha linda boneca...” Ele diz enquanto acaricia seu cabelo e adormece.",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 36,
        }
      },
      { // 36
        texto: "Uhh, você virou um fantoche, que horror! Você deseja voltar para escolha anterior?",
        opcoes: ["Sim", "Não"],
        regras: {
          "sim": 34,
          "não": "../",
        }
      },
      { // 37
        texto: "Você passa seus braços pelo pescoço dele e aceita a oferta dele. O dragão sorri e te carrega para uma sala que você nunca tinha visto antes, coberta de travesseiros e cobertores macios, ele deita você ali e fica por cima de você, beijando sua boca com avidez, enquanto passa as mãos por todo o seu corpo. Vocês passam a noite juntos e na manhã seguinte, você acorda do lado da forma adormecida do meio-dragão, você acaricia seus longos cabelos azuis claros. Talvez você tenha se apegado até demais a esse homem.",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 39,
        }
      },
      { // 38
        texto: "Você suspira, enquanto passa seus braços em volta do pescoço do dragão. Infelizmente, você explica que não pode ficar por causa do trabalho e que deve dormir cedo hoje. “Mas eu posso levar você por trabalho! Eu não quero que você vá...” O dragão diz, enquanto aperta sua cintura e te puxa para mais perto. Vocês entram em consenso e o dragão te leva para a sua casa, com a promessa que você o visitaria na noite seguinte. Vocês se despendem com um alguns beijos apaixonados.",
        opcoes: ["Continuar"],
        regras: {
          "continuar": 39,
        }
      },
      { // 39
        texto: "Você ganhou um dos finais da rota romântica! Espero que você tenha se divertido e aproveitado. Caso deseje voltar ao outro final da rota româncita, eu vou deixar essa opção!",
        opcoes: ["Voltar para a escolha anterior. (1)", "Voltar para tela inicial e começar uma nova rota. (2)"],
        regras: {
          "voltar para a escolha anterior": 34,
          "voltar para tela inicial e começar uma nova rota": "../",
          "1": 34,
          "2": "../", 
        }
      },
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
