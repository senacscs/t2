// script.js

// Dados de conexões e postagens (simulados)
const connections = [
    { name: "João Silva", profession: "Desenvolvedor Full-Stack", location: "São Paulo, Brasil" },
    { name: "Ana Costa", profession: "Gerente de Projetos", location: "Rio de Janeiro, Brasil" },
    { name: "Lucas Pereira", profession: "Designer UX/UI", location: "Belo Horizonte, Brasil" }
  ];
  
  const posts = [
    { user: "João Silva", content: "Acabei de concluir um curso incrível de React.js!" },
    { user: "Ana Costa", content: "Procurando talentos para um projeto inovador. Interessados, entrem em contato!" },
    { user: "Lucas Pereira", content: "Design não é apenas aparência, é sobre como funciona." }
  ];
  
  // Exibir conexões na página de Conexões
  function renderConnections() {
    const container = document.querySelector(".connections-container");
    connections.forEach(conn => {
      const card = document.createElement("div");
      card.classList.add("news-card");
      card.innerHTML = `
        <h2>${conn.name}</h2>
        <p>${conn.profession} | ${conn.location}</p>
        <button class="read-more" onclick="connect('${conn.name}')">Conectar</button>
      `;
      container.appendChild(card);
    });
  }
  
  // Simular ação de conexão
  function connect(name) {
    alert(`Você enviou uma solicitação de conexão para ${name}!`);
  }
  
  // Exibir postagens na página inicial
  function renderPosts() {
    const container = document.querySelector(".posts-container");
    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.classList.add("post-card");
      postElement.innerHTML = `
        <h3>${post.user}</h3>
        <p>${post.content}</p>
      `;
      container.appendChild(postElement);
    });
  }
  
  // Carregar funções específicas em cada página
  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("connections-page")) {
      renderConnections();
    }
    if (document.body.classList.contains("home-page")) {
      renderPosts();
    }
  });
  