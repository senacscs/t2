// Lista de produtos por loja
const produtos = {
    "Bolos da Marcia": [
        { nome: "Pizza Calabresa", preco: 35.00, imagem: "pizza.jpg" },
        { nome: "Pizza Quatro Queijos", preco: 40.00, imagem: "pizza.jpg" }
    ],
    "Big Bold Burger": [
        { nome: "Hambúrguer Clássico", preco: 25.00, imagem: "hamburguer.jpg" },
        { nome: "Cheeseburger", preco: 28.00, imagem: "hamburguer.jpg" }
    ],
    "Sakura Sushi": [
        { nome: "Combo Sushi", preco: 60.00, imagem: "sushi.jpg" },
        { nome: "Temaki", preco: 30.00, imagem: "sushi.jpg" }
    ]
};

let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let total = 0;
const CACHE_NAME = 'freen-app-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/bolos.html',
    '/hamburgueria.html',
    '/sushi.html',
    '/css/style.css',
    '/js/script.js',
    '/assets/img/carrinho-de-compras-rapido.png',
    '/assets/img/bolos da marcia.png',
    '/assets/img/big bold burger.png',
    '/assets/img/sushi sakura.png',
    '/manifest.json'
];

// Instala o service worker e faz o cache dos arquivos especificados
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Arquivos em cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Intercepta as requisições e responde com o cache se disponível
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

// Atualiza o cache quando necessário e remove caches antigos
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Adiciona o produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Atualiza o contador do carrinho e total
function atualizarCarrinho() {
    const contadorCarrinho = document.getElementById('contador-carrinho');
    if (contadorCarrinho) {
        contadorCarrinho.textContent = carrinho.length;
    }

    const totalCarrinho = carrinho.reduce((acc, item) => acc + item.preco, 0);
    total = totalCarrinho;
    localStorage.setItem('total', totalCarrinho);
}

// Carrega o carrinho na página de checkout
function carregarCarrinho() {
    const listaCarrinho = document.getElementById('itens-carrinho');
    const totalCarrinho = document.getElementById('total-carrinho');
    if (listaCarrinho && totalCarrinho) {
        listaCarrinho.innerHTML = '';
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
            listaCarrinho.appendChild(li);
        });
        totalCarrinho.textContent = localStorage.getItem('total') || '0,00';
    }
}
// Esvaziar o carrinho
function esvaziarCarrinho() {
    carrinho = [];
    localStorage.removeItem('carrinho');
    localStorage.removeItem('total');
    atualizarCarrinho();
    carregarCarrinho();
}
// Finaliza o pedido
document.getElementById('form-checkout')?.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('mensagem-confirmacao').style.display = 'block';
    carrinho = [];
    localStorage.removeItem('carrinho');
    localStorage.removeItem('total');
    atualizarCarrinho();
    carregarCarrinho();
});
// Adiciona funcionalidade ao botão de esvaziar o carrinho
document.getElementById('esvaziar-carrinho')?.addEventListener('click', function() {
    esvaziarCarrinho();
});
// Carregar o carrinho ao carregar a página
window.onload = function() {
    carregarCarrinho();
    atualizarCarrinho();
};
