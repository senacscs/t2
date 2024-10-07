const questions = [
    {
        question: "Qual é o tipo de propagação de calor que ocorre em sólidos?",
        answers: ["Convecção", "Condução", "Irradiação"],
        correctAnswer: 1
    },
    {
        question: "Qual tipo de propagação de calor ocorre em líquidos e gases?",
        answers: ["Condução", "Convecção", "Irradiação"],
        correctAnswer: 1
    },
    {
        question: "Qual tipo de propagação de calor ocorre através de ondas eletromagnéticas?",
        answers: ["Condução", "Convecção", "Irradiação"],
        correctAnswer: 2
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionText = document.getElementById('question');
    const answerButtons = document.getElementsByClassName('answer');
    
    questionText.textContent = questions[currentQuestion].question;
    
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = questions[currentQuestion].answers[i];
    }
    
    document.getElementById('result').textContent = "";
}

function checkAnswer(selectedAnswer) {
    const result = document.getElementById('result');
    
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        result.textContent = "Resposta correta!";
        result.style.color = "green";
        
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            setTimeout(loadQuestion, 1000);
        } else {
            result.textContent = "Parabéns! Você completou o jogo.";
        }
    } else {
        result.textContent = "Resposta incorreta. Tente novamente!";
        result.style.color = "red";
    }
}

window.onload = loadQuestion;
