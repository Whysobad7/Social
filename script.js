document.querySelector(".down").addEventListener("click", function () {
  window.scrollTo({
    top: window.innerHeight, // Скролл на высоту первого экрана
    behavior: "smooth", // Плавный скролл
  });
});

var acc = document.getElementsByClassName("accordeon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active-acco");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });

  slides[currentIndex].classList.add("active");

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function moveSlide(n) {
  showSlide(currentIndex + n);
}

function currentSlide(n) {
  showSlide(n - 1);
}

// Инициализация
showSlide(currentIndex);

document.getElementById("year").textContent = new Date().getFullYear();
