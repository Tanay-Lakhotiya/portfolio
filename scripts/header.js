const headerHTML = `
  <div class="left-section">
    <a href="index.html" class="home-link">
      <img class="logo-image" src="images/logo.png" alt="">
      tanaylakhotiya.dev
    </a>
    <a href="projects.html" class="header-link js-projects-link">Projects</a>
    <a href="" class="header-link">Experience</a>
  </div>
  <div class="right-section">
    <a href="" class="header-link">Resume</a>
    <a href="" class="header-link">About</a>
    <a href="" class="header-link">Contact</a>
  </div>
`;

document.querySelector('.header').innerHTML = headerHTML;

if (document.title.includes('Projects')) {
  document.querySelector('.js-projects-link').classList.add('underline-visible');
}