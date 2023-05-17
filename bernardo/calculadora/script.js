function calcular(){
    let num1 = document.getElementById(numero1);
    console.log(num1);
    let num2 = document.getElementById(numero2);
    console.log(num2);
    //var resu = document.getElementById(resultado);
    let equation = (document.getElementById(equation).value);
    console.log(equation);

    
    if (equation === "adicao") {
        resu = parseInt(num1) + parseInt(num2);
        document.getElementById("resultado").innerHTML = resu;
    }
}