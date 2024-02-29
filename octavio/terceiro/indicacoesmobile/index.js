document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
      const title = section.querySelector('h2');
      const content = section.querySelector('p');

      title.addEventListener('click', () => {
          content.classList.toggle('hidden');