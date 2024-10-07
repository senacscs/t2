const telaLogin = document.getElementById('telaLogin');
const telaCadastro = document.getElementById('telaCadastro');
const telaResultados = document.getElementById('telaResultados');

const abrirCadastro = document.getElementById('abrirCadastro');
const formularioLogin = document.getElementById('loginForm');
const formularioCadastro = document.getElementById('cadastroForm');

abrirCadastro.addEventListener('click', () => {
    telaLogin.style.display = 'none';
    telaCadastro.style.display = 'block';
});

formularioLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    // Simular login (substituir por validação real)
    alert('Usuário logado com sucesso!');
    telaLogin.style.display = 'none';
    telaResultados.style.display = 'block';
    // Buscar e exibir intérpretes (implementar lógica de busca)
    exibirInterpretes();
});

formularioCadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    // Simular cadastro (substituir por validação real)
    alert('Cadastro realizado com sucesso!');
    telaCadastro.style.display = 'none';
    telaLogin.style.display = 'block';
});

// Função para buscar e exibir intérpretes (exemplo básico)

function exibirInterpretes() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = ''; // Limpar cards existentes

    // Buscar dados de intérpretes (simulação com array estático)
    const interpretes = [
        { nome: 'Intérprete 1', foto: 'foto1.jpg', descricao: 'Descrição do intérprete 1' },
        { nome: 'Intérprete 2', foto: 'foto2.jpg', descricao: 'Descrição do intérprete 2' },
        { nome: 'Intérprete 3', foto: 'foto3.jpg', descricao: 'Descrição do intérprete 3' }
    ];

    // Criar e exibir cards de intérpretes
    interpretes.forEach(interprete => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${interprete.foto}" alt="Foto do Intérprete">
            <h2>${interprete.nome}</h2>
            <p>${interprete.descricao}</p>
            <button class="btn-info">Informações</button>
            <button class="btn-contato">Entrar em Contato</button>
        `;

        // Adicionar eventos de click para botões de cada card
        card.querySelector('.btn-info').addEventListener('click', () => {
            // Abrir tela de informações do intérprete (implementar lógica)
            alert('Abrir tela de informações do ' + interprete.nome);
        });

        card.querySelector('.btn-contato').addEventListener('click', () => {
            // Abrir tela de contato com o intérprete (implementar lógica)
            alert('Abrir tela de contato com o ' + interprete.nome);
        });

        cardContainer.appendChild(card);
    });
}


// Funções para gerenciar telas de informações e contato (a serem implementadas)

// ... Função para abrir tela de informações do intérprete
// ... Função para abrir tela de contato com o intérprete

// Inicialização da tela (exibir tela de login por padrão)

telaLogin.style.display = 'block';
telaCadastro.style.display = 'none';
telaResultados.style.display = 'none';