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
    var question1Answer = document.querySelector('input[name="question6"]:checked');
    var question2Answer = document.querySelector('input[name="question7"]:checked');
    var question3Answer = document.querySelector('input[name="question8"]:checked');
    var question4Answer = document.querySelector('input[name="question9"]:checked');
    var question5Answer = document.querySelector('input[name="question10"]:checked');
    var question1Answer = document.querySelector('input[name="question11"]:checked');
    var question2Answer = document.querySelector('input[name="question12"]:checked');
    var question3Answer = document.querySelector('input[name="question13"]:checked');
    var question4Answer = document.querySelector('input[name="question14"]:checked');
    var question5Answer = document.querySelector('input[name="question15"]:checked');
    var question1Answer = document.querySelector('input[name="question16"]:checked');
    var question2Answer = document.querySelector('input[name="question17"]:checked');
    var question3Answer = document.querySelector('input[name="question18"]:checked');

    if (question1Answer && question2Answer && question3Answer) {
      
//QUESTAO 1
        if (question1Answer.value === 'B') {
            score++;
        }
//QUESTAO 2
        if (question2Answer.value === 'A') {
            score++;
        }
//QUESTAO 3
        if (question3Answer.value === 'A') {
            score++;
        }
//QUESTAO 4
        if (question4Answer.value === 'A') {
            score++;
        }
//QUESTAO 5
        if (question5Answer.value === 'C') {
            score++;
        }
//QUESTAO 6
        if (question5Answer.value === 'A') {
            score++;
        }
//QUESTAO 7
        if (question5Answer.value === 'A') {
            score++;
        }
//QUESTAO 8
        if (question5Answer.value === 'B') {
            score++;
        }
//QUESTAO 9
        if (question5Answer.value === 'B') {
            score++;
        }
//QUESTAO 10
        if (question5Answer.value === 'A') {
            score++;
        }
//QUESTAO 11
        if (question5Answer.value === 'A') {
            score++;
        }
//QUESTAO 12
        if (question5Answer.value === 'A') {
            score++;
        }
//QUESTAO 13
        if (question5Answer.value === 'A') {
            score++;
        }
//QUESTAO 14
        if (question5Answer.value === 'B') {
            score++;
        }
//QUESTAO 15
        if (question5Answer.value === 'A') {
            score++;
        }
//QUESTAO 16
        if (question5Answer.value === 'B') {
            score++;
        }
//QUESTAO 17
        if (question5Answer.value === 'A') {
            score++;
        }
//QUESTAO 18
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


