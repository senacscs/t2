// operações simples
function operacoesSimples() {
    var alertOpSimple = document.getElementsByClassName("alert")[0];
    if (!document.opForms.number1.value || !document.opForms.number2.value) {
        alertOpSimple.style.display = "block";
    } else {
        var a,
            b,
            sum,
            sub,
            multi,
            div;
        a = num1.value;
        b = num2.value;
        a = parseFloat(a);
        b = parseFloat(b);
        sum = a + b;
        sub = a - b;
        multi = a * b;
        div = a / b;
        document
            .getElementById("outputSum")
            .innerHTML = "A soma dos números é igual a: " + sum;
        document
            .getElementById("outputSub")
            .innerHTML = "A subtração dos números é igual a: " + sub;
        document
            .getElementById("outputMulti")
            .innerHTML = "A multiplicação dos números é igual a: " + multi;
        document
            .getElementById("outputDiv")
            .innerHTML = "A divisão dos números é igual a: " + div;
        alertOpSimple.style.display = "none"
    }
}

//prioridades
function prioridades() {
    var alertPrioridades = document.getElementsByClassName("alert")[1];
    if (!document.priorForms.priorNum1.value || !document.priorForms.priorNum2.value || !document.priorForms.priorNum3.value) {
        alertPrioridades.style.display = "block";
    } else {
        var c,
            d,
            e,
            prioridade1,
            prioridade2,
            prioridade3,
            prioridade4;

        var c = priorNum1.value;
        var d = priorNum2.value;
        var e = priorNum3.value;
        var f = priorNum4.value;

        var operacao1 = c + " + " + d + " * " + e;
        var operacao2 = "(" + c + " + " + d + ") * " + e;
        var operacao3 = c + " + " + d + " / " + e + " * " + f;

        var operacao4 = "(" + c + "+" + d + ") / (" + e + "*" + f + ")"
        prioridade1 = c + d * e;
        prioridade2 = (c + d) * e;
        prioridade3 = c + d / e * f;
        prioridade4 = (c + d) / (e * f);

        document
            .getElementsByClassName("outputPrior")[0]
            .innerHTML = "Na operação: " + operacao1 + " o resultado será: " +
                    prioridade1;
        document
            .getElementsByClassName("outputPrior")[1]
            .innerHTML = "Na operação: " + operacao2 + " o resultado será: " +
                    prioridade2;
        document
            .getElementsByClassName("outputPrior")[2]
            .innerHTML = "Na operação: " + operacao3 + " o resultado será: " +
                    prioridade3;

        document
            .getElementsByClassName("outputPrior")[3]
            .innerHTML = "Na operação: " + operacao4 + " o resultado será: " +
                    prioridade4;
    }

}
