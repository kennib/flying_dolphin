window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const headers = document.querySelectorAll('h1, h2, .photo_gallery img');
  headers.forEach(header => {
    const offset = scrollY;
    header.style.backgroundPosition = `${offset}px 0`;
  });
});
