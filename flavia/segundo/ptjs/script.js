function OlaMundo (){
    document.getElementById("mostrar").innerHTML = "Bem vindo!" ;
    console.log('Bem vindo!');
    alert('Bem vindo!');
}


function Idade(){
    var x;
    var idade=prompt("Digite sua idade:");
if (idade!=null)
  {
    x="Idade: " + idade + " anos.";
    document.getElementById("demo").innerHTML=x;
  }
}


function Nome (){
    var x;
    var nomes=prompt("Digite seu nome:");
if (nome!=null)
    {x="nome: " + nomes ;
}
    document.getElementById("nome").innerHTML=x;
    }
