// Função para exibir "Olá Mundo!" no elemento "mostrar"
function olaMundo() {
    var mostrarElement = document.getElementById("mostrar");
    mostrarElement.innerHTML = "Olá Mundo!";
    console.log("Olá Mundo!");
    alert("Olá Mundo!");
}

// Função para exibir o número digitado no elemento "mostrar"
function numeroDigitado() {
    var numeroElement = document.getElementById("numero");
    var mostrarElement = document.getElementById("mostrar");
    var numeroDigitado = numeroElement.value;

    if (numeroDigitado !== "") {
        mostrarElement.innerHTML = "O número digitado foi " + numeroDigitado;
    } else {
        mostrarElement.innerHTML = "Por favor, digite um número válido.";
    }
}

// Função para exibir o nome digitado no elemento "mostrar"
function nomeDigitado() {
    var nomeElement = document.getElementById("nome");
    var mostrarElement = document.getElementById("mostrar");
    var nomeDigitado = nomeElement.value.trim();

    if (nomeDigitado !== "") {
        mostrarElement.innerHTML = "O nome digitado foi: " + nomeDigitado;
    } else {
        mostrarElement.innerHTML = "Por favor, digite um nome válido.";
    }
}
