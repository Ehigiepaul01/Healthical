const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navList.classList.toggle('show');
});

// let accordions = document.querySelectorAll('.accordion-wrapper .accordion');
// accordions.forEach((acco) =>{
//   acco.onclick = () =>{
//     accordions.forEach((subcontent) =>{
//       subcontent.classList.remove('active');
//     })
//     acco.classList.add(active);
//   }
// })

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(function(accordion) {
  const heading = accordion.querySelector('.accordion-heading');

  heading.addEventListener('click', function() {
    accordion.classList.toggle('active');
  });
});

