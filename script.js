// =======================
// CAROUSEL FUNCTIONALITY
// =======================
const slides = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  "https://images.unsplash.com/photo-1599423300746-b62533397364"
];

let currentSlide = 0;
const mainImage = document.getElementById("carouselMain");

function updateSlide() {
  mainImage.src = slides[currentSlide];
  const thumbs = document.querySelectorAll(".carousel-thumbs img");
  thumbs.forEach((thumb, i) => {
    thumb.classList.remove("active-thumb");
    if (i === currentSlide) thumb.classList.add("active-thumb");
  });
}

function nextSlide() { currentSlide = (currentSlide + 1) % slides.length; updateSlide(); }
function prevSlide() { currentSlide = (currentSlide - 1 + slides.length) % slides.length; updateSlide(); }
function goToSlide(index) { currentSlide = index; updateSlide(); }

updateSlide();
setInterval(nextSlide, 5000);

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const marciPic = document.getElementById("marci-pic");
const aboutUsSection = document.getElementById("about-us");

marciPic.addEventListener("click", () => {
  aboutUsSection.scrollIntoView({ behavior: 'smooth' });
});
function toggleDropdown() {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('open');
}