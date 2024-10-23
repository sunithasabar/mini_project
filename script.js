// script.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelector('.mobile-nav ul');
  
    mobileNavToggle.addEventListener('click', function() {
      mobileNavLinks.classList.toggle('open');
    });
  });
  // Auto Slider
  let slideIndex = 0;
  carousel();
  
  function carousel() {
    let slides = document.querySelectorAll('.slides img');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(carousel, 3000); // Change slide every 3 seconds
  }
  