document.addEventListener('DOMContentLoaded', () => {

  // 1. Animação de hover nos projetos
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
      project.style.transform = "scale(1.05)";
      project.style.transition = "transform 0.3s ease";
    });
    project.addEventListener('mouseleave', () => {
      project.style.transform = "scale(1)";
    });
  });

  // 2. Clique para mostrar mais informações sobre o projeto
  const projectTitles = document.querySelectorAll('.project h2');
  projectTitles.forEach(title => {
    title.addEventListener('click', (event) => {
      const project = event.target.closest('.project');
      const description = project.querySelector('p');

      if (description.style.display === 'none') {
        description.style.display = 'block';
      } else {
        description.style.display = 'none';
      }
    });
  });

  // 3. Efeito de scroll suave para links internos
  const links = document.querySelector
