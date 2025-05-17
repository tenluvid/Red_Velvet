let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}


document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.querySelector(".read-more-btn");
    const extraText = document.querySelector(".extra-text");

    if (readMoreBtn && extraText) {
        readMoreBtn.addEventListener("click", function () {
            extraText.classList.toggle("active");

            if (extraText.classList.contains("active")) {
                readMoreBtn.textContent = "LEIA MENOS";
            } else {
                readMoreBtn.textContent = "LEIA MAIS";
            }
        });
    }
});
