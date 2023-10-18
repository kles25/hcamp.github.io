document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".indicator");
    let currentSlide = 0;
  
    function showSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }
      slides.forEach((slide) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
      });
      indicators.forEach((indicator, i) => {
        if (i === index) {
          indicator.classList.add("active");
        } else {
          indicator.classList.remove("active");
        }
      });
      currentSlide = index;
    }
  
    showSlide(currentSlide);
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        showSlide(index);
      });
    });
  
    // setInterval(() => {
    //   showSlide(currentSlide + 1);
    // }, 10000); // Auto slide every 3 seconds
  });