document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("app");

  setTimeout(() => {
      loader.style.display = 'none';
      content.style.display = 'flex';
  }, 2000); // Simulação de um carregamento
});
