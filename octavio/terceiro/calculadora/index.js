const display = document.querySelector('.calculator__display');
const keys = document.querySelector('.calculator__keys');

keys.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
        const key = event.target;
        const action = key.dataset.action;

        // Implemente as operações aqui (adição, subtração, etc.)
        // Atualize o display conforme necessário
    }
});