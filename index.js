function revealOnScroll() {
    const elements = document.querySelectorAll('.box, .container');

    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100) {
        el.classList.add('show');
      }
    });
  }


  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

 
  function revealAppSection() {
    const appText = document.querySelector('.app-text');
    const appImg = document.querySelector('.app-img');

    const triggerPoint = window.innerHeight - 100;

    [appText, appImg].forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerPoint) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', revealAppSection);
  window.addEventListener('load', revealAppSection);

  function revealAboutSection() {
    const aboutImg = document.querySelector('.about-img');
    const aboutText = document.querySelector('.about-text');

    const triggerPoint = window.innerHeight - 100;

    [aboutImg, aboutText].forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerPoint) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', revealAboutSection);
  window.addEventListener('load', revealAboutSection);