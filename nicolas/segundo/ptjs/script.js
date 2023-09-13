        // Função para calcular o total a pagar
        function calcularTotal() {
            // Preços dos produtos definidos em constantes
            const PRECO_PARAFUSO = 1.50;
            const PRECO_ARRUELA = 2.00;
            const PRECO_PORCA = 2.50;
  
            // Leitura dos dados do cliente
            const nome = prompt("Digite seu nome:");
            const quantidadeParafusos = parseInt(prompt("Digite a quantidade de parafusos que deseja comprar:"));
            const quantidadeArruelas = parseInt(prompt("Digite a quantidade de arruelas que deseja comprar:"));
            const quantidadePorcas = parseInt(prompt("Digite a quantidade de porcas que deseja comprar:"));
  
            // Cálculo dos valores a serem pagos
            const totalParafusos = PRECO_PARAFUSO * quantidadeParafusos;
            const totalArruelas = PRECO_ARRUELA * quantidadeArruelas;
            const totalPorcas = PRECO_PORCA * quantidadePorcas;
            const totalPagar = totalParafusos + totalPorcas + totalArruelas;
  
            // Exibição dos resultados
            document.write("<p>Cliente: " + nome + "</p>");
            document.write("<hr>");
            document.write("<p>Parafusos: " + quantidadeParafusos + "</p>");
            document.write("<p>Arruelas: " + quantidadeArruelas + "</p>");
            document.write("<p>Porcas: " + quantidadePorcas + "</p>");
            document.write("<hr>");
            document.write("<p>Total a pagar: R$ " + totalPagar.toFixed(2) + "</p>");
          }
  
          // Chamada da função para calcular o total
          calcularTotal();