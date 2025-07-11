
document.addEventListener("DOMContentLoaded", function () {

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementById('close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const images = document.querySelectorAll('.gallery-img');
let currentIndex = 0;


images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    openModal();
  });
});

function openModal() {
  modal.style.display = 'block';
  modalImg.src = images[currentIndex].src;
  captionText.textContent = images[currentIndex].alt;
}


closeBtn.onclick = () => {
  modal.style.display = 'none';
};


nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  openModal();
};


prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal();
};


window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};



});
