const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;

inputComando.focus();

const historia = [
    { // 0 estágio 0
        texto:"seu nome é Brian e está em seu skyline gtr que está terminando o combustivel que você irá fazer?",
        // imagem:c:\Users\FABIOHERMESDASILVEIR\Documents\38ae8fccd109369f58d263ae919ea787.gif",
        opcoes:  ["1 - Continuar dirigindo", "2 - Parar o carro", "3 - Ligar o rádio"],
        regras: {
         "1": 1, // Ajuste para minúsculas
        "2": 0,  // Ajuste para minúsculas
        "3":0,  // Ajuste para minúsculas
        },
      },
  
      { // 1 estágio 1
        texto: " você continua e encontra um posto, que vai fazer?",
        // images/carroimg.gif",
        opcoes: ["2 - parar para abastecer seu veículo","1- ver e nem dar bola"],
        regras: {
          "1":1, // Índice do próximo estágio (você precisa criar esse estágio)
          "2":2,// Ajuste para minúsculas
        }
      },

      { // 2 estágio 2
        texto: "olha para os lados e não tem nem uma alma viva nesse posto",
        // imagem: images/imagem12.gif",
        opcoes: ["2 - Averiguar dentro do posto"," 1 - Por a Gasolina"],
        regras: {
          "2":3 ,//índice do próximo estágio(você precisa criar esse código)
          "1":0 ,// Ajuste para minúsculas
        }
      },

      { // 3 Novo estágio para "gritar por ajuda"
        texto:"Você vê um cara desacordado na loja de conveniencia. O que você faz?",
        opcoes: ["1 -sair dali mais rápido possílvel", "2 - chamar a policía"],
        regras:{
          "1":0,// Índice do próximo estágio (você precisa criar esse estágio)
          "2":4, // Ajuste para minúsculas: 5// Índice do próximo estágio (você precisa criar esse estágio)
        }
      },
      { // 4 Novo estágio para "gritar por ajuda"
        texto:". O que você faz?",
        opcoes: ["1 - Você fica esperando do lado do corpo até a polícia chegar", "2- aguardar a polícia","3- Ficar longe do corpo e aguardar a polícia chegar"],
        regras:{
          "1 - ":0,// Índice do próximo estágio (você precisa criar esse estágio)
          "2": 0,
          "3": 5,
           "4": 0,
        }
      },
      
    { // 5 Novo estágio para "gritar por ajuda"
      texto:"A policia chega no local e vê que o corpo está com uma marca de faca do lado do pescoço como vai explicar para ele como morreu?",
      opcoes:["1-Falar que estava diirigindo seu carro por ai e resolveu parar para abastecer no caminho com seu veículo e avistou o corpo no chão", "2-Falar que você encostou no corpo para ver oque aconteceu"],
      regras:{
        "1":6,// Índice do próximo estágio (você precisa criar esse estágio)
        "2":0,
        "3":0,
      }
    },
    { // 6 Novo estágio para "gritar por ajuda"
      texto:"O policial se chama Cleiton e te faz diversas perguntas que você vai fazer para que você não seja ?",
      opcoes:["1-Voltar para o carro", "2-Explorar a área"],
      regras:{
        "1":7,// Índice do próximo estágio (você precisa criar esse estágio)
        "2": 0,
      }
    },
    { // 7 Novo estágio para "gritar por ajuda"
      texto:"Você foi liberado do local onde foi o crime seu veiculo foi abastecido(Parabéns você terminou!!)",
      opcoes:["1-Voltar para o carro", "2-Explorar a área"],
      regras:{
       "1":1,
       "2":8,
      }
    },
{ // 8 Novo estágio para "gritar por ajuda"
  texto:"você resolveu explorar a área e encontrou um papel com preços médios da tarifa de energia elétrica do local nos cinco primeiros meses do ano. A planilha mostra os valores por mês, de janeiro a maio.janeiro R$173,00, Fevereiro R$113,58, Março R$ 145,67, Abril R$98,50, Maio R$123,60,Sua meta é fechar o semestre com um preço médio de R$ 130,00. Para alcançar a meta, o maior preço possível a pagar na tarifa do mês de junho, será de?",
  opcoes:["1-R$109,05","2-R$125,65","3-R$130,87","4-R$98,55"],
  regras:{
   "1":0,
   "2":9,
   "3":0,
   "4":0,
  }
},
]
{ // 9 Novo estágio 
  texto:"Parabéns você resolveuPara determinar o maior preço a ser pago para manter o preço médio na meta, devemos calcular a média aritmética nos seis meses. Chamando de X o preço a ser pago em junho, temos: \n 173,00 + 113,58 + 145,67 + 98,50 + 123,60 + x=130 \n 6 \n 654,35 + x= 130 \n 6\n 654,35 + x = 130.6 \n 654,35 + x + =780 \n 654,35 + x = 780 \n x=780 - 654,35 \n x=125,65\n Portanto o preço máximo a se pagar  na conta de junho é de R$125,65"
  Opcoes:[]
  regas:{

  }
}

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
