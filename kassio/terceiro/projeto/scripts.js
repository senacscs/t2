// scripts.js

// Redireciona para a página de candidatura, passando o nome da vaga na URL
function applyJob(jobTitle) {
    window.location.href = `candidatura.html?vaga=${encodeURIComponent(jobTitle)}`;
}

// Mostra o título da vaga na página de candidatura
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const jobTitle = urlParams.get('vaga');
    if (jobTitle) {
        document.getElementById('job-title').innerText = jobTitle;
    }
});

// Adiciona funcionalidade ao formulário de candidatura
document.getElementById('candidatura-form')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio real do formulário
    alert('Candidatura enviada com sucesso! Entraremos em contato em breve.');
});
