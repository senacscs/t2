var submitButton = document.getElementById('submit');
var resultContainer = document.getElementById('result');
var scoreContainer = document.getElementById('score');
var bonusButton = document.getElementById('bonusButton');

submitButton.addEventListener('click', function() {
    var totalQuestions = 5;
    var score = 0;

    var question1Answer = document.querySelector('input[name="question1"]:checked');
    var question2Answer = document.querySelector('input[name="question2"]:checked');
    var question3Answer = document.querySelector('input[name="question3"]:checked');
    var question4Answer = document.querySelector('input[name="question4"]:checked');
    var question5Answer = document.querySelector('input[name="question5"]:checked');

    if (question1Answer && question2Answer && question3Answer) {
        if (question1Answer.value === 'A') {
            score++;
        }
        if (question2Answer.value === 'A') {
            score++;
        }
        if (question3Answer.value === 'A') {
            score++;
        }
        if (question4Answer.value === 'B') {
            score++;
        }
        if (question5Answer.value === 'C') {
            score++;
        }
        scoreContainer.textContent = 'Você acertou ' + score + ' de ' + totalQuestions + ' perguntas.';
        resultContainer.classList.remove('hidden');

        if (score === totalQuestions) {
            bonusButton.classList.add('visible');
        }
    } else {
        alert('Por favor, responda todas as perguntas.');
    }
    
});