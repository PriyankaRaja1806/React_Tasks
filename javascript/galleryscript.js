
document.addEventListener("DOMContentLoaded", function () {

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementById('close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const images = document.querySelectorAll('.gallery-img');
let currentIndex = 0;

// Open modal when an image is clicked
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

// Close modal
closeBtn.onclick = () => {
  modal.style.display = 'none';
};

// Navigate to next image
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  openModal();
};

// Navigate to previous image
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal();
};

// Optional: close modal on outside click
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};



});