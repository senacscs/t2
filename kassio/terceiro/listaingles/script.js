const questions = [
    {
        question: "Complete the sentence: 'You ______ eat vegetables for a healthy diet.'",
        options: ["must", "can", "should", "might"],
        correctAnswer: "should",
        translation: "Complete a frase: 'Você ______ comer vegetais para uma dieta saudável.'"
    },
    {
        question: "Choose the correct option: 'You ______ exercise regularly.'",
        options: ["have to", "should", "can", "shouldn't"],
        correctAnswer: "should",
        translation: "Escolha a opção correta: 'Você ______ fazer exercícios regularmente.'"
    },
    {
        question: "Which modal is appropriate: 'She ______ study more for the test.'",
        options: ["can", "should", "could", "shouldn't"],
        correctAnswer: "should",
        translation: "Qual modal é apropriado: 'Ela ______ estudar mais para a prova.'"
    },
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback-container');

function startGame() {
    showQuestion();
}

function showQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;

    optionsElement.innerHTML = "";
    for (const option of current.options) {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => checkAnswer(option);
        optionsElement.appendChild(li);
    }

    feedbackElement.style.display = 'none';
}

function checkAnswer(answer) {
    const current = questions[currentQuestion];
    if (answer === current.correctAnswer) {
        score++;
    }

    showFeedback(answer === current.correctAnswer);
}

function showFeedback(isCorrect) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = isCorrect ? "Correct! Well done!" : "Oops! That's not correct. The correct answer is " + questions[currentQuestion].correctAnswer + ".";

    feedbackElement.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    const feedback = document.getElementById('feedback');
    feedback.textContent = `Game Over! Your score is ${score} out of ${questions.length}.`;

    feedbackElement.style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
}

startGame();
