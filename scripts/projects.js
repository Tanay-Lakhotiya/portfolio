import {projects} from '../data/projects.js';

let productsHTML = '';
projects.forEach((project) => {
  const projectId = project.id;
  productsHTML += `
    <div class="project-info js-project-info" data-project-name="${projectId}">
        <img class="project-thumbnail" src="${project.thumbnail}" alt="">
        <div class="project-info-container">
          <p class="project-title">${project.title}</p>
          <p class="project-description">${project.description}</p>
  
          <div class="attribute-buttons-section">
             <div>
              <div class="project-attribute">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layers js-${projectId}-tech-stack-svg" viewBox="-1 -1 18 18">
                  <path d="M8.211.5a.5.5 0 0 0-.422 0L.789 4.053a.5.5 0 0 0 0 .894l6.999 3.553a.5.5 0 0 0 .422 0l6.999-3.553a.5.5 0 0 0 0-.894L8.211.5zM1.731 4.5L8 1.057 14.268 4.5 8 7.943 1.731 4.5z"></path>
                  <path d="M.789 7.447a.5.5 0 0 1 .658-.223L8 10.943l6.553-3.719a.5.5 0 1 1 .434.89l-6.999 3.553a.5.5 0 0 1-.422 0L.789 8.114a.5.5 0 0 1-.223-.658z"></path>
                  <path d="M.789 10.447a.5.5 0 0 1 .658-.223L8 13.943l6.553-3.719a.5.5 0 1 1 .434.89l-6.999 3.553a.5.5 0 0 1-.422 0L.789 11.114a.5.5 0 0 1-.223-.658z"></path>
                </svg>
                <div class="js-${projectId}-tech-stack-text">${project.techStack}</div>
              </div>
              <div class="project-attribute">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check js-${projectId}-features-svg" viewBox="-1 -1 18 18"><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path></svg>
                <div class="features-text js-${projectId}-features-text">${project.features}</div>
              </div>
              <div class="project-attribute">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock js-${projectId}-time-svg" viewBox="-1 -1 18 18"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path></svg>
                <div class="time-text js-${projectId}-time-text">${project.timePeriod}</div>
              </div>
             </div>
             <div class="project-buttons-section">
              <button class="view-project-button js-${projectId}-view-project-button js-view-project-button" data-project-name="${projectId}">Project</button>
              <button class="view-code-button js-${projectId}-view-code-button js-view-code-button" data-project-name="${projectId}">Code</button>
             </div>
          </div>
        </div>
      </div>
  `;
});

document.querySelector('.js-projects-conatiner').innerHTML = productsHTML;


document.querySelectorAll('.js-project-info')
  .forEach((project) => {
    const projectName = project.dataset.projectName;

    project.addEventListener('mouseenter', () => {
    const techStackSVG = document.querySelector(`.js-${projectName}-tech-stack-svg`);
    techStackSVG.style.color = 'rgb(25, 135, 84)';

    const techStackText = document.querySelector(`.js-${projectName}-tech-stack-text`);
    techStackText.style.color = 'Black';

    const featuresSVG = document.querySelector(`.js-${projectName}-features-svg`);
    featuresSVG.style.color = 'Red';

    const featuresText = document.querySelector(`.js-${projectName}-features-text`);
    featuresText.style.color = 'Black';

    const timeSVG = document.querySelector(`.js-${projectName}-time-svg`);
    timeSVG.style.color = 'darkblue';

    const timeText = document.querySelector(`.js-${projectName}-time-text`);
    timeText.style.color = 'Black';

    const codeViewButton = document.querySelector(`.js-${projectName}-view-code-button`);
    codeViewButton.classList.add('view-project-buttons-visible');

    const viewProjectButton = document.querySelector(`.js-${projectName}-view-project-button`);
    viewProjectButton.classList.add('view-project-buttons-visible');
  });

  project.addEventListener('mouseleave', () => {
    const techStackSVG = document.querySelector(`.js-${projectName}-tech-stack-svg`);
    techStackSVG.style.color = 'rgb(173, 181, 189)';

    const techStackText = document.querySelector(`.js-${projectName}-tech-stack-text`);
    techStackText.style.color = 'rgb(173, 181, 189)';

    const featuresSVG = document.querySelector(`.js-${projectName}-features-svg`);
    featuresSVG.style.color = 'rgb(173, 181, 189)';

    const featuresText = document.querySelector(`.js-${projectName}-features-text`);
    featuresText.style.color = 'rgb(173, 181, 189)';

    const timeSVG = document.querySelector(`.js-${projectName}-time-svg`);
    timeSVG.style.color = 'rgb(173, 181, 189)';

    const timeText = document.querySelector(`.js-${projectName}-time-text`);
    timeText.style.color = 'rgb(173, 181, 189)';

    const codeViewButton = document.querySelector(`.js-${projectName}-view-code-button`);
    codeViewButton.classList.remove('view-project-buttons-visible');

    const viewProjectButton = document.querySelector(`.js-${projectName}-view-project-button`);
    viewProjectButton.classList.remove('view-project-buttons-visible');
  });
});


document.querySelectorAll('.js-view-project-button')
  .forEach((viewProjectButton) => {
    viewProjectButton.addEventListener('click', () => {
      const projectName = viewProjectButton.dataset.projectName;
      if (projectName === 'youtube-clone') {
        window.location.href = 'https://tanay-lakhotiya.github.io/Youtube';
      } else if (projectName === 'calculator-app') {
        window.location.href = 'https://tanay-lakhotiya.github.io/calculator-app';
      } else if (projectName === 'rock-paper-scissors-app') {
        window.location.href = 'https://tanay-lakhotiya.github.io/rock-paper-scissors';
      }
    });
  });

document.querySelectorAll('.js-view-code-button')
.forEach((viewCodeBUtton) => {
  viewCodeBUtton.addEventListener('click', () => {
    const projectName = viewCodeBUtton.dataset.projectName;
    if (projectName === 'youtube-clone') {
      window.location.href = 'https://github.com/Tanay-Lakhotiya/Youtube';
    } else if (projectName === 'calculator-app') {
      window.location.href = 'https://github.com/Tanay-Lakhotiya/calculator-app';
    } else if (projectName === 'rock-paper-scissors-app') {
      window.location.href = 'https://github.com/Tanay-Lakhotiya/rock-paper-scissors';
    }
  });
});