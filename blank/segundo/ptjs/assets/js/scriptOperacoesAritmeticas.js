function operacoesSimples() {
    var alertOpSimple = document.getElementById("alertOP");
    if (!document.opForms.number1.value) {
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

//MODAIS modal operacoes aritméticas
var modalOp = document.getElementById("op");
var btnOp = document.getElementById("opSimples");
var spanOp = document.getElementsByClassName("close")[0];
btnOp.onclick = function () {
    modalOp.style.display = "block";

    spanOp.onclick = function () {
        modalOp.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modalOp) {
            modalOp.style.display = "none";
        }
    }
}
