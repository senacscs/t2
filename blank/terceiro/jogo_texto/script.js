const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;
inputComando.focus();

const historia = [
	{
		texto: "Na avenida movimentada, o fliperama Bit Bunker brilha como um oásis de luzes vibrantes e sons eletrizantes. Conhecido por sua atmosfera animada e pela vasta coleção de jogos viciantes que cativam jogadores de todas as idades. É o ponto de encontro para entusiastas de jogos que buscam experiências imersivas e adrenalina pura. Seja durante o dia agitado ou à noite, suas portas abertas convidam todos a mergulharem em um mundo de c  p    ão     s m     f         m.",
		opcoes: ["jogar"],
		regras: {
			"jogar": 1, 
			"1": 1,
		}
	},
    // 1- início
	{
		texto: "O som do sino anunciando a chegada de alguém toca, a porta se fecha e a cacofonia do ambiente exterior cessa. O ambiente está deserto. A única iluminação provém das luzes coloridas das máquinas que estão ligadas." +
		"Você considera que o fliperama poderia estar fechado, mas na porta a placa indicava o contrário.",
		opcoes: ["sair do fliperama", "observar melhor o ambiente"],
		regras: {
			"sair do fliperama": 2,
			"observar melhor o ambiente": 7,
			"1": 2,
			"2": 7,
		}
	},

// 2- sair do fliperama
	{
		texto: "Você volta para a porta, no entanto, ao puxá-la, a porta não abre. A placa que antes indicava que o estabelecimento estava aberto, indica agora que ele estava fechado. Ao tentar puxar a porta mais uma vez, a jukebox liga. Uma música alegre começa a tocar por todo o ambiente."+
	 "“Vem jogar comigo. Vem jogar comigo. Você quer jogar comigo?" +
"Você arrepia-se ao sentir alguém – ou algo – lhe observando. Ao virar-se, percebe que se acenderam dois botões sobre uma mesa no centro do fliperama: Jogar. Desligar." +
"“Vem jo-gar co-mi-go. Você quer jogar comigo?” – a música se repete. As luzes das máquinas começaram a piscar. Você terá de responder. Ao caminhar até o centro, observa os dois botões. E aperta um deles.",
		opcoes: ["jogar", "desligar"],
		regras: {
			"jogar": 3,
			"desligar": 6,
            "1":3,
            "2": 6,
		}
	},
    // 3- jogar
	{
		texto: "Ao apertar o botão de jogar. As luzes das máquinas começam a piscar. A jukebox troca a música para uma melodia agitada. Uma porta que antes passou despercebida por você, se abre. A única máquina de jogos que estava desligada, acende. A tela mostra em uma letra bonita: instruções.  ",
		opcoes: ["ir até a máquina", "ir até a porta"],
		regras: {
			"ir até a máquina": 4,
			"ir até a porta": 5,
            "1": 4,
            "2": 5,
		}
	},
    // 4- ir até a máquina
	{
		texto: "Na tela da máquina, a palavra ‘instruções’ se destaca em vermelho. Assim que você se aproxima, um texto aparece. É perceptível que há partes faltando. ‘Olá, jogador! N      j               a           t Sua missão é encontrar o caminho antes da meia-noite.   	e    ca   o     ad      l    O relógio corre!    a   h               t         Não deixe pedra sobre pedra!’  Você olha novamente para a porta.",
		opcoes: ["aventurar-se no jogo", "explorar mais o fliperama"],
		regras: {
			"aventurar-se no jogo": 0,
			"explorar mais o fliperama": 7,
			"1": 0,
			"2": 7,
		}
	},
    // 5- ir até a porta
	{
		texto: "Você se aproxima da porta. A sala, do outro lado, está escura. Não há nenhuma iluminação. Assim que você cruza a porta, ela se fecha. Não há volta. O único som é a sua respiração. Não há nada que consiga ver. Não há nada que consiga sentir. Então, há uma risada infantil. ‘Estou feliz que veio jogar comigo. Desejamos-lhe boa-sorte. Você vai precisar. O jogo já vai começar!’ Do outro lado da porta, as máquinas desligam. A música cessa. E o 6, incrustado na porta e desenhado no papel, é substituído por um 7.",
		opcoes: ["próxima fase",],
		regras: {
			"próxima fase": 0,
			"1": 0,
		}
	},
    // 6- desligar
	{
		texto: "As luzes das máquinas apagam. A música cessa. Os sons de buzinas e pessoas apressadas do lado de fora tomam conta do ambiente. O sino na porta toca. Você olha e a vê aberta. Olha mais uma vez ao redor. E caminha até ela... Você passa pela porta. Respira fundo estranhando tudo o que acabou de acontecer. Observa a rua movimentada. Mas sente uma tontura... o mundo começa a girar.  \' E você desliga. ",
		opcoes: ["voltar ao início"],
        regras: {
            "voltar ao início": 0,
            "1": 0,
        }
	},
    // 7- observar o ambiente 
    {
        texto: "Você observa o ambiente. Todas as máquinas estão ligadas, com suas luzes coloridas e telas animadas; exceto uma. Atrás da máquina, uma porta é visível, mas ao observar os detalhes dela, percebe a ausência de uma maçaneta. Ao olhar para o caixa, o atendente não está, mas o computador se encontra ligado. No entanto, há algo de errado: a tela está azul. ",
        opcoes: ["inspecionar a porta", "inspecionar o caixa"],
        regras: {
            "inspecionar a porta": 8,
            "inspecionar o caixa": 11,
            "1": 8,
            "2": 11,
        }
    },
    // 8- inspecionar a porta
    {
        texto: "Você vai até a porta. Ao se aproximar, percebe que é uma porta de metal com detalhes incrustados. Bem ao centro, o número ‘6’ destaca-se. A ausência de maçaneta é comprovada, mas há uma fechadura – você lembra dos grampos que sempre carrega no bolso. Ao passar os dedos sobre os desenhos marcados no metal, abaixo do número, nota a frase: ‘você quer jogar também?’. Uma iluminação chama sua atenção abaixo da frase – é um pequeno botão. ",
        opcoes: ["apertar o botão", "tentar abrir a porta com o grampo"],
        regras: {
            "apertar o botão": 9,
            "tentar abrir a porta com o grampo": 10,
            "1": 9,
            "2": 10,
        }
    },
        // 9- apertar o botão
        {
            texto: "Você aperta o botão. O som de uma máquina ligando. Você se vira e percebe que o único jogo que antes estava desligado, ligou. Na tela há a palavra ‘instruções’. Ao olhar a porta novamente, a vê aberta.",
            opcoes: ["ir até a máquina", "passar pela porta"],
            regras: {
                "ir até a máquina": 4,
                "passar pela porta": 0,
                "1": 4,
                "2": 0,
            }
        },
                // 10- tentar abrir a porta com o grampo
                {
                    texto: "Você pega o grampo guardado em seu bolso. Lembrando dos inúmeros vídeos que assistiu tentando aprender, os insere na fechadura. Não demora muito até ouvir um estalo. Tec... Você tenta puxar porta, empurrar, arrastar... mas ela não abre.  Por um momento, pensa que o barulho foi imaginação. Então, sente algo pesar sobre seu ombro. Você tenta virar, mas algo o impede. Um ar quente toca sua nuca, sente o cheiro do hálito azedo...  ‘Nós não jogamos com trapaceiros.’  Sua cabeça dói. Antes que consiga gritar, uma mão esquelética cobre sua boca. O cheiro fétido intoxica seus sentidos. Seus joelhos cedem, e você desaba. Deitado no chão, encara o teto do fliperama. ‘Ele sempre foi vermelho?’ Seu corpo dói. Você não consegue se mexer. Então, tudo escurece. ",
                    opcoes: ["voltar ao início"],
                    regras: {
                        "voltar ao início": 0,
                        "1": 0,
                    }
                },
// 11- ir para o caixa
 {
                                texto: "Você segue até o caixa. Sobre a mesa estão espalhados canetas, papéis, fichas para os jogos...Em um papel, há anotações desconexas, rabiscos, o número 6, desenhado em vermelho, na parte superior da folha. Uma xícara de café – há uma mosca boiando no líquido. O computador chama sua atenção. A tela azul. ",
                                opcoes: ["voltar para o centro do fliperama", "mexer no computador"],
                                regras: {
                                    "voltar para o centro do fliperama": 2,
                                    "mexer no computador": 12,
                                    "1": 2,
                                    "2": 12, 
                                }
},
                            // 12- mexer no computador
                             {
                             texto: "Você se aproxima da máquina. Mexe o mouse. Aperta as teclas do teclado... Tenta desligar e ligar novamente... mas a tela permanece a mesma. Você se ajoelha para olhar a cpu embaixo da mesa. Desliga e liga novamente. Ao se levantar, nada mudou. Então, opta pelos meios tradicionais de solução de informática: você bate na lateral da cpu. A tela começa a piscar. Você se sente hipnotizado. E então, tudo se apaga.",
                                                            opcoes: ["tentar acordar"],
                                                            regras: {
                                                                "tentar acordar": "senacscs.github.io/t2/gabriel/terceiro/jogo_texto/index.html",
                                                                "1": "senacscs.github.io/t2/gabriel/terceiro/jogo_texto/index.html",
                                                        },
                                                    },

													// 13- próxima fase
													{
														texto: "A próxima fase ainda está em desenvolvimento....",
																					   opcoes: ["voltar ao início"],
																					   regras: {
																						   "voltar ao início": 0,
																						   "1": 0,
																						   
																				   },
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
