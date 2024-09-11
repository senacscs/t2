// Array com perguntas e respostas
const questions = [
    {
        question: "Qual é o grupo funcional de um álcool?",
        options: ["-OH", "-COOH", "-CHO", "-C=O"],
        correct: "-OH"
    },
    {
        question: "Qual é a função oxigenada presente nos aldeídos?",
        options: ["-CHO", "-OH", "-C=O", "-COO"],
        correct: "-CHO"
    },
    {
        question: "Qual grupo funcional está presente nos ácidos carboxílicos?",
        options: ["-COOH", "-OH", "-C=O", "-CHO"],
        correct: "-COOH"
    },
    {
        question: "Qual é o grupo funcional de uma cetona?",
        options: ["-C=O", "-CHO", "-OH", "-COOH"],
        correct: "-C=O"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');

// Carrega a pergunta atual
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => selectAnswer(button, option));
        optionsContainer.appendChild(button);
    });

    nextButton.disabled = true;
}

// Verifica se a resposta está correta e atualiza a pontuação
function selectAnswer(button, selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedOption === currentQuestion.correct) {
        button.style.backgroundColor = 'green';
        score++;
        scoreElement.textContent = score;
    } else {
        button.style.backgroundColor = 'red';
    }

    // Desabilita todas as opções após a seleção
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.disabled = true;
    });

    nextButton.disabled = false;
}

// Vai para a próxima pergunta
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
});

// Finaliza o quiz
function endQuiz() {
    questionElement.textContent = "Parabéns! Você terminou o quiz.";
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
}

// Inicia o jogo
loadQuestion();
