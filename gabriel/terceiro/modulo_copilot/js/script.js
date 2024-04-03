function mostrarConteudo(nomeDiv, conteudo) {
	let div=document.getElementById(nomeDiv);
	div.innerHTML=conteudo;
	let screenReaderDiv=document.createElement("div");
	screenReaderDiv.classList.add("sr-only");
	screenReaderDiv.setAttribute("aria-live", "polite");
	document.body.appendChild(screenReaderDiv);
	setTimeout(() => {
		screenReaderDiv.innerHTML=conteudo;
		setTimeout(() => document.body.removeChild(screenReaderDiv), 5000);
	}, 150);
}
document.getElementById("formulario").addEventListener("submit", (event) => {
	event.preventDefault();
	const inputPosicaoX = document.getElementById('posicaoX');
	const posicaoX = parseFloat(inputPosicaoX.value);

	if (!isNaN(posicaoX)) {
		const valorAbsoluto = Math.abs(posicaoX);
		mostrarConteudo('resultado', `O valor absoluto da posição é ${valorAbsoluto.toFixed(2)}.`);
	} else {
		mostrarConteudo('resultado', 'Por favor, insira um número válido.');
	}
});