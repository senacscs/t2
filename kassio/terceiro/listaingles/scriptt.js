function showTranslation(word) {
    let translationElement = document.getElementById(word + '-translation');
    if (word === 'tenis') {
        translationElement.textContent = 'Tênis - Um tipo de calçado esportivo.';
    } else if (word === 'vermelho') {
        translationElement.textContent = 'Vermelho - Cor vermelha.';
    }
}
