// const btn = document.getElementById("menu-btn");
// const nav = document.getElementById("mobile-menu");

// btn.addEventListener("click", () => {
//   btn.classList.toggle("open");
//   nav.classList.toggle("flex");
//   nav.classList.toggle("hidden");
// });

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


// const questions = document.querySelectorAll(".question");

// questions.forEach((question) => {
//   head.addEventListener("click", () => {
//     console.log('Clicked');
//     console.log('question.classList.contains("active"): ', question.classList.contains("active"));
//     const response = question.querySelector(".response");
//     console.log('response.style.display: ', response.style.display);
//     question.classList.toggle("active");
//     console.log('question.classList.contains("active"): ', question.classList.contains("active"));
//     if (question.classList.contains("active")) {
//       response.style.display = "block";
//     } else {
//       response.style.display = "none";
//     }
//   });
// });


const accordionHeaders = document.querySelectorAll('.head');

accordionHeaders.forEach(header => {
  header.addEventListener('click', event => {
    const parent = event.target.closest('.question');
    parent.classList.toggle('active');
  });
});