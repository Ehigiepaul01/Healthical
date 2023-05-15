const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navList.classList.toggle('show');
});

const testimonials = document.querySelector('.test-container');
const testimonialItems = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;
const lastIndex = testimonialItems.length - 1;

function showTestimonial() {
  testimonialItems.forEach((testimonial) => {
    testimonial.style.display = 'none';
  });

  testimonialItems[index].style.display = 'flex';
}

function nextTestimonial() {
  if (index === lastIndex) {
    index = 0;
  } else {
    index++;
  }

  showTestimonial();
}

function prevTestimonial() {
  if (index === 0) {
    index = lastIndex;
  } else {
    index--;
  }

  showTestimonial();
}

// show first testimonial initially
showTestimonial();

// add event listeners to buttons
nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const head = question.querySelector(".head");
  head.addEventListener("click", () => {
    question.classList.toggle("active");
    const response = question.querySelector(".response");
    if (question.classList.contains("active")) {
      response.style.display = "block";
    } else {
      response.style.display = "none";
    }
  });
});
