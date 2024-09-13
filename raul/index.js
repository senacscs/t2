document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert(`Obrigado pela mensagem, ${nome}! Entraremos em contato via e-mail.`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
