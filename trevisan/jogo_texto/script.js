
const areaTexto = document.getElementById("area-texto");
const inputComando = document.getElementById("input-comando");
let estadoAtual = 0;
inputComando.focus();

const historia = [
    { // 0 estágio 0
        texto: "Manu acordou com o primeiro raio de sol, sentindo a brisa fresca da manhã de sábado. Era dia de feira, e a ansiedade misturava-se com a expectativa de mais um dia de trabalho. Após preparar cuidadosamente seus produtos coloniais, ela partiu em direção ao centro da cidade, onde a feira já começava a ganhar vida. ",
        opcoes: ["1. Começar o dia de trabalho"],
        regras: {
          "1": 1, // Ajuste para minúscula
        }
      },
      { // 1 
        texto: "Chegando lá, Manu arrumou sua barraca com o cuidado de sempre. Queijos artesanais, doces caseiros, pães frescos e Linguiças artesanais, formando um mosaico de cores e sabores que atraía os olhares dos primeiros fregueses. Enquanto isso, do outro lado da feira, Raul terminava de desenvolver um site em sua casa. O trabalho lhe dera fome, e ele decidiu ir à feira comprar linguiça. Chegando lá, ele encontrou Manuela, uma jovem vendedora que estava começando seu negócio com muita esperança e dedicação.  — Bom dia, posso te ajudar? — perguntou Manuela com um sorriso gentil.  Raul, visivelmente impaciente e faminto, respondeu com desdém.  — Quero linguiça. Rápido, não tenho o dia todo.  Como Manuela reage à atitude de Raul?",
        opcoes: ["1. Manuela responde com calma e paciência.", "2. Manuela responde de forma grossa."],
        regras: {
          "1": 2,  // Índice do próximo estágio (você precisa criar esse estágio)
          "2": 3, // Volta para o primeiro estágio
          
        }
      },
      { // 2 
        texto: "Manu, embora surpresa com a atitude, manteve a calma e rapidamente preparou a linguiça para Raul. No momento do pagamento, Manu informa o valor que ficou de R$88,50, Raul inconformado com o valor, entrega uma nota de R$400, qual será o valor do troco que Manu deverá entregar para Raul?",
        opcoes: ["1. R$310,50", "2. R$311,50", "3. R$312", "4. R$312,50"],
        regras: {
          "1": 9, // Volta para o primeiro estágio
          "2": 4,
          "3": 9,
          "4": 9
        }
      },
      { // 3 
        texto: "Manuela ficou extremamante irritada com atitude de Raul, e o respondeu ao mesmo tom, No momento do pagamento, Manu informa o valor que ficou de R$88,50, Raul inconformado com o valor, entrega uma nota de R$400, qual será o valor do troco que Manu deverá entregar para Raul?",
        opcoes: ["1. R$310,50", "2. R$311,50", "3. R$312", "4. R$312,50"],
        regras: {
          "1": 9, 
          "2": 5,
          "3": 9,
          "4": 9
        }
      },
      { // 4 
        texto: "Manu, após entregar meracadoria e troco de Raul, responde calmamente agradeçendo sua compra e se despedindo, Raul vai embora virando das costas sem falar nada.",
        opcoes: ["1. Continuar suas vendas"],
        regras: {
          "1": 6 
        }
      },
      { // 5 
        texto: "Manu, ao entregar as coisa para Raul, joga todo seu dinheiro e mercadoria no chão obrigando Raul a pegar sua mercadoria e seu troco do chão. Após isso, Raul extremamante irritado sai da feira xingando até a mãe de Manuela, e Manu começa a rir da situação. " ,
        opcoes: ["1. Continuar suas vendas"],
        regras: {
          "1": 6 
        }
      },


      { // 6 
        texto: "Ao final de um longo dia de vendas, Manuela estava exausta, mas satisfeita com o resultado. Enquanto arrumava sua barraca, um rapaz calvo com barba se aproximou. Ele tinha um ar confiante e um sorriso estranho.  — Olá. Sou Rafael mais conhecido como Skyysphere. Sou DJ e estou organizando uma festa de música eletrônica AAAAAAA hoje à noite. Gostaria de te convidar. Acho que você vai gostar — disse ele, entregando um convite." ,      
        opcoes: ["1. Aceitar convite", "2. Recusar convite"],
        regras: {
          "1": 7,
          "2": 8 
        }
      },
      { // 7 
        texto: "Surpresa e um pouco curiosa, Manuela aceitou o convite. Mais tarde, já à noite, decidiu ir à festa para relaxar e se divertir um pouco. Chegando lá, a batida da música eletrônica preenchia o ambiente, e as luzes piscavam ritmicamente." ,      
        opcoes: ["1. Continuar história"],
        regras: {
          "1": 1 
        }
        
      },
      { // 8 
        texto: "Recusando o convite, Manu agradeçe, após virar de costas Rafael coloca seu convite dentro de casaco de Manuela e vai embora " ,      
        opcoes: ["1. Continuar história"],
        regras: {
          "1": 3 
        }
        
      },
      { // 9 
        texto: "" ,      
        opcoes: [""],
        regras: {
          "1": 1 
        }
        
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
