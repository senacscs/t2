const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.querySelector('.score');

let score = 0;

// Definições do jogador
const player = {
    width: 50,
    height: 50,
    x: canvas.width / 2 - 25,
    y: canvas.height - 60,
    speed: 5
};

// Definições do bloco que vai cair
const fallingBox = {
    width: 30,
    height: 30,
    x: Math.random() * (canvas.width - 30),
    y: 0,
    speed: 2
};

// Movimento do jogador
let rightPressed = false;
let leftPressed = false;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        rightPressed = true;
    } else if (event.key === 'ArrowLeft') {
        leftPressed = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowRight') {
        rightPressed = false;
    } else if (event.key === 'ArrowLeft') {
        leftPressed = false;
    }
});

// Função para desenhar o jogador
function drawPlayer() {
    ctx.fillStyle = 'rgb(89, 0, 255)    ';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Função para desenhar o bloco que cai
function drawFallingBox() {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(fallingBox.x, fallingBox.y, fallingBox.width, fallingBox.height);
}

// Função para atualizar a posição do jogador
function updatePlayerPosition() {
    if (rightPressed && player.x < canvas.width - player.width) {
        player.x += player.speed;
    } else if (leftPressed && player.x > 0) {
        player.x -= player.speed;
    }
}

// Função para atualizar o bloco que cai
function updateFallingBox() {
    fallingBox.y += fallingBox.speed;
    if (fallingBox.y > canvas.height) {
        // Quando o bloco sai da tela, reposiciona ele no topo
        fallingBox.x = Math.random() * (canvas.width - 30);
        fallingBox.y = 0;
    }

    // Verifica colisão com o jogador
    if (fallingBox.y + fallingBox.height >= player.y &&
        fallingBox.x + fallingBox.width >= player.x &&
        fallingBox.x <= player.x + player.width) {
            // Se pegar, reinicia a posição do bloco e aumenta a pontuação
            score++;
            scoreElement.textContent = 'Pontuação: ' + score;
            fallingBox.x = Math.random() * (canvas.width - 30);
            fallingBox.y = 0;
    }
}

// Função para desenhar a tela
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    drawFallingBox();
    updatePlayerPosition();
    updateFallingBox();

    requestAnimationFrame(draw);
}

draw();  // Inicia o jogo
