const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navList.classList.toggle('show');
});

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(function(accordion) {
  const heading = accordion.querySelector('.accordion-heading');

  heading.addEventListener('click', function() {
    accordion.classList.toggle('active');
  });
});

