//ola mundo
function olaMundo() {
    document.getElementById("mostrar").innerHTML = "Olá Mundo!";
    console.log('Olá Mundo!');
    alert('Olá Mundo!');
}


function numeroDigitado() {

  document.getElementById("output").innerHTML = "O número digitado foi " + numero.value;
}


function seuNome() {
  var name = prompt("Digite seu nome: ");
  document.getElementById("output").innerHTML = "O nome digitado foi: " + name;
}


// modal
var modal = document.getElementById("num");
var btn = document.getElementById("numModal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}