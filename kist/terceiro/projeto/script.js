document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const links = document.querySelectorAll('.nav-link');

    // Função para mostrar a página correspondente
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add('active');
        }
    }

    // Adiciona eventos de clique nos links de navegação
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('href').substring(1);
            showPage(pageId);
        });
    });

    // Mostra a primeira página por padrão
    showPage('intro');

    // Evento do formulário de contato
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada! Obrigado pelo seu interesse.');
        this.reset(); // Reseta o formulário
    });
});