function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  const size = Math.random() * 3 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  const animationDuration = Math.random() * 2 + 1;
  star.style.animationDuration = `${animationDuration}s`;
  star.style.animationDelay = `${Math.random()}s`;

  document.body.appendChild(star);
  setTimeout(() => {
    star.remove();
  }, animationDuration * 1000 * 1.5);
}

const numberOfStars = 1000;
for (let i = 0; i < numberOfStars; i++) {
  createStar();
}
setInterval(createStar, 50); 