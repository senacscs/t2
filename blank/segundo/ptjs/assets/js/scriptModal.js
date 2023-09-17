// modal olá mundo
var modalHello = document.getElementById("hello");
var btnHello = document.getElementById("olaMundoModal");
var spanHelloClose = document.getElementsByClassName("close")[0];
btnHello.onclick = function () {
    modalHello.style.display = "block";

    spanHelloClose.onclick = function () {
        modalHello.style.display = "none";
        window.location.reload(false); 
    }
    window.onclick = function (event) {
        if (event.target == modalHello) {
            modalHello.style.display = "none";
        }
    }
}

//modal numero digitado
var modalNum = document.getElementById("num");
var btnNum = document.getElementById("numModal");
var spanNumClose = document.getElementsByClassName("close")[1];
btnNum.onclick = function () {
    modalNum.style.display = "block";

    spanNumClose.onclick = function () {
        modalNum.style.display = "none";
        window.location.reload(false); 
    }
    window.onclick = function (event) {
        if (event.target == modalNum) {
            modalNum.style.display = "none";
        }
    }
}

// modal seu nome
var modalName = document.getElementById("name");
var btnName = document.getElementById("nameModal");
var spanName = document.getElementsByClassName("close")[2];
btnName.onclick = function () {
    modalName.style.display = "block";

    spanName.onclick = function () {
        modalName.style.display = "none";
        window.location.reload(false); 
    }
    window.onclick = function (event) {
        if (event.target == modalName) {
            modalName.style.display = "none";
        }
    }
}

//modal operacoes aritméticas
var modalOp = document.getElementById("op");
var btnOp = document.getElementById("opSimples");
var spanOp = document.getElementsByClassName("close")[3];
btnOp.onclick = function () {
    modalOp.style.display = "block";

    spanOp.onclick = function () {
        modalOp.style.display = "none";
        window.location.reload(false); 
    }
    window.onclick = function (event) {
        if (event.target == modalOp) {
            modalOp.style.display = "none";
        }
    }
}

//modal operacoes aritméticas
var modalPrior = document.getElementById("prior");
var btnPrior = document.getElementById("prioridades");
var spanPrior = document.getElementsByClassName("close")[4];
btnPrior.onclick = function () {
    modalPrior.style.display = "block";

    spanPrior.onclick = function () {
        modalPrior.style.display = "none";
        window.location.reload(false); 
    }
    window.onclick = function (event) {
        if (event.target == modalPrior) {
            modalPrior.style.display = "none";
        }
    }
}