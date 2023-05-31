function map(valueIn, minIn, maxIn, minOut, maxOut) {
    return ((valueIn - minIn) / (maxIn - minIn)) * (maxOut - minOut) + minOut;
  }
  
  function retornarCorAleatoria(){
    return `#${Math.floor(Math.random()*256*256*256 - 1).toString(16)}55`;
  }
  
  function createGrid(divGrid, qtdeLinhas, qtdeColunas, paramOpcoes) {
    const opcoes = {
      habilitarDiagonais: true,
      habilitarPalavrasInvertidas: true,
      habilitarPalavrasInvertidasEmDiagonais: true,
      ...paramOpcoes,
    };
  
    let listaPalavras = [];
  
    let gridLetras = [];
  
    let selecaoAtual = {
      indiceInicialX: undefined,
      indiceInicialY: undefined,
      posicaoInicialX: undefined,
      posicaoInicialY: undefined,
      cor: retornarCorAleatoria()
    };
  
    const gerarLetraAleatoria = () => {
      const indiceLetra = Math.floor(Math.random() * 26);
      return String.fromCharCode(65 + indiceLetra);
    };
  
    const inicializar = () => {
      for (let linha = 0; linha < qtdeLinhas; linha++) {
        gridLetras[linha] = [];
        for (let coluna = 0; coluna < qtdeColunas; coluna++) {
          gridLetras[linha][coluna] = {
            letra: gerarLetraAleatoria(),
            ehFixa: false,
          };
        }
      }
    };
  
    const verificarOrientacaoValida = (orientacao) => {
      if (!opcoes.habilitarDiagonais && [1, 3, 5, 7].includes(orientacao)) {
        return false;
      }
      if (
        !opcoes.habilitarPalavrasInvertidas &&
        [0, 5, 6, 7].includes(orientacao)
      ) {
        return false;
      }
      if (
        !opcoes.habilitarPalavrasInvertidasEmDiagonais &&
        [5, 7].includes(orientacao)
      ) {
        return false;
      }
  
      return true;
    };
  
    const verificarSeCabeNoGrid = ({ xFinal, yFinal }) => {
      return (
        xFinal >= 0 && xFinal < qtdeColunas && yFinal >= 0 && yFinal < qtdeLinhas
      );
    };
  
    const verificarSeCelulaEstaDisponivel = (iColuna, iLinha, letraPalavra) => {
      const celula = gridLetras[iLinha][iColuna];
      return !celula.ehFixa || celula.letra === letraPalavra;
    };
  
    const verificarSeCelulasEstaoDisponiveis = (posicao) => {
      const { palavra, xInicial, yInicial, xFinal, yFinal } = posicao;
      let flagCelulasDisponiveis = true;
      for (let indice = 0; indice < palavra.length; indice++) {
        const xAtual = map(indice, 0, palavra.length - 1, xInicial, xFinal);
        const yAtual = map(indice, 0, palavra.length - 1, yInicial, yFinal);
        if (!verificarSeCelulaEstaDisponivel(xAtual, yAtual, palavra[indice])) {
          flagCelulasDisponiveis = false;
          return;
        }
      }
      return flagCelulasDisponiveis;
    };
  
    const retornarXFinal = (xInicial, larguraPalavra, orientacao) => {
      switch (orientacao) {
        case 0: // Direção (relógio): 12h00
        case 4: // Direção (relógio): 06h00
          return xInicial;
  
        case 1: // Direção (relógio): 01h30
        case 2: // Direção (relógio): 03h00
        case 3: // Direção (relógio): 04h30
          return xInicial + larguraPalavra - 1;
  
        case 5: // Direção (relógio): 07h30
        case 6: // Direção (relógio): 09h00
        case 7: // Direção (relógio): 10h30
          return xInicial - larguraPalavra + 1;
      }
    };
  
    const retornarYFinal = (yInicial, larguraPalavra, orientacao) => {
      switch (orientacao) {
        case 2: // Direção (relógio): 03h00
        case 6: // Direção (relógio): 09h00
          return yInicial;
  
        case 0: // Direção (relógio): 12h00
        case 1: // Direção (relógio): 01h30
        case 7: // Direção (relógio): 10h30
          return yInicial - larguraPalavra + 1;
  
        case 3: // Direção (relógio): 04h30
        case 4: // Direção (relógio): 06h00
        case 5: // Direção (relógio): 07h30
          return yInicial + larguraPalavra - 1;
      }
    };
  
    const listarPosicoesPossiveis = (palavra) => {
      let listaPosicoes = [];
  
      for (let orientacao = 0; orientacao < 8; orientacao++) {
        if (verificarOrientacaoValida(orientacao)) {
          for (let xInicial = 0; xInicial < qtdeColunas; xInicial++) {
            for (let yInicial = 0; yInicial < qtdeLinhas; yInicial++) {
              const posicao = {
                palavra,
                xInicial,
                yInicial,
                xFinal: retornarXFinal(xInicial, palavra.length, orientacao),
                yFinal: retornarYFinal(yInicial, palavra.length, orientacao),
                palavraEstaCirculada: false,
                cor: retornarCorAleatoria()
              };
  
              if (
                verificarSeCabeNoGrid(posicao) &&
                verificarSeCelulasEstaoDisponiveis(posicao)
              ) {
                listaPosicoes.push(posicao);
              }
            }
          }
        }
      }
  
      return listaPosicoes;
    };
  
    const adicionarPalavraNaPosicao = (posicao) => {
      const { palavra, xInicial, yInicial, xFinal, yFinal } = posicao;
      for (let indice = 0; indice < palavra.length; indice++) {
        const xAtual = map(indice, 0, palavra.length - 1, xInicial, xFinal);
        const yAtual = map(indice, 0, palavra.length - 1, yInicial, yFinal);
        gridLetras[yAtual][xAtual] = {
          letra: palavra[indice],
          ehFixa: true,
        };
      }
      listaPalavras.push(posicao);
    };
  
    const adicionarPalavra = (palavra) => {
      if (!palavra) {
        return `Informe uma palavra válida.`;
      }
      if (listaPalavras.find(obj => obj.palavra === palavra.toUpperCase())) {
        return `Esta palavra já existe no caça-palavras.`;
      }
      if (palavra.length > Math.max(qtdeLinhas, qtdeColunas)) {
        return `A palavra '${palavra}' não cabe no caça-palavras.`;
      }
      const listaPosicoes = listarPosicoesPossiveis(palavra.toUpperCase());
      if (listaPosicoes.length === 0) {
        return ( 
          `Não foi encontrada nenhuma posição disponível para a palavra '${palavra}' no caça-palavras.`
        );
      }
      const indiceRandom = Math.floor(Math.random() * listaPosicoes.length);
      adicionarPalavraNaPosicao(listaPosicoes[indiceRandom]);
    };
  
    const circularPalavra = (palavra) => {
      if (!palavra) {
        throw new Error(`Informe uma palavra válida.`);
      }
      let objPalavra = listaPalavras.find(
        (p) => p.palavra === palavra.toUpperCase()
      );
      if (!objPalavra) {
        throw new Error(
          `A palavra '${palavra}' não foi encontrada no caça-palavras.`
        );
      }
      if(objPalavra.palavraEstaCirculada){
        objPalavra.palavraEstaCirculada = false;
      }
      else{
        objPalavra.palavraEstaCirculada = true;
        objPalavra.cor = retornarCorAleatoria();
      }
    };
  
    const retornarOrientacao = ({ xInicial, yInicial, xFinal, yFinal }) => {
      if (xFinal === xInicial && yFinal < yInicial) return 0;
      if (xFinal > xInicial && yFinal < yInicial) return 1;
      if (xFinal > xInicial && yFinal === yInicial) return 2;
      if (xFinal > xInicial && yFinal > yInicial) return 3;
      if (xFinal === xInicial && yFinal > yInicial) return 4;
      if (xFinal < xInicial && yFinal > yInicial) return 5;
      if (xFinal < xInicial && yFinal === yInicial) return 6;
      if (xFinal < xInicial && yFinal < yInicial) return 7;
    };
  
    const atualizarGrid = () => {
      divGrid.innerHTML = "";
      gridLetras.forEach((linha, indiceY) => {
        const divLinha = document.createElement("div");
        divLinha.classList.add("grid-linha");
        linha.forEach((celula, indiceX) => {
          const divCelula = document.createElement("div");
          divCelula.classList.add("grid-celula");
          divCelula.setAttribute("data-indice-x", indiceX);
          divCelula.setAttribute("data-indice-y", indiceY);
  
          const divLetra = document.createElement("div");
          divLetra.classList.add("grid-letra");
          if (celula.ehFixa) divLetra.classList.add("grid-letra-fixa");
          divLetra.innerText = celula.letra;
          divCelula.appendChild(divLetra);
          divLinha.appendChild(divCelula);
        });
        divGrid.appendChild(divLinha);
      });
    };
  
    const retornarCoordenadasCelula = (celulaX, celulaY) => {
      if(celulaX === undefined
        || celulaY === undefined
        || celulaX < 0 
        || celulaX >= qtdeColunas 
        || celulaY < 0 
        || celulaY >= qtdeLinhas){
        throw new Error(`Célula[${celulaX}][${celulaY}] não encontrada.`)
      }
      const { left: gridLeft, top: gridTop } = divGrid.getBoundingClientRect();
      const indice = celulaY * qtdeColunas + celulaX;
      const celula = document.querySelectorAll(".grid-celula")[indice];
      if(!celula){
        throw new Error(`Célula não encontrada.`)
      }
      let { left, top, width } = celula.getBoundingClientRect();
      return {
        left: parseInt(left - gridLeft + width / 2 + celulaX*0.2 - 1),
        top: parseInt(top - gridTop + width / 2 + celulaY*0.2 - 1)
      };
    };
  
    const desenharSelecao = (contexto, inicial, final, orientacao, cor) => {
      const rotacaoInicial = (orientacao * Math.PI) / 4.0;
      const rotacaoFinal = rotacaoInicial + Math.PI;
      const espessura = 8
      
      contexto.fillStyle = cor;
      contexto.lineWidth = 1;
  
      contexto.beginPath();
      if(inicial.left === final.left && inicial.top === final.top){
        contexto.ellipse(inicial.left, inicial.top, espessura, espessura, 0, 0, 2*Math.PI);
      }
      else{
        contexto.ellipse(inicial.left, inicial.top, espessura, espessura, rotacaoInicial, 0, Math.PI);
        contexto.ellipse(final.left, final.top, espessura, espessura, rotacaoFinal, 0, Math.PI);
      }
      contexto.fill();
    }
  
    const selecionarPalavra = (contexto, objPalavra, cor) => {
      const { xInicial, yInicial, xFinal, yFinal } = objPalavra;
      const inicial = retornarCoordenadasCelula(xInicial, yInicial);
      const final = retornarCoordenadasCelula(xFinal, yFinal);
  
      const orientacao = retornarOrientacao(objPalavra);
  
      desenharSelecao(contexto, inicial, final, orientacao, cor);
    };
  
    const atualizarPalavrasSelecionadas = () => {
      const canvas = document.createElement("canvas");
      canvas.classList.add("canvas-selecao-palavras");
      const rectGrid = divGrid.getBoundingClientRect();
      canvas.setAttribute("width", rectGrid.width);
      canvas.setAttribute("height", rectGrid.height);
      const ctx = canvas.getContext("2d");
  
      listaPalavras.forEach((objPalavra) => {
        if (objPalavra.palavraEstaCirculada) {
          selecionarPalavra(ctx, objPalavra, objPalavra.cor);
        }
      });
  
      const {
        indiceInicialX: xInicial, 
        indiceInicialY: yInicial,
        indiceFinalX: xFinal, 
        indiceFinalY: yFinal,
        cor
      } = selecaoAtual
  
      if(xInicial !== undefined 
        && yInicial !== undefined
        && xFinal !== undefined
        && yFinal !== undefined){
          const posicaoPalavra = { 
            xInicial, 
            yInicial, 
            xFinal, 
            yFinal
          };
          selecionarPalavra(ctx, posicaoPalavra, cor);
        }
      else if(xFinal !== undefined
          && yFinal !== undefined){
            const posicaoPalavra = { 
              xInicial: xFinal, 
              yInicial: yFinal, 
              xFinal, 
              yFinal
            };
            selecionarPalavra(ctx, posicaoPalavra, cor);
          }
  
      divGrid.appendChild(canvas);
    };
  
    const atualizarListaPalavras = () => {
      const ulListaPalavras = document.querySelector('.lista-palavras');
      ulListaPalavras.innerHTML = '';
      
      listaPalavras.sort().forEach(objPalavra => {
        const liPalavra = document.createElement('li');
        liPalavra.classList.add('item-palavra');
        if(objPalavra.palavraEstaCirculada){
          liPalavra.classList.add('item-palavra-encontrada');
        } 
        liPalavra.innerText = objPalavra.palavra;
        ulListaPalavras.appendChild(liPalavra);
      });
  
      /*ulListaPalavras.addEventListener("click", function(event) {
        if (event.target && event.target.matches("li.item-palavra")) {
            console.log(event.target.innerText)
            circularPalavra(event.target.innerText)
          }
      });*/
    };
  
    const atualizarGridNoDOM = () => {
      atualizarGrid();
      atualizarPalavrasSelecionadas();
      atualizarListaPalavras();
    };
  
    const retornarCoordenadasCelulaMaisProximaMouse = (
      mouseX,
      mouseY,
      inicioSelecao
    ) => {
      const divGrid = document.querySelector(".grid-caca-palavras");
      rectGrid = divGrid.getBoundingClientRect();
      let coordMaisProxima = { indiceX: -1, indiceY: -1, distancia: 10000 };
  
      divGrid.querySelectorAll(".grid-celula").forEach((divCelula) => {
        const indiceX = parseInt(divCelula.getAttribute("data-indice-x"));
        const indiceY = parseInt(divCelula.getAttribute("data-indice-y"));
        const celula = retornarCoordenadasCelula(indiceX, indiceY);
        const {indiceInicialX: inicialX, indiceInicialY: inicialY} = selecaoAtual
        if (
          inicioSelecao ||
          inicialX === indiceX ||
          inicialY === indiceY ||
          Math.abs(inicialX - indiceX) === Math.abs(inicialY - indiceY)
        ) {
          const distX = Math.abs(celula.left - mouseX);
          const distY = Math.abs(celula.top - mouseY);
          const distancia = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
          if (distancia < coordMaisProxima.distancia) {
            coordMaisProxima = { indiceX, indiceY, distancia };
          }
        }
      });
  
      return coordMaisProxima;
    };
  
    const circularPalavraMouse = (mouseX, mouseY, isMouseDown) => {
      const coord = retornarCoordenadasCelulaMaisProximaMouse(mouseX, mouseY, inicioSelecao = !isMouseDown);
      selecaoAtual = {
        ...selecaoAtual,
        indiceFinalX: coord.indiceX,
        indiceFinalY: coord.indiceY
      }
    };
  
    const iniciarSelecaoPalavraMouse = (mouseX, mouseY) => {
      const coord = retornarCoordenadasCelulaMaisProximaMouse(mouseX, mouseY, inicioSelecao = true);
      selecaoAtual = {
        ...selecaoAtual,
        indiceInicialX: coord.indiceX,
        indiceInicialY: coord.indiceY,
        posicaoInicialX: coord.celulaX,
        posicaoInicialY: coord.celulaY
      }
    };
  
    const finalizarSelecaoPalavraMouse = (mouseX, mouseY) => {
      const coord = retornarCoordenadasCelulaMaisProximaMouse(mouseX, mouseY, inicioSelecao = false);
      const selecao = {
        inicialX: selecaoAtual.indiceInicialX,
        inicialY: selecaoAtual.indiceInicialY,
        finalX: coord.indiceX, 
        finalY: coord.indiceY,
        cor: selecaoAtual.cor
      }
      
      listaPalavras.forEach((objPalavra) => {
        const { xInicial, yInicial, xFinal, yFinal } = objPalavra;
        if(!objPalavra.palavraEstaCirculada
          && 
          (
            (
              selecao.inicialX === xInicial 
              && selecao.inicialY === yInicial
              && selecao.finalX === xFinal 
              && selecao.finalY === yFinal
            )
            || 
            (
              selecao.inicialX === xFinal 
              && selecao.inicialY === yFinal
              && selecao.finalX === xInicial 
              && selecao.finalY === yInicial
            )
          )
        ){
          objPalavra.palavraEstaCirculada = true;
          objPalavra.cor = selecao.cor;
        }
      });
  
      selecaoAtual = {
        indiceInicialX: undefined,
        indiceInicialY: undefined,
        posicaoInicialX: undefined,
        posicaoInicialY: undefined,
        cor: retornarCorAleatoria()
      };
    };
  
    const limparSelecaoMouse = () => {
      selecaoAtual = {
        indiceInicialX: undefined,
        indiceInicialY: undefined,
        posicaoInicialX: undefined,
        posicaoInicialY: undefined,
        cor: retornarCorAleatoria()
      };
    };
  
    return {
      inicializar,
      adicionarPalavra,
      circularPalavra,
      atualizarGridNoDOM,
      circularPalavraMouse,
      iniciarSelecaoPalavraMouse,
      finalizarSelecaoPalavraMouse,
      limparSelecaoMouse
    };
  }
  
  const divGrid = document.querySelector(".grid-caca-palavras");
  const grid = createGrid(divGrid, 15, 15, { habilitarPalavrasInvertidas: false });
  
  function setup() {
    grid.inicializar();
    const listaPalavras = [
      "ALGORITMO",
      "LINGUAGEM",
      "CÓDIGO",
      "BINÁRIO",
      "BUG",
      "FRAMEWORK",
      "BACKUP",
      "CLASSE",
      "CONSOLE",
      "INSTÂNCIA",
      "OBJETO",
      "HERANÇA",
      "PROGRAMAÇÃO",
      "BACKEND",
      "FRONTEND",
      "FULLSTACK",
      "SOFTWARE",
      "API",
      "ARRAY",
      "DEV"
    ];
  
    listaPalavras.forEach((palavra, indice) => {
      grid.adicionarPalavra(palavra);
      //if(indice < 10) grid.circularPalavra(palavra);
    });
  
    const {left: gridLeft, top: gridTop} = divGrid.getBoundingClientRect();
    let isMouseDown = false;
  
    document.body.addEventListener("mousemove", ({clientX, clientY, target}) => {
      if(target.classList.contains('canvas-selecao-palavras')){
        grid.circularPalavraMouse(clientX - gridLeft, clientY - gridTop, isMouseDown);
      }
      else{
        grid.limparSelecaoMouse();
      }
    });
  
    divGrid.addEventListener("mousedown", ({clientX, clientY}) => {
      isMouseDown = true;
      grid.iniciarSelecaoPalavraMouse(clientX - gridLeft, clientY - gridTop);
    });
  
    document.body.addEventListener("mouseup", ({clientX, clientY}) => {
      isMouseDown = false
      grid.finalizarSelecaoPalavraMouse(clientX-gridLeft, clientY-gridTop);
    });
  }
  
  function loop() {
    grid.atualizarGridNoDOM();
  }
  
  setup();
  
  loop();
  
  const loopInterval = setInterval(() => {
    loop();
  }, 50);
  
  
  const divMensagemErro = document.querySelector(".mensagem-erro-palavra");
  
  document.querySelector('.btn-cadastrar-palavra').addEventListener("click", () => {
    const novaPalavra = document.querySelector('.input-palavra').value;
  
    if(!novaPalavra){
      divMensagemErro.classList.add('active');
      divMensagemErro.innerText = 'Palavra inválida.';
      return;
    }
  
    if(novaPalavra.length > 15){
      divMensagemErro.classList.add('active');
      divMensagemErro.innerText = 'A palavra não pode ultrapassar 15 caracteres.';
      return;
    }
    
    const mensagemErro = grid.adicionarPalavra(novaPalavra);
    
  
  
    if(mensagemErro){
      divMensagemErro.classList.add('active');
      divMensagemErro.innerText = mensagemErro;
      return;
    }
  
    divMensagemErro.classList.remove('active');
    document.querySelector('.input-palavra').value = '';
  })