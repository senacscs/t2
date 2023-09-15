//ola mundo
function olaMundo() {
    
    document.getElementById("mostrar").innerHTML = "Olá Mundo!";
}


//divisao
document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById("numberInput");
    const result = document.getElementById("result");
    const calculateButton = document.getElementById("calculateButton");

    calculateButton.addEventListener("click", function () {
        calculateHalf();
    });

    function calculateHalf() {
        const inputNumber = parseFloat(numberInput.value);
        if (!isNaN(inputNumber)) {
            const half = inputNumber / 2;
            result.textContent = `A metade de ${inputNumber} é ${half}`;
        } else {
            result.textContent = "Por favor, insira um número válido.";
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const countdownDisplay = document.getElementById("countdownDisplay");
    const startButton = document.getElementById("startButton");
    const pageContent = document.getElementById("contagemRegressiva"); // Substitua "pageContent" pelo ID do elemento que você deseja animar

    let countdownInterval;

    function startCountdown() {
        let count = 5;
        countdownDisplay.textContent = count;

        countdownInterval = setInterval(function () {
            count--;

            if (count >= 0) {
                countdownDisplay.textContent = count;
            } else {
                clearInterval(countdownInterval);
                countdownDisplay.textContent = "Boom!";
                pageContent.classList.add("screen-break"); // Adicione a classe de animação
                setTimeout(function () {
                    const result = window.confirm("Reconstruir site");
                    if (result) {
                        pageContent.classList.remove("screen-break"); // Remova a classe de animação
                    }
                }, 1000); // Aguarde 1 segundo antes de exibir o alerta
            }
        }, 1000);
    }

    startButton.addEventListener("click", function () {
        clearInterval(countdownInterval);
        startCountdown();
    });
});


//rolagem seta
document.addEventListener("DOMContentLoaded", function () {
    var scrollButton = document.getElementById("scroll-to-content");

    scrollButton.addEventListener("click", function (e) {
        e.preventDefault();
        
        var contentSection = document.getElementById("tituloOlaMundo"); // Substitua "content-section" pelo ID da seção de conteúdo desejada.
        var contentSectionPosition = contentSection.offsetTop;
        
        window.scrollTo({
            top: contentSectionPosition,
            behavior: "smooth" // Animação suave
        });
    });
});

//rolagem seta 2
document.addEventListener("DOMContentLoaded", function () {
    var scrollButton = document.getElementById("descerParaOProximo");

    scrollButton.addEventListener("click", function (e) {
        e.preventDefault();
        
        var contentSection = document.getElementById("calculadora"); // Substitua "content-section" pelo ID da seção de conteúdo desejada.
        var contentSectionPosition = contentSection.offsetTop;
        
        window.scrollTo({
            top: contentSectionPosition,
            behavior: "smooth" // Animação suave
        });
    });
});

//rolagem seta 3
document.addEventListener("DOMContentLoaded", function () {
    var scrollButton = document.getElementById("flechaContagem");

    scrollButton.addEventListener("click", function (e) {
        e.preventDefault();
        
        var contentSection = document.getElementById("contagemRegressiva"); // Substitua "content-section" pelo ID da seção de conteúdo desejada.
        var contentSectionPosition = contentSection.offsetTop;
        
        window.scrollTo({
            top: contentSectionPosition,
            behavior: "smooth" // Animação suave
        });
    });
});





