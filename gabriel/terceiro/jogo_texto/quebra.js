const textoDigitado = document.getElementById("texto-digitado");
const textoOriginal = textoDigitado.textContent;

// Divide o texto em linhas
const linhas = textoOriginal.split("\n");

// Limpa o conteúdo original do parágrafo
textoDigitado.textContent = "";

// Cria um span para cada linha e adiciona ao parágrafo
linhas.forEach((linha, index) => {
    const span = document.createElement("span");
    span.textContent = linha;
    span.style.animationDelay = `${index * 1}s`; // Atraso de 1 segundo para cada linha
    textoDigitado.appendChild(span);
});

setTimeout(function() {
    window.location.href = "index.html"; 
}, 100); 