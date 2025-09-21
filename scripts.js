// Carrusel simple
document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelector('.carousel-images');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  const totalImages = images.children.length;
  let index = 0;

  function showImage(i) {
    images.style.transform = `translateX(-${i * 100}%)`;
  }

  prev.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : totalImages - 1;
    showImage(index);
  });

  next.addEventListener('click', () => {
    index = (index < totalImages - 1) ? index + 1 : 0;
    showImage(index);
  });
});
