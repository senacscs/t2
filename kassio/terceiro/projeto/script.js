document.getElementById('search-bar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = e.target.value.toLowerCase();
        
        if (query.includes('vaga a')) {
            window.location.href = 'vaga_a.html';
        } else if (query.includes('vaga b')) {
            window.location.href = 'vaga_b.html';
        } else if (query.includes('vaga c')) {
            window.location.href = 'vaga_c.html';
        } else {
            alert('Vaga não encontrada.');
        }
    }
});
