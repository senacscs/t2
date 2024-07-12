const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;
inputComando.focus();

const historia = [
	{
		texto: "avenida movimentada, o Bit Bunker brilha como um oásis de luzes vibrantes e sons eletrizantes. Conhecido por sua atmosfera animada e pela vasta coleção de jogos viciantes que cativam jogadores de todas as idades. É o ponto de encontro para entusiastas de jogos que buscam experiências imersivas e adrenalina pura. Seja durante o dia agitado ou à noite, suas portas abertas convidam todos a mergulharem em um mundo de c      p        ão      s m       f      m.\"" +
		"Você quer jogar comigo?",
		opcoes: ["jogar"],
		regras: {
			"jogar": 1,
			"1": 1,
		}
	},
	{
		texto: "O som do sino anunciando a chegada de alguém toca, a porta se fecha e a cacofonia do ambiente exterior cessa. O ambiente está deserto. A única iluminação provém das luzes coloridas das máquinas que estão ligadas.\"" +
		"Você considera que o fliperama poderia estar fechado, mas na porta a placa indicava o contrário.",
		opcoes: ["sair do fliperama", "observar melhor o ambiente"],
		regras: {
			"sair do fliperama": 3,
			"observar melhor o ambiente": 4,
			"1": 3,
			"2": 4,
		}
	},
	// {
	// 	texto: "Ao ver onde está, você fica desesperado e começa a correr como louco para fora do computador, tentando a todo custo sair. Porém, você tropessa em uma peça aleatória do dispositivo e cai com a cara no chão. Você continua desesperadamente tentando sair, mas a movimentação interna das peças do computador, incluindo o giro do HD, o impede totalmente de sair. Você não vê alternativa a não ser continuar lá.",
	// 	opcoes: ["voltar para o início",],
	// 	regras: {
	// 		"voltar para o início": 0,
	// 		"1": 0,
	// 	}
	// },
	// {
	// 	texto: "Você fica com muita raiva e começa a pisar no arquivo do trabalho sem parar. Você nota que o arquivo realmente começou a se corromper, mas isso não era tão bom quanto parecia. Quando o arquivo corrompido entra em contato com sua pele, você é atingido por um choque elétrico e morre.",
	// 	opcoes: ["Voltar para o início",],
	// 	regras: {
	// 		"voltar para o início": 0,
	// 		"1": 0,
	// 	}
	// },
	// {
	// 	texto: "Você conta até 3, respira um pouco e segue tranquilamente seu caminho pelas peças do computador, mesmo com todo o estresse que o trabalho te fez passar. De repente, você começa a ouvir um barulho muito alto e constante que começa a tomar todo o lugar. Logo depois, você perde toda a sua capacidade de movimento e fica simplesmente travado no lugar. Para continuar caminhando, você deve dar ao computador um comando específico que o salvará. Qual é esse comando?",
	// 	opcoes: ["desligar o computador", "control+alt+del"],
	// 	regras: {
	// 		"desligar o computador": 5,
	// 		"control+alt+del": 6,
	// 		"1": 5,
	// 		"2": 6,
	// 	}
	// },
	// {
	// 	texto: "Desesperado, você não sabe ao certo o que fazer e, buscando sair daquele pesadelo e voltar à sua vida normal, você pede que o computador se desligue. No entanto, como você estava dentro do computador quando ele desligou e fazia parte do sistema, você simplesmente desaparece.",
	// 	opcoes: ["voltar para o início",],
	// 	regras: {
	// 		"voltar para o início": 0,
	// 		"1": 0,
	// 	}
	// },
	// {
	// 	texto: "Com base nos seus conhecimentos técnicos, você se lembra de que a combinação de teclas control+alt+del geralmente é utilizada para recuperar sistemas operacionais em estado de travamento. Você, então, tem a grande ideia de falar em voz alta essa combinação de teclas, e realmente consegue recuperar o computador e ir para a tela de bloqueio. Você, então, consegue entrar no gerenciador de tarefas e encontra um processo estranho, finalizando-o. Você percebe, então, que o computador parece estar infectado por algum vírus, já que o processo volta constantemente e, quando você desbloqueia o computador, ele trava novamente. O que você faz para tentar livrar o computador do vírus e seguir seu caminho?",
	// 	opcoes: ["esperar parado para ver se o vírus para em algum momento", "instalar um disco de resgate com um pendrive bootável",],
	// },
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
