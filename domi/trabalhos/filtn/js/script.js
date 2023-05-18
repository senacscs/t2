function generatePortfolio() {

    var portfolioLinks = [
        'https://arquivo.dev/t2/domi/indicacoes-backend/',

        'https://arquivo.dev/t2/tultenhagen/segundoAno/mulheresCientistas/index.html',

        'https://arquivo.dev/t2/domi/jogohistoria/'
    ]

    var portfolioTitles = [
        'Indicações de Conteúdo Back-End',

        'Mulheres da Ciência',

        'Caça às Bruxas'
    ]

    for (var i = 0; i < portfolioLinks.length; i++) {
        document.getElementById('portfolio').innerHTML =
            `<a href="${portfolioLinks[0]}">
            <div class="cards" id="ib">
            <h3>${portfolioTitles[0]}</h3>
            </div>
            </a>`
    }

    //     var i = 0

    //     while (i < portfolioLinks.length) {
    //         var portfolio = document.getElementById('portfolio')

    //         portfolio = document.write('<a href="' + portfolioLinks[i] + '">' + '<p>' + portfolioTitles[i] + '</p>' + '</a>')
    //         i++
    //     }
}