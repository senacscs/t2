function operacoesSimples () {
    var a, b, c, sum, sub, mult, div;

    document.getElementById("")
}





//MODAIS

//modal operacoes ar itméticas
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







function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
﻿