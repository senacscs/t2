// Para futuras funcionalidades como filtragem de pesquisa ou interação com os cards.
document.getElementById('search-bar').addEventListener('input', function() {
    console.log(this.value);
});
function abrirVaga(url) {
    window.location.href = url;
}
