document.addEventListener('DOMContentLoaded', (event) => {
  const areaTexto = document.getElementById("area-texto");
  const inputComando = document.getElementById("input-comando");
  let estadoAtual = 0;

  inputComando.focus();

  const bemvindo = `
### ##   ### ###  ##   ##           ### ###    ####   ###  ##  ### ##    ## ##   
 ##  ##   ##  ##   ## ##             ##  ##     ##      ## ##   ##  ##  ##   ##  
 ##  ##   ##      # ### #            ##  ##     ##     # ## #   ##  ##  ##   ##  
 ## ##    ## ##   ## # ##            ##  ##     ##     ## ##    ##  ##  ##   ##  
 ##  ##   ##      ##   ##            ### ##     ##     ##  ##   ##  ##  ##   ##  
 ##  ##   ##  ##  ##   ##             ###       ##     ##  ##   ##  ##  ##   ##  
### ##   ### ###  ##   ##              ##      ####   ###  ##  ### ##    ## ##                                                                                   
`
    ;

  const fim = ``
  const historia = [
    { // 0 
      texto: "Você está em uma floresta. O que você faz? Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem \n Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem \n Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem \n Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem \n Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ",
      // texto: bemvindo,
      opcoes: ["1 - Ir para o norte", "Ir para o sul", "Gritar por ajuda", "Site"],
      regras: {
        "Ir para o norte": 1, // Ajuste para minúsculas
        "1": 1, // Ajuste para minúsculas
        "ir pro norte": 1, // Ajuste para minúsculas
        "ir para o sul": 2,   // Ajuste para minúsculas
        "gritar por ajuda": 3,  // Ajuste para minúsculas
        "cafezinho": 4,  // Ajuste para minúsculas
        "site": "https://www.google.com",
      }
    },
    { // 1 
      texto: "Você segue para o norte e encontra um caminho estreito. O que você faz?",
      opcoes: ["Seguir o caminho", "Voltar para a floresta"],
      regras: {
        "seguir o caminho": 4,  // Índice do próximo estágio (você precisa criar esse estágio)
        "voltar para a floresta": 0 // Volta para o primeiro estágio
      }
    },
    { // 2 
      texto: "Não pode, vai pro norte ou grite",
      opcoes: ["Voltar para a floresta"],
      regras: {
        "voltar para a floresta": 0 // Volta para o primeiro estágio
      }
    },
    { // 3 
      texto: "AHHHHHHHHHHHHHHHHHHHHH",
      opcoes: ["Voltar para a floresta", "Gritar por ajuda"],
      regras: {
        "voltar para a floresta": 0,  // Índice do próximo estágio (você precisa criar esse estágio)
        "gritar por ajuda": 3 // Volta para o primeiro estágio
      }
    },
    { // 4
      texto: "Parabéns, você encontrou o tesouro!",
      opcoes: ["Voltar para a floresta", "Gritar por ajuda"],
      regras: {
        "voltar para a floresta": 0 // Volta para o primeiro estágio
      }
    },
    // ... (adicione mais estágios da história aqui)
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
    comando = comando.trim().toLowerCase();
    const regras = historia[estadoAtual].regras;

    let opcaoValida = false;
    if (historia[estadoAtual].opcoes) {
      for (let i = 0; i < historia[estadoAtual].opcoes.length; i++) {
        const opcao = historia[estadoAtual].opcoes[i].toLowerCase();
        if (comando === opcao || comando === (i + 1).toString()) {
          opcaoValida = true;
          break;
        }
      }
    }

    if (opcaoValida && comando in regras) {
      const destino = regras[comando];
      if (typeof destino === 'string') {
        window.location.href = destino;
      } else {
        estadoAtual = destino;
        mostrarTexto(estadoAtual);
        falarLeitor("Nova fase carregada. Pressione escape e depois control + home para ler a história");
      }
    } else {
      areaTexto.textContent += "\n\nComando inválido. Tente novamente.";
      falarLeitor("Nova fase carregada. Pressione escape e depois control + home para ler a história");
    }
  }

  inputComando.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      processarComando(inputComando.value.toLowerCase()); // Converte para minúsculas
      inputComando.value = "";
    }
  });

  mostrarTexto(estadoAtual);
});
