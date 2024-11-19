// index.js

// Configurações para a busca
document.getElementById('search-button').addEventListener('click', handleSearch);
document.getElementById('search-bar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

function handleSearch() {
    const query = document.getElementById('search-bar').value.toLowerCase();

    // Redireciona para a página de oportunidades de carreira se o termo for encontrado
    if (query.includes('oportunidades de carreira')) {
        window.location.href = 'oportunidades_de_carreira.html';
    } else {
        alert('Página ou informação não encontrada.');
    }
}
