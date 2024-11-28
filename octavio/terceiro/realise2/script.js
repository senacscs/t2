// script.js
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '☰';
toggleBtn.style.position = 'fixed';
toggleBtn.style.top = '20px';
toggleBtn.style.left = '10px';
toggleBtn.style.fontSize = '24px';
toggleBtn.style.background = 'transparent';
toggleBtn.style.border = 'none';
toggleBtn.style.cursor = 'pointer';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
});