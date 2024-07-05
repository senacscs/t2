if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', () => {
    registerSW();
});

// Register the Service Worker
async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator
                .serviceWorker
                .register('serviceworker.js');
        }
        catch (e) {
            console.log('SW registration failed');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('article h3');

    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });

        heading.addEventListener('mouseover', function() {
            this.style.fontSize = '1.2em'; // Ajuste o valor conforme necessário
        });

        heading.addEventListener('mouseout', function() {
            this.style.fontSize = ''; // Reseta para o valor padrão
        });
    });
});
