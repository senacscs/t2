document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.querySelector('.main-image img');
    const mainImageCaption = document.querySelector('.main-image p');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const newSrc = this.src.replace('thumb', 'main'); // Assume que o nome do arquivo muda de 'thumb' para 'main'
            const newCaption = this.alt; // Assume que o alt text do thumbnail será usado como legenda

            mainImage.src = newSrc;
            mainImageCaption.textContent = newCaption;

            thumbnails.forEach(img => img.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
