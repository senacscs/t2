document
    .getElementById("coffeeForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const espressoTemp = parseFloat(document.getElementById("espresso").value);
        const americanoTemp = parseFloat(document.getElementById("americano").value);
        const cappuccinoTemp = parseFloat(document.getElementById("cappuccino").value);
        const latteIceTemp = parseFloat(document.getElementById("latteIce").value);
        const coldBrewTemp = parseFloat(document.getElementById("coldBrew").value);

        const coffeeTemperatures = {
            "Espresso": espressoTemp,
            "Americano": americanoTemp,
            "Cappuccino": cappuccinoTemp,
            "Latte Ice": latteIceTemp,
            "Cold Brew": coldBrewTemp
        };

        const temperaturaMediaCafe = calcularTemperaturaMedia(coffeeTemperatures);
        document
            .getElementById("result")
            .textContent = `A temperatura média, em módulo, das bebidas de café é de aproximadamente ${temperaturaMediaCafe.toFixed(
                2
            )}°C.`;
    });

function calcularTemperaturaMedia(bebidas) {
    let somaTemperaturas = 0;
    for (const bebida in bebidas) {
        somaTemperaturas += Math.abs(bebidas[bebida]);
    }
    const temperaturaMedia = somaTemperaturas / Object
        .keys(bebidas)
        .length;
    return temperaturaMedia;
}