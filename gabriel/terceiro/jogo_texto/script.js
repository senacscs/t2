const areaTexto = document.getElementById("area-texto");
let estadoAtual = 0;
const inputComando = document.getElementById("input-comando");
window.onload = (evento) => {
	inputComando.focus();
}
const historia = [
	{
		texto: "Você acorda completamente assustado e sem entender o que aconteceu e onde está. Logo, você percebe que está literalmente dentro do notebook em que estava trabalhando, no meio de uma grande quantidade de peças de hardware. O que você faz?",
		opcoes: ["1. Continuar caminhando pelo computador", "2. Sair correndo e ir para fora do computador"],
		regras: {
			"continuar caminhando pelo computador": 1,
			"sair correndo e ir para fora do computador": 2,
			"1": 1,
			"2": 2,
		}
	},
	{
		texto: "Você começa a caminhar pelo computador, até que se depara com um arquivo chamado \"tese de doutorado geometria analítica.docx\". Você percebe que era o trabalho que você mais detestou fazer durante toda a sua vida e fica com raiva dele. O que você faz?",
		opcoes: ["1. Pisar em cima do arquivo para o corromper", "2. Esquecer a raiva do trabalho e continuar caminhando"],
		regras: {
			"pisar em cima do arquivo para o corromper": 3,
			"esquecer a raiva do trabalho e continuar caminhando": 4,
			"1": 3,
			"2": 4,
		}
	},
	{
		texto: "Ao ver onde está, você fica desesperado e começa a correr como louco para fora do computador, tentando a todo custo sair. Porém, você tropessa em uma peça aleatória do dispositivo e cai com a cara no chão. Você continua desesperadamente tentando sair, mas a movimentação interna das peças do computador, incluindo o giro do HD, o impede totalmente de sair. Você se perde e acaba girando tanto que cai, ficando preso dentro de uma peça do computador.",
		opcoes: ["1. Voltar ao início",],
		regras: {
			"voltar ao início": 0,
			"1": 0,
		}
	},
	{
		texto: "Você fica com muita raiva e começa a pisar no arquivo do trabalho sem parar. Você nota que o arquivo realmente começou a se corromper, mas isso não era tão bom quanto parecia. Quando o arquivo corrompido entra em contato com sua pele, você é eletrocutado.",
		opcoes: ["1. Voltar ao início",],
		regras: {
			"voltar ao início": 0,
			"1": 0,
		}
	},
	{
		texto: "Você conta até 3, respira um pouco e segue tranquilamente seu caminho pelas peças do computador, mesmo com todo o estresse que o trabalho te fez passar. De repente, você começa a ouvir um barulho muito alto e constante que começa a tomar todo o lugar. Logo depois, você perde praticamente toda a sua capacidade de movimento e fica simplesmente travado no lugar, conseguindo apenas dar pequenos passos e fazer pequenos movimentos. Para continuar caminhando, você deve dar ao computador um comando específico que o salvará. Qual é esse comando?",
		opcoes: ["1. Desligar o computador", "2. Control+alt+del"],
		regras: {
			"desligar o computador": 5,
			"control+alt+del": 6,
			"1": 5,
			"2": 6,
		}
	},
	{
		texto: "Desesperado, você não sabe ao certo o que fazer e, buscando sair daquele pesadelo e voltar à sua vida normal, você pede que o computador se desligue. No entanto, como você estava dentro do computador quando ele desligou e fazia parte do sistema, você simplesmente desaparece.",
		opcoes: ["1. Voltar ao início",],
		regras: {
			"voltar ao início": 0,
			"1": 0,
		}
	},
	{
		texto: "Com base nos seus conhecimentos técnicos, você se lembra de que a combinação de teclas control+alt+del geralmente é utilizada para recuperar sistemas operacionais em estado de travamento. Você, então, tem a grande ideia de falar em voz alta essa combinação de teclas, e realmente consegue recuperar o computador e ir para a tela de bloqueio. Você, então, consegue entrar no gerenciador de tarefas e encontra um processo estranho, depois o finaliza. Você percebe, então, que o computador parece estar infectado por algum vírus, já que o processo volta constantemente mesmo após ser finalizado. Você não vê muitas possibilidades de realmente parar o vírus, já que só consegue fazer alguma coisa quando o computador está na tela de bloqueio, então não consegue nem mesmo caminhar pelos arquivos e pastas sem que o computador trave. O que você faz para tentar livrar o computador do vírus e seguir seu caminho?",
		opcoes: ["1. Esperar parado para ver se o vírus para em algum momento", "2. Tentar fazer alguma coisa mesmo sem desbloquear o computador",],
		regras: {
			"esperar parado para ver se o vírus para em algum momento": 7,
			"Tentar fazer alguma coisa mesmo sem desbloquear o computador": 8,
			"1": 7,
			"2": 8,
		}
	},
	{
		texto: "Sem saber ao certo o que fazer, você apenas aguarda pacientemente para ver se o vírus que está no computador para de surtir efeito em algum momento. Aos poucos, porém, você nota que o vírus está usando muito processamento do computador, fazendo com que as ventoinhas girem muito rápido e deixando o lugar totalmente frio. Você, então, acaba ficando congelado dentro do computador.",
		opcoes: ["1. Voltar ao início",],
		regras: {
			"voltar ao início": 0,
			"1": 0,
		}
	},
	{
		texto: "Atenção! Durante seu percurso, você encontrou um desafio matemático. Para prosseguir, você precisa responder corretamente à seguinte questão: \"Quantas raízes tem o seguinte polinômio? X elevado a 4+2x^3+x^2-4x.\" Para responder, digite o número de raízes na caixa de texto.",
		opcoes: ["4", "2", "5", "10"],
		regras: {
			"2": 9,
			"4": 10,
			"5": 9,
			"10": 9,
		}
	},
	{
		texto: "Você errou a resposta! A resposta correta do desafio era 4, já que o grau do polinômio corresponde ao expoente mais alto presente na equação, neste caso o número 4.",
		opcoes: ["1. Voltar ao início"],
		regras: {
			"voltar ao início": 0,
			"1": 0,
		}
	},
	{
		texto: "Parabéns! Você acertou a resposta! A quantidade de raízes deste polinômio é 4, já que o maior expoente presente no polinômio é 4. Agora pode seguir seu caminho.",
		opcoes: ["1. Continuar a história",],
		regras: {
			"continuar a história": 11,
			"1": 11,
		}
	},
	{
		texto: "Apesar de estar em uma situação difícil e com saída improvável, você ainda acredita que apenas ficar parado é uma má ideia, já que provavelmente não surtirá efeito e os vírus de computador não param até que algo seja realmente feito para detê-los. Você, então, começa a caminhar pelas diversas partes internas do computador em que você está, procurando por alguma esperança ou solução. Você, então, percebe que o computador possui dois discos rígidos. Um é o disco c, onde o sistema Windows que está infectado com o vírus está rodando, e o outro é o disco d, que provavelmente não está infectado. Você imagina que a única saída possível é remover o disco infectado do computador, de modo que ele tente iniciar no segundo disco e comece a rodar em outro sistema, caso tenha um instalado. O que você faz?",
		opcoes: ["1. Remover o disco c do computador e ver o que acontece", "2. Desistir dessa ideia e procurar alguma outra solução"],
		regras: {
			"remover o disco c do computador e ver o que acontece": 12,
			"desistir dessa ideia e procurar alguma outra solução": 13,
			"1": 12,
			"2": 13,
		}
	},
	{
		texto: "Determinado a sair do computador infectado e voltar à sua vida normal, você decide remover o disco C que está infectado para tentar iniciar o computador no outro disco, o disco D. Porém, antes que você sequer possa entender o que realmente está acontecendo, você se dá conta do que fez: o disco D, na verdade, era apenas um pendrive com músicas, e não tinha nenhum sistema instalado. Você, então, continua dentro do computador, mas sem nenhum sistema rodando dentro dele, simplesmente desaparece.",
		opcoes: ["1. Voltar ao início",],
		regras: {
			"voltar ao início": 0,
			"1": 0,
		}
	},
	{
		texto: "Atenção! Você recebeu um outro enigma matemático para solucionar. Para prosseguir, você precisa responder corretamente à seguinte questão: \"Você está baixando um programa de edição de vídeos em seu computador e percebe que o download está demorando um pouco para terminar. Na página de downloads do seu navegador, você lê que o arquivo do instalador do programa possui 233 megabytes (mb). Ele também mostra que o arquivo está sendo baixado a 3,5 megabits por segundo (mb/s) e que já foram baixados 128mb. Sendo assim, quantos segundos faltam para que o download esteja completo?\" Para responder, digite o número de segundos na caixa de texto.",
		opcoes: ["32", "31", "34", "30",],
		regras: {
			"32": 14,
			"31": 14,
			"34": 14,
			"30": 15,
		}
	},
	{
		texto: "Você errou a resposta! Na verdade, a resposta correta é 30 segundos. Primeiro, temos que pegar o tamanho total do arquivo (233 mb) e subtrair 128, que é a quantidade que o navegador indica que já foi baixada. O resultado que temos é 105, ou seja, que faltam 105 mb a serem baixados do arquivo. Com base nisso, ignoramos os outros 128 mb que já foram baixados e apenas dividimos os 105 que faltam pela velocidade do download, que é 3,5 mb/s. Assim, 105mb dividido por 3,5mb/s é igual a 30s para completar o download.",
		opcoes: ["1. Voltar ao início",],
		regras: {
			"voltar ao início": 0,
			"1": 0,
		}
	},
	{
		texto: "Parabéns! Você acertou a resposta! Primeiro, temos que pegar o tamanho total do arquivo (233 mb) e subtrair 128, que é a quantidade que o navegador indica que já foi baixada. O resultado que temos é 105, ou seja, que faltam 105 mb a serem baixados do arquivo. Com base nisso, ignoramos os outros 128 mb que já foram baixados e apenas dividimos os 105 que faltam pela velocidade do download, que é 3,5 mb/s. Assim, 105mb dividido por 3,5mb/s é igual a 30s para completar o download. Agora pode seguir com a história!",
		opcoes: ["1. Continuar a história",],
		regras: {
			"continuar a história": 16,
			"1": 16,
		}
	},
	{
		texto: "Após pensar um pouco mais sobre essa solução que parecia tão milagrosa, você se dá conta de algo importante: o outro disco que estava no computador não tinha nenhum sistema instalado, mas sim apenas uma pasta de músicas. Assim, se você removesse o disco, o sistema desapareceria e levaria você junto com ele, já que você está dentro do sistema. Você, então, se lembra de que os computadores têm dispositivos de entrada e de saída. E se você tentasse procurar algum dispositivo de saída do computador e literalmente saísse de lá através dele? Parece uma ideia muito maluca, mas, já que você não sabe exatamente como se sai de dentro de um computador, você decide tentar. Mas, afinal, qual desses dispositivos que você pensou é de saída, não de entrada?",
		opcoes: ["1. Processador", "2. Teclado", "3. Mouse", "4. Alto-falante",],
		regras: {
			"processador": 17,
			"teclado": 18,
			"mouse": 19,
			"alto-falante": 20,
			"1": 17,
			"2": 18,
			"3": 19,
			"4": 20,
		}
	},
	{
		texto: "Esperançoso, você acredita que o processador seja o dispositivo de saída do computador e vai direto para ele. Porém, o processador não é nem um dispositivo de entrada e nem de saída, já que não é responsável diretamente pelo recebimento ou envio de dados, mas é a unidade central de processamento do computador. Agora que você errou o dispositivo, não tem mais a chance de tentar novamente.",
		opcoes: ["1. Voltar ao início",],
		regras: {
			"voltar ao início": 0,
			"1": 0,
		}
	},
	{
		texto: "Sem ter muita certeza de qual seria esse dispositivo, você tenta sair pelo teclado. Parece ser um dispositivo de saída, certo? Na verdade não! O teclado é um dispositivo de entrada, já que as informações passam de fora para dentro (você digita e depois disso o computador recebe as teclas digitadas, não é o computador que envia informações para o teclado). Assim, você não pode mais tentar novamente e fica preso dentro do computador.",
		opcoes: ["1. Voltar ao início",],
		regras: {
			"voltar ao início": 0,
			"1": 0,
		}
	},
	{
		texto: "Desesperado, você apenas decide ir para a primeira parte do computador que lhe vem à cabeça, o mouse. Porém, já que você foi muito apressado, o resultado acaba sendo diferente do que você esperava. O mouse, na verdade, é um dispositivo de entrada, já que as informações passam de fora para dentro. Você clica nos botões e é o computador que recebe a informação do mouse, não o mouse que recebe a informação do computador. Assim, você fica impossibilitado de sair do computador e não pode mais tentar novamente.",
		opcoes: ["1. Voltar ao início",],
		regras: {
			"voltar ao início": 0,
			"1": 0,
		}
	},
	{
		texto: "Com sua alta determinação em escapar daquele lugar para o qual você foi teletransportado e voltar à sua vida normal fora do mundo computadorizado, você pensa bastante sobre as aulas de informática que teve na escola e se lembra de que o dispositivo de saída é o alto-falante. Isso porque o alto-falante recebe o conteúdo dos áudios que deve reproduzir, como áudios do WhatsApp ou de vídeos do YouTube, e o envia ao meio externo, caracterizando-se como um dispositivo de saída. Parabéns, você chegou à última fase desta história e conseguiu escapar da sua nova vida digital!",
		opcoes: ["1. Ir para a próxima história",],
		regras: {
			"ir para a próxima história": "https://senacscs.github.io/t2/blank/terceiro/jogo_texto/",
			"1": 21,
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

function falarLeitor(conteudo) {
	let divLeitor = document.createElement("div");
	divLeitor.setAttribute("aria-live", "polite");
	divLeitor.classList.add("visually-hidden");
	document.body.appendChild(divLeitor);
	setTimeout(() => {
		divLeitor.innerHTML = conteudo;
		setTimeout(() => document.body.removeChild(divLeitor), 5000);
	}, 150);
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
		estadoAtual = regras[comando];
		mostrarTexto(estadoAtual);
		falarLeitor("Nova fase carregada. Pressione escape e depois control + home para ler a história");
			}
	} else {
		areaTexto.textContent += "\n\nComando inválido. Tente novamente.";
		falarLeitor("Comando inválido");
	}
}

inputComando.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		processarComando(inputComando.value.toLowerCase()); // Converte para minúsculas
		inputComando.value = "";
	}
});

mostrarTexto(estadoAtual);
