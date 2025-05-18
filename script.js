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


const lightBtn = document.getElementById("light-mode");
const darkBtn = document.getElementById("dark-mode");
const body = document.body;
const homeSection = document.querySelector(".home");

function ativarModoClaro() {
  body.classList.add("light-mode");
  homeSection.classList.add("light-mode");
  lightBtn.classList.add("active");
  darkBtn.classList.remove("active");
  atualizarImagens(true);
}

function ativarModoEscuro() {
  body.classList.remove("light-mode");
  homeSection.classList.remove("light-mode");
  lightBtn.classList.remove("active");
  darkBtn.classList.add("active");
  atualizarImagens(false);
}

function atualizarImagens(modoClaroAtivo) {
  const imagensIntegrantes = {
    "integrante-yeri": {
      dark: "root/mídia/imagens/página_inicial/cosmic_yeri.jpeg",
      light: "root/mídia/imagens/página_inicial/red_yeri.jpg"
    },
    "integrante-joy": {
      dark: "root/mídia/imagens/página_inicial/cosmic_joy.jpeg",
      light: "root/mídia/imagens/página_inicial/light_joy.jpeg"
    },
    "integrante-wendy": {
      dark: "root/mídia/imagens/página_inicial/cosmic_wendy.jpeg",
      light: "root/mídia/imagens/página_inicial/light_wendy.jpeg"
    },
    "integrante-seulgi": {
      dark: "root/mídia/imagens/página_inicial/cosmic_seulgi.jpeg",
      light: "root/mídia/imagens/página_inicial/light_seulgi.jpeg"
    },
    "integrante-irene": {
      dark: "root/mídia/imagens/página_inicial/cosmic_irene.jpeg",
      light: "root/mídia/imagens/página_inicial/light_irene.jpeg"
    }
  };

  for (let integrante in imagensIntegrantes) {
    document.getElementById(integrante).src = modoClaroAtivo
      ? imagensIntegrantes[integrante].light
      : imagensIntegrantes[integrante].dark;
  }
}

// Eventos dos botões
lightBtn.addEventListener("click", ativarModoClaro);
darkBtn.addEventListener("click", ativarModoEscuro);

// Estado inicial: modo escuro ativo
document.addEventListener("DOMContentLoaded", () => {
  ativarModoEscuro();
});


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

