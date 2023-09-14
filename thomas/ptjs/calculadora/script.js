function calcular(){
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var operacao = document.getElementById("operacao").value;
  var resultado = document.getElementById("resultado");

  num1 = Number(num1);
  num2 = Number(num2);

  switch (operacao) {
    case "+":
      resultado.innerHTML = num1 + num2;
    break;
    case "/":
    resultado.innerHTML = num1 / num2
    break;
    case "*":
    resultado.innerHTML = num1 * num2
    break;
    case "-":
    resultado.innerHTML = num1 - num2

}
  
}