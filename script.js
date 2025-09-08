// Effet d’apparition au scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Pour activer si déjà visible

// Lightbox pour la galerie
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxPrice = document.querySelector('.lightbox-price');
const closeBtn = document.querySelector('.lightbox .close');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    const price = item.querySelector('.price').textContent;
    lightboxImg.src = imgSrc;
    lightboxPrice.textContent = price;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Fermer lightbox en cliquant en dehors de l'image
lightbox.addEventListener('click', e => {
  if(e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

