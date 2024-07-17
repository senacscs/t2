const areaTexto = document.getElementById("area-texto");
        const inputComando = document.getElementById("input-comando");
        let estadoAtual = 0;

        inputComando.focus();

        const historia = [
            { // 0 estágio 0
                texto: "Raul, um programador dedicado, sempre sonhou em criar sua própria startup. Após meses de trabalho árduo, ele finalmente lançou seu aplicativo inovador. No entanto, as coisas não saíram como planejado. O negócio fracassou, e Raul ficou devastado. Determinado a espairecer, ele decidiu ir até a feira local, onde sua amiga Manuela trabalhava vendendo frutas. Raul, ainda frustrado com seu fracasso, acaba descontando sua raiva nela.",
                opcoes: ["1. Começar"],
                regras: {
                    "começar": 1,
                    "start": 1,
                    "": 1,
                    "comecar": 1,
                    "1": 1
                }
            },
            { // 1 Novo estágio para "Começar"
                texto: "Raul chega à feira e vê Manuela arrumando sua barraca de frutas. Ele se aproxima, e ela o cumprimenta com um sorriso. 'Oi, Raul! Como você está?'",
                opcoes: ["1. Conversar amigavelmente", "2. Descontar sua raiva nela"],
                regras: {
                    "conversar amigavelmente": 2,
                    "1": 2,
                    "descontar sua raiva nela": 3,
                    "2": 3
                }
            },
            { // 2 Novo estágio para "Conversar amigavelmente"
                texto: "Raul decide conversar amigavelmente com Manuela. Eles falam sobre a feira, e ele compartilha seu desapontamento com o fracasso do aplicativo. Manuela o ouve pacientemente e oferece palavras de conforto e encorajamento. Para distrair sua mente, ela propõe um enigma matemático: 'Tenho um polinômio P(x) = x^3 - 6x^2 + 11x - 6. Quais são as raízes desse polinômio?'",
                opcoes: ["Digite sua resposta no formato: 'a, b, c'"],
                regras: {
                    "1, 2, 3": 4,
                    "outra resposta": 5
                }
            },
            { // 3 Novo estágio para "Descontar a raiva"
                texto: "Raul, tomado pela frustração, começa a criticar Manuela injustamente, dizendo que ela nunca entenderia a pressão de ser um empreendedor. Manuela, chocada e magoada, tenta responder, mas Raul continua a humilhá-la diante dos clientes.",
                opcoes: ["1. Continuar humilhando", "2. Humilhar mais e ir embora como se nada tivesse acontecido"],
                regras: {
                    "continuar humilhando": 6,
                    "1": 6,
                    "humilhar mais e ir embora como se nada tivesse acontecido": 7,
                    "2": 7
                }
            },
            { // 4 Novo estágio para "Resposta correta do enigma"
                texto: "Raul pensa um pouco e responde: 'As raízes são 1, 2 e 3.' Manuela sorri e confirma: 'Exato! Às vezes, pensar em algo diferente ajuda a clarear a mente.' Raul se sente um pouco melhor e agradece a Manuela pelo enigma.",
                opcoes: ["1. Agradecer e continuar conversando", "2. Ficar irritado e descontar a raiva nela"],
                regras: {
                    "agradecer e continuar conversando": 7,
                    "1": 7,
                    "ficar irritado e descontar a raiva nela": 3,
                    "2": 3
                }
            },
            { // 5 Novo estágio para "Resposta incorreta do enigma"
                texto: "Raul pensa e responde: 'As raízes são 2, 3 e 4.' Manuela balança a cabeça e diz: 'Não, Raul. A resposta correta é 1, 2 e 3. Mas não se preocupe, é apenas um enigma para distrair.' Raul se sente um pouco frustrado, mas tenta não descontar sua raiva em Manuela.",
                opcoes: ["1. Continuar conversando", "2. Descontar sua raiva nela"],
                regras: {
                    "continuar conversando": 7,
                    "1": 7,
                    "descontar sua raiva nela": 3,
                    "2": 3
                }
            },
            { // 6 Novo estágio para "Continuar humilhando"
                texto: "Raul continua a humilhar Manuela, e ela, incapaz de aguentar mais, pede para ele ir embora. Raul percebe o quão injusto está sendo, mas não consegue parar. Ele sai da feira sentindo-se ainda pior do que antes.",
                opcoes: ["1. Refletir sobre suas ações", "2. Ignorar e continuar seu dia"],
                regras: {
                    "refletir sobre suas ações": 8,
                    "1": 8,
                    "ignorar e continuar seu dia": 9,
                    "2": 9
                }
            },
            { // 7 Novo estágio para "Humilhar mais e ir embora como se nada tivesse acontecido"
                texto: "Raul humilha Manuela ainda mais, e ela, visivelmente abalada, não consegue mais conter as lágrimas. Raul então vai embora da feira como se nada tivesse acontecido, ignorando os olhares de reprovação ao seu redor.",
                opcoes: ["1. Ir para o próximo estágio"],
                regras: {
                    "ir para o próximo estágio": 10,
                    "1": 10
                },
                link: "https://senacscs.github.io/t2/trevisan/jogo_texto/jogo.html" // Adiciona o link aqui
            },
            { // 8 Estágio final: Refletir sobre suas ações
                texto: "Raul reflete sobre suas ações e decide procurar ajuda para lidar com sua frustração. Ele percebe que descontar sua raiva nos outros não é a solução e promete a si mesmo que irá trabalhar para ser uma pessoa melhor. A história termina com Raul determinado a melhorar tanto em sua vida pessoal quanto profissional.",
                opcoes: ["1. Reiniciar"],
                regras: {
                    "reiniciar": 0,
                    "1": 0
                }
            },
            { // 9 Estágio final: Ignorar e continuar seu dia
                texto: "Raul ignora os sentimentos de culpa e continua seu dia, mas não consegue se livrar da sensação de vazio e frustração. Ele sabe que precisa mudar, mas não está pronto para enfrentar seus problemas. A história termina com Raul ainda lutando contra seus próprios demônios.",
                opcoes: ["1. Reiniciar"],
                regras: {
                    "reiniciar": 0,
                    "1": 0
                }
            },
            { // 10 Estágio final: Ir para o próximo estágio
                texto: "Raul deixa a feira e segue seu dia sem olhar para trás. Ele continua a ignorar os sentimentos de culpa, mas no fundo sabe que precisa lidar com seus problemas.",
                opcoes: ["1. Reiniciar"],
                regras: {
                    "reiniciar": 0,
                    "1": 0
                }
            }
        ];

        function mostrarTexto(indice) {
            areaTexto.textContent = historia[indice].texto;
            if (historia[indice].link) {
                window.location.href = historia[indice].link;
            }
        }

        function mostrarOpcoes(indice) {
            const opcoes = historia[indice].opcoes;
            let textoOpcoes = "\n";
            for (let i = 0; i < opcoes.length; i++) {
                textoOpcoes += opcoes[i] + "\n";
            }
            areaTexto.textContent += textoOpcoes;
        }

        function verificarComando(comando) {
            const regras = historia[estadoAtual].regras;
            if (regras[comando.toLowerCase()] !== undefined) {
                estadoAtual = regras[comando.toLowerCase()];
                mostrarTexto(estadoAtual);
                mostrarOpcoes(estadoAtual);
            } else {
                areaTexto.textContent += "\nComando inválido. Tente novamente.\n";
                mostrarOpcoes(estadoAtual);
            }
        }

        inputComando.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                const comando = inputComando.value;
                inputComando.value = "";
                verificarComando(comando);
            }
        });

        mostrarTexto(estadoAtual);
        mostrarOpcoes(estadoAtual);