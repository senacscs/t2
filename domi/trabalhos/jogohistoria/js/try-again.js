window.onload = function () {
    var message = document.querySelectorAll('div')

    message.innerHTML = (`    
    <h2>Deseja tentar de novo?</h2>

    <a href="/index.html"><button class="try-again-btn">Sim</button></a>
    <a href="/obrigado.html"><button class="give-up-btn">Não</button></a>`)
}