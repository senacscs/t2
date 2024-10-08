// script.js
function filterWords() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const wordItems = document.querySelectorAll('.word-item');

    wordItems.forEach(item => {
        const word = item.querySelector('h2').innerText.toLowerCase();
        if (word.includes(searchInput)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
