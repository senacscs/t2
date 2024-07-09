function mostrarConteudo(nomeDiv, conteudo) {
	let div=document.getElementById(nomeDiv);
	div.innerHTML=conteudo;
	let screenReaderDiv=document.createElement("div");
	screenReaderDiv.setAttribute("aria-live", "polite");
	screenReaderDiv.classList.add("sr-only");
	document.body.appendChild(screenReaderDiv);
	setTimeout(() => {
		screenReaderDiv.innerHTML=conteudo;
		setTimeout(() => document.body.removeChild(screenReaderDiv), 5000);
	}, 150);
}
function olaMundo() {
	mostrarConteudo("mostrar-olamundo", "Olá mundo!");
}
function numeroDigitado(evt) {
	let numeroDigitado=document.getElementById("numero").value;
	mostrarConteudo("mostrar-numerodigitado", `O número que você digitou foi ${numeroDigitado}!`);
	evt.preventDefault();
}
function idade(evt) {
	let idade=document.getElementById("idade").value;
let texto;
	if(idade >= 18) {
		texto="Você é maior de idade!";
	}
	else {
		texto="Você é menor de idade.";
	}
	mostrarConteudo("mostrar-idade", texto);
	evt.preventDefault();
}
function mediaFinal(evt) {
	let nome=document.getElementById("nome").value;
	let nota1=parseInt(document.getElementById("nota1").value);
	let nota2=parseInt(document.getElementById("nota2").value);
	let nota3=parseInt(document.getElementById("nota3").value);
	let media=(nota1+nota2+nota3)/3;
	let mediaArredondada=Math.round(media, 2);
	let texto;
	if(mediaArredondada>=6) {
		texto=`Muito bem, ${nome}! Você foi aprovado, com uma média de ${mediaArredondada}!`;
	}
	else {
		texto=`Que pena, ${nome}! Parece que você acabou sendo reprovado, com uma média de ${mediaArredondada}. Tente melhorar da próxima vez!`;
	}
	mostrarConteudo("mostrar-mediafinal", texto);
	evt.preventDefault();
}
function multiplo(evt) {
	let numeroVerificado=document.getElementById("numero-verificado").value;
	let numeroADividir=document.getElementById("numero-a-dividir").value;
	let resto=numeroVerificado%numeroADividir;
	let texto;
	if(resto==0) {
		texto=`O número ${numeroVerificado} é múltiplo de ${numeroADividir}!`
	}
	else {
		texto=`O número ${numeroVerificado} não é múltiplo de ${numeroADividir}.`
	}
	mostrarConteudo("mostrar-multiplo", texto);
	evt.preventDefault();
}
function vogal(evt) {
	let listaVogais=["a", "e", "i", "o", "u"];
	let letraDigitada=document.getElementById("letra").value;
	let texto;
	let letraVogal=false;
	for(let vogal of listaVogais) {
		if(vogal==letraDigitada) {
			letraVogal=true;
		}
	}
	if(isNaN(letraDigitada)==false) {
		texto="Você digitou um número ao invés de uma letra!";
	}
	else if(!letraDigitada.match(/[a-z]/i)) {
		texto="Você deve digitar uma letra, não sinais!"
	}
	else if(letraVogal) {
		texto=`A letra ${letraDigitada} é uma vogal!`
	}
	else {
		texto=`A letra ${letraDigitada} não é uma vogal.`
	}
	mostrarConteudo("mostrar-vogal", texto);
	evt.preventDefault();
}
function miniCalculadora(evt) {
	let operando1=parseInt(document.getElementById("operando1").value);
	let operando2=parseInt(document.getElementById("operando2").value);
	let operacao=document.getElementById("operacao").value;
	let resultado;
	if(operacao=="+") {
		resultado=operando1+operando2;
	}
	else if(operacao=="-") {
		resultado=operando1-operando2;
	}
	else if(operacao=="*") {
		resultado=operando1*operando2;
	}
	else if(operacao=="/") {
		resultado=operando1/operando2;
	}
	mostrarConteudo("mostrar-minicalculadora", `O resultado da operação foi ${resultado}.`);
	evt.preventDefault();
}
function trocaVariaveis(evt) {
	let texto1=document.getElementById("texto1").value;
	let texto2=document.getElementById("texto2").value;
	let texto1Temp=texto1;
	texto1=texto2;
	texto2=texto1Temp;
	document.getElementById("texto1").value=texto1;
	document.getElementById("texto2").value=texto2;
	mostrarConteudo("mostrar-trocavariaveis", "Os textos foram trocados entre os 2 campos.");
	evt.preventDefault();
}
function contagemRegressiva(evt) {
	let numeroInicial=document.getElementById("numero-inicial").value;
	let tempoContagem=document.getElementById("tempo-contagem").value;
	let tempoMs=tempoContagem*1000;
	function mudaContagem(numeroAtual) {
		if(numeroAtual>0) {
		document.getElementById("mostrar-contagemregressiva").innerHTML=`${numeroAtual},`;
		setTimeout(() => mudaContagem(numeroAtual-1), tempoMs);
		}
		else {
			document.getElementById("mostrar-contagemregressiva").innerHTML=numeroAtual;
	}
	}
	if(numeroInicial<1) {
		mostrarConteudo("mostrar-contagemregressiva", "Você não pode fazer a contagem com números menores que 1!");
	}
	else if(tempoContagem<1) {
		mostrarConteudo("mostrar-contagemregressiva", "Você não pode fazer a contagem com menos de um segundo!");
	}
	else {
	mudaContagem(numeroInicial);
	}
	evt.preventDefault();
}
function quantosDias(evt) {
	let anoContagem=parseInt(document.getElementById("ano-contagem").value);
	if(anoContagem<=1) {
		mostrarConteudo("mostrar-quantosdias", "O ano usado na contagem deve ser maior que 1.");
	}
	else {
	let anosBissextos=anoContagem//4;
	let totalDias=(anoContagem-1)*365+anosBissextos;
	mostrarConteudo("mostrar-quantosdias", `Desde 01/01/${anoContagem}, já se passaram ${totalDias} dias!`);
	}
	evt.preventDefault();
}

document.getElementById("executar-olamundo").addEventListener("click", olaMundo);
document.getElementById("form-numerodigitado").addEventListener("submit", numeroDigitado);
document.getElementById("form-idade").addEventListener("submit", idade);
document.getElementById("form-mediafinal").addEventListener("submit", mediaFinal);
document.getElementById("form-multiplo").addEventListener("submit", multiplo);
document.getElementById("form-vogal").addEventListener("submit", vogal);
document.getElementById("form-minicalculadora").addEventListener("submit", miniCalculadora);
document.getElementById("form-trocavariaveis").addEventListener("submit", trocaVariaveis);
document.getElementById("form-contagemregressiva").addEventListener("submit", contagemRegressiva);
document.getElementById("form-quantosdias").addEventListener("submit", quantosDias);