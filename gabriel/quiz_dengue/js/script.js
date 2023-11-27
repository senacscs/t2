let questions = [
	{
		text: "A dengue é causada por um vírus transmitido por mosquitos.",
		answers: "true-false",
		correct: 1
	},
	{
		text: "A única maneira de contrair dengue é ser picado por um mosquito infectado.",
		answers: "true-false",
		correct: 1
	},
	{
		text: "A dengue pode ser transmitida de pessoa para pessoa.",
		answers: "true-false",
		correct: 2
	},
	{
		text: "Não existe vacina disponível para prevenir a dengue.",
		answers: "true-false",
		correct: 2
	},
	{
		text: "A dengue é mais comum em áreas tropicais e subtropicais.",
		answers: "true-false",
		correct: 1
	},
	{
		text: "Os sintomas comuns da dengue incluem febre alta, dor de cabeça e erupções cutâneas.",
		answers: "true-false",
		correct: 1
	},
	{
		text: "A dengue é uma doença endêmica, o que significa que está sempre presente em determinadas regiões.",
		answers: "true-false",
		correct: 1
	},
	{
		text: "A dengue é uma doença bacteriana.",
		answers: "true-false",
		correct: 2
	},
	{
		text: "A dengue pode levar à morte em casos graves.",
		answers: "true-false",
		correct: 1
	},
	{
		text: "A picada do mosquito Aedes aegypti ocorre principalmente durante a noite.",
		answers: "true-false",
		correct: 2
	},
	{
		text: "Qual é o principal vetor da dengue?",
		answers: ["Anofeles", "Aedes Aegypti", "Mosca", "Culex", "Aedes albopictus"],
		correct: 2
	},
	{
		text: "Quais são os sintomas comuns da dengue?",
		answers: ["Tosse persistente, dificuldade respiratória, febre moderada", "Febre alta, dor de cabeça, dor muscular, erupção cutânea", "Dor de estômago, náuseas, tontura, olhos vermelhos", "Dor nas articulações, garganta inflamada, nariz entupido, fadiga"],
		correct: 2
	},
	{
		text: "Qual é o período de incubação da dengue após a picada do mosquito infectado?",
		answers: ["De 2 a 5 dias", "De uma a duas semanas", "De 3 a 4 semanas", "1 mês"],
		correct: 1
	},
	{
		text: "O que significa DHF, uma complicação grave da dengue?",
		answers: ["Dengue Hemorrágica Grave", "Doença Hemorrágica da Febre", "Doença Hemorrágica Fatal", "Distúrbio Hemorrágico Febril"],
		correct: 2
	},
	{
		text: "Qual é a melhor maneira de prevenir a propagação da dengue em áreas endêmicas?",
		answers: ["Consumir grandes quantidades de vitamina C", "Tomar antibióticos regularmente", "Usar repelente, roupas que cubram o corpo e telas em janelas", "Evitar a ingestão de carne vermelha"],
		correct: 3
	},
	{
		text: "Qual das seguintes afirmações sobre os sintomas da dengue está incorreta?",
		answers: ["Os sintomas da dengue incluem febre alta, dor de cabeça e dor muscular.", "A maioria dos casos de dengue é assintomática, ou seja, não apresenta sintomas.", "A dengue pode causar sangramento nas gengivas e sangue nas fezes.", "A dengue nunca evolui para complicações graves."],
		correct: 2
	},
	{
		text: "Qual é a relação entre a dengue e a febre chikungunya?",
		answers: ["São causadas pelos mesmos vírus e têm os mesmos sintomas", "São transmitidas pelo mesmo mosquito, mas são causadas por vírus diferentes", "A dengue é uma forma mais branda da febre chikungunya", "A febre chikungunya é uma complicação da dengue"],
		correct: 2
	},
	{
		text: "Qual dos seguintes não é um sintoma comum da dengue?",
		answers: ["Febre alta", "Erupções cutâneas", "Dor de cabeça", "Tosse persistente"],
		correct: 4
	},
	{
		text: "Qual é a estratégia atual da Organização Mundial da Saúde (OMS) em relação à dengue?",
		answers: ["Erradicar o mosquito Aedes aegypti em todo o mundo", "Eliminar a transmissão da dengue até 2030 por meio de medidas de controle e pesquisa de vacinas mais eficazes", "Recomendar a administração regular de antibióticos para prevenção da dengue", "Ignorar a dengue devido à sua baixa mortalidade"],
		correct: 2
	},
	{
		text: "Qual é a principal diferença entre a dengue clássica e a dengue hemorrágica?",
		answers: ["A dengue clássica é mais comum em crianças, enquanto a dengue hemorrágica afeta principalmente adultos", "A dengue clássica é mais leve e causa apenas febre e dor de cabeça", "A dengue hemorrágica envolve complicações graves, como sangramento e choque, e requer tratamento médico urgente", "A dengue clássica ocorre apenas em áreas urbanas"],
		correct: 3
	},
	{
		text: "A imunidade contra um sorotipo da dengue proporciona automaticamente proteção contra os outros três sorotipos.",
		answers: "true-false",
		correct: 2
	},
	{
		text: "A dengue hemorrágica é mais comum em pessoas que já tiveram dengue anteriormente.",
		answers: "true-false",
		correct: 1
	},
	{
		text: "A transmissão vertical da dengue ocorre quando a mãe infectada transmite o vírus ao feto durante a gravidez.",
		answers: "true-false",
		correct: 1
	},
	{
		text: "A febre que dá nome à doença é um dos sintomas mais leves da dengue.",
		answers: "true-false",
		correct: 2
	},
	{
		text: "A administração de aspirina pode ser eficaz no tratamento da dengue.",
		answers: "true-false",
		correct: 2
	},
	{
		text: "A infecção prévia por um tipo de vírus da dengue pode aumentar o risco de desenvolver dengue grave se infectado por outro tipo.",
		answers: "true-false",
		correct: 1
	},
	{
		text: "A dengue é uma das doenças transmitidas que mais cresceu nos últimos tempos, devido a fatores como urbanização rápida, viagens internacionais e mudanças climáticas, que favorecem a proliferação do mosquito.",
		answers: "true-false",
		correct: 1
	},
	{
		text: "A dengue é uma doença que pode levar a complicações graves, como a síndrome de choque da dengue, que é caracterizada por hipotensão, hemorragia e disfunção de múltiplos órgãos.",
		answers: "true-false",
		correct: 1
	},
	{
		text: "A Organização Mundial da Saúde (OMS) considera a dengue como uma das principais doenças mais transmitidas entre 100 países de todos os continentes (exceto Europa), afetando milhões de pessoas a cada ano.",
		answers: "true-false",
		correct: 1
	},
	{
		text: "O vírus da dengue possui quatro sorotipos diferentes (DENV-1, DENV-2, DENV-3 e DENV-4), e a infecção por um sorotipo confere imunidade vitalícia contra todos os outros sorotipos.",
		answers: "true-false",
		correct: 2
	}
];
let currentQuestion = 0;
let score = 0;
let currentLevel = 1;
let answeredLevelQuestions = 0;
let questionEl = document.querySelector(".question");
let messageDiv = document.getElementById("question-message");
let nextButton = document.getElementById("next-question-btn");
let levelDialog = document.getElementById("level-dialog");
let continueButton = document.querySelector("#level-dialog #level-continue");
let endDialog = document.getElementById("end-game-dialog");
let playAgainButton = document.getElementById("play-again-btn");
let endGameButton = document.getElementById("end-game-btn");
function showQuestion(question) {
	answeredLevelQuestions+=1;
	let questionPos = questions.indexOf(question)+1;
	let numberOfQuestions = questions.length;
	questionEl.setAttribute("id", "question-"+questionPos);
	let questionBody = `
		<h2 id="question-number">${questionPos}/${numberOfQuestions}</h2>
		<p class="question-text" tabindex="-1">${question.text}</p>
		<ul class="answers-list">
	`;
	let answersIsArray = Array.isArray(question.answers);
	if(answersIsArray) {
		question.answers.forEach((answer, index) => {
			let answerPos = index+1;
			questionBody+=`
				<li class="answer" id="answer-${answerPos}">
					<button class="answer-btn">${answer}</button>
				</li>
			`;
		});
	}
	else if(question.answers === "true-false") {
		question.answers=["Verdadeiro", "Falso"];
		questionBody+=`
			<li class="answer answer-true" id="answer-1">
				<button class="answer-btn">Verdadeiro</button>
			</li>
			<li class="answer" id="answer-false">
				<button class="answer-btn">Falso</button>
			</li>
		`;
	}
	questionBody+=`
		</ul>
	`;
	questionEl.innerHTML=questionBody;
	let answerButtons = questionEl.querySelectorAll("button.answer-btn");
	answerButtons.forEach((answerButton) => {
		answerButton.addEventListener("click", (evt) => {
			let answer = answerButton.innerHTML;
			checkAnswer(question, answer);
		});
	});
}
function checkAnswer(question, answer) {
	let answerButtons = document.querySelectorAll("button.answer-btn");
	answerButtons.forEach((answerButton) => {
		hideInSteps(answerButton);
	});
	let answerPos = question.answers.indexOf(answer);
	let message;
	if(answerPos === question.correct-1) {
		message=`
			Parabéns, você acertou!
		`;
		score+=1;
	}
	else {
		let correctAnswer = question.answers[question.correct-1];
		message=`
			Que pena, você errou! A resposta certa era: 
			<span class="correct-answer">${correctAnswer}</span>
		`;
	}
	messageDiv.innerHTML=message;
	messageDiv.focus();
	showCompletely(nextButton);
}
function showLevelMessage() {
	currentLevel+=1;
	answeredLevelQuestions=0;
	let levelElement = document.getElementById("current-level");
	levelElement.innerHTML=currentLevel;
	levelDialog.hidden=false;
	levelDialog.setAttribute("open", "");
	continueButton.focus();
	hideInSteps(nextButton);
}
function hideInSteps(element) {
	element.classList.add("visually-hidden");
	window.setTimeout(() => {
		element.hidden=true;
	}, 150);
}
function showCompletely(element) {
	element.hidden=false;
	element.classList.remove("visually-hidden");
}
showQuestion(questions[currentQuestion]);
nextButton.addEventListener("click", (evt) => {
	currentQuestion+=1;
	questionEl.innerHTML="";
	let numberOfQuestions = questions.length;
	if(currentQuestion === numberOfQuestions) {
		questionEl.innerHTML="";
		let finalScore = document.getElementById("final-score");
		finalScore.innerHTML=score;
		endDialog.hidden=false;
		endDialog.setAttribute("open", "");
		playAgainButton.focus();
	}
	else {
		messageDiv.innerHTML="";
		if(answeredLevelQuestions < 10) {
			showQuestion(questions[currentQuestion]);
			let questionText = document.querySelector(".question-text");
			questionText.focus();
			hideInSteps(nextButton);
		}
		else {
			showLevelMessage();
		}
	}
});
endGameButton.addEventListener("click", (evt) => {
	window.close();
});
continueButton.addEventListener("click", (evt) => {
	levelDialog.removeAttribute("open");
	levelDialog.hidden=true;
	showQuestion(questions[currentQuestion]);
	let questionText = document.querySelector(".question-text");
	questionText.focus();
});
endGameButton.addEventListener("click", (evt) => {
	window.close();
});
let actionElements = document.querySelectorAll("dialog button, dialog a");
let actions = Array.from(actionElements.children);
actions.forEach((action) => {
	action.addEventListener("keydown", (evt) => {
		if(evt.key === "Tab" && !evt.shiftKey) {
			evt.preventDefault();
			let elementToFocus = action.nextElementSibling ? action.nextElementSibling : actions[0];
			elementToFocus.focus();
		}
		else if(evt.key === "Tab" && evt.shiftKey) {
			evt.preventDefault();
			let elementToFocus = action.previousElementSibling ? action.previousElementSibling : actions[actions.length-1];
			elementToFocus.focus();
		}
	});
});