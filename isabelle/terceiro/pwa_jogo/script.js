let player = document.getElementById('player');
let puzzleModal = document.getElementById('puzzle-modal');
let doorChoiceModal = document.getElementById('door-choice-modal');
let currentCell = { x: 0, y: 0 };

document.addEventListener('keydown', movePlayer);

const historia = [
    {
        texto: "Você é um detetive renomado, conhecido por resolver casos intrigantes e misteriosos. Um dia, você recebe uma carta anônima pedindo sua ajuda para desvendar o segredo por trás de uma mansão abandonada na periferia da cidade. Dizem que a mansão é assombrada e que ninguém que entrou nela voltou para contar a história. Sua curiosidade é despertada, e você decide investigar.\n\nVocê chega à mansão ao entardecer. O portão principal está entreaberto, rangendo ao vento. O jardim é coberto por ervas daninhas e a casa, imponente, está envolta em uma névoa espessa. O que você faz?",
        opcoes: ["Entrar pela porta da frente", "Contornar a casa e procurar uma entrada pelos fundos"]
    },
    {
        texto: "Ao entrar, você se depara com um hall de entrada grandioso, mas empoeirado. Quadros antigos pendem das paredes e há uma escada imponente à sua frente. O que você faz?",
        opcoes: ["Subir a escada", "Explorar o corredor à direita"]
    },
    {
        texto: "Você encontra uma porta de serviço destrancada. Ao entrar, se vê em uma cozinha antiga e mal iluminada. Um forte cheiro de mofo e comida estragada invade suas narinas. O que você faz?",
        opcoes: ["Investigar a despensa", "Seguir pelo corredor à esquerda"]
    },
    {
        texto: "No topo da escada, há um longo corredor com várias portas. Um leve gemido pode ser ouvido vindo de uma das portas no fim do corredor. O que você faz?",
        opcoes: ["Abrir a porta de onde vem o som", "Explorar os quartos ao longo do corredor"]
    },
    {
        texto: "Você encontra um velho diário com uma capa desgastada. O que você faz?",
        opcoes: ["Ler o diário", "Guardar o diário e sair"]
    },
    {
        texto: "Você entra na despensa e encontra um velho diário com uma capa desgastada. O que você faz?",
        opcoes: ["Ler o diário", "Sair da despensa"]
    },
    {
        texto: "O corredor escuro leva a um porão. Há uma escada que desce para o porão, onde você pode ouvir o som de água pingando. O que você faz?",
        opcoes: ["Descer para o porão", "Voltar para a cozinha"]
    },
    {
        texto: "Você encontra um quarto escuro com uma janela entreaberta. Uma figura sombria está em pé, murmurando palavras incompreensíveis. O que você faz?",
        opcoes: ["Aproximar-se da figura", "Sair do quarto"]
    },
    {
        texto: "Os quartos estão cheios de móveis cobertos por lençóis brancos. Em um deles, você encontra um baú trancado. O que você faz?",
        opcoes: ["Forçar o baú", "Sair do quarto"]
    },
    {
        texto: "O diário revela segredos obscuros sobre os antigos moradores da mansão, mencionando rituais e acontecimentos macabros. Você sente uma presença estranha ao seu redor, como se estivesse sendo observado. O que você faz?",
        opcoes: ["Continuar lendo o diário", "Sair da mansão"]
    },
    {
        texto: "Você decide sair da mansão, levando consigo as lembranças do que descobriu. Fim.",
        opcoes: []
    }
];

const puzzles = [
    {
        question: "Resolva: x³ - 6x² + 11x - 6 = 0",
        answer: "1, 2, 3",
        explanation: "As raízes da equação são x = 1, x = 2, e x = 3.",
        correctDoor: 1
    },
    {
        question: "Encontre a combinação para abrir a porta: 2x³ - 4x² - 22x + 24 = 0",
        answer: "-2, 3, 4",
        explanation: "As raízes da equação são x = -2, x = 3, e x = 4.",
        correctDoor: 2
    }
];

let currentPuzzleIndex = 0;

function createMaze() {
    const maze = document.querySelector('.maze');
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = `cell-${y}-${x}`;
            maze.appendChild(cell);
        }
    }
    addDoors();
}

function addDoors() {
    let doorPositions = [
        { x: 2, y: 0 }, { x: 2, y: 2 }, { x: 7, y: 4 },
        { x: 5, y: 8 }, { x: 3, y: 6 }, { x: 8, y: 8 }
    ];
    doorPositions.forEach(pos => {
        const cell = document.getElementById(`cell-${pos.y}-${pos.x}`);
        cell.classList.add('door');
    });
}

function movePlayer(event) {
    switch(event.key) {
        case 'ArrowUp':
            if (currentCell.y > 0) currentCell.y--;
            break;
        case 'ArrowDown':
            if (currentCell.y < 9) currentCell.y++;
            break;
        case 'ArrowLeft':
            if (currentCell.x > 0) currentCell.x--;
            break;
        case 'ArrowRight':
            if (currentCell.x < 9) currentCell.x++;
            break;
    }
    updatePlayerPosition();
}

function updatePlayerPosition() {
    player.style.transform = `translate(${currentCell.x * 50}px, ${currentCell.y * 50}px)`;
    checkDoor();
}

function checkDoor() {
    let cellId = `cell-${currentCell.y}-${currentCell.x}`;
    let cell = document.getElementById(cellId);
    if (cell.classList.contains('door')) {
        puzzleModal.style.display = 'flex';
        displayPuzzle();
    } else {
        displayStory(cellId);
    }
}

function displayPuzzle() {
    document.getElementById('question-text').textContent = puzzles[currentPuzzleIndex].question;
}

function checkAnswer() {
    const answer = document.getElementById('answer').value.trim();
    const feedback = document.getElementById('feedback');

    if (answer === puzzles[currentPuzzleIndex].answer) {
        feedback.textContent = 'Correto! Agora escolha a porta certa.';
        feedback.style.color = '#2ecc71';
        setTimeout(() => {
            puzzleModal.style.display = 'none';
            displayDoorChoices();
        }, 1000);
    } else {
        feedback.textContent = `Incorreto. ${puzzles[currentPuzzleIndex].explanation}`;
        feedback.style.color = '#e74c3c';
    }

    document.getElementById('answer').value = '';
}

function displayDoorChoices() {
    doorChoiceModal.style.display = 'flex';
    const doorOptions = document.getElementById('door-options');
    doorOptions.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const button = document.createElement('button');
        button.textContent = `Porta ${i + 1}`;
        button.classList.add('door-option');
        button.onclick = () => chooseDoor(i);
        doorOptions.appendChild(button);
    }
}

function chooseDoor(doorIndex) {
    if (doorIndex === puzzles[currentPuzzleIndex].correctDoor) {
        alert('Você escolheu a porta correta! Próximo nível!');
        doorChoiceModal.style.display = 'none';
        currentPuzzleIndex = (currentPuzzleIndex + 1) % puzzles.length;
    } else {
        alert('Porta errada. Tente novamente.');
    }
}

function displayStory(cellId) {
    const cellCoords = cellId.split('-').slice(1).map(Number);
    const storyIndex = cellCoords[1] + cellCoords[0] * 10;
    const story = historia[storyIndex % historia.length];
    alert(story.texto);
}

window.onload = () => {
    createMaze();
    displayPuzzle();
};
