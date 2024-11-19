// scripts.js

// Função para redirecionar ao digitar "oportunidades de carreira"
document.getElementById('search-button').addEventListener('click', handleSearch);
document.getElementById('search-bar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

function handleSearch() {
    const query = document.getElementById('search-bar').value.toLowerCase();

    if (query.includes('oportunidades de carreira')) {
        window.location.href = 'oportunidades.html';
    } else {
        alert('Não foram encontradas páginas ou vagas com o termo pesquisado.');
    }
}

// Função para candidatura (para ser usada na página de vagas)
function applyJob(jobTitle) {
    alert(`Você se candidatou à vaga: ${jobTitle}`);
}
