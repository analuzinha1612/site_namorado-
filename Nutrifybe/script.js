const button = document.getElementById('surpriseBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = "Te amo demais, meu amor! 💖";
  message.classList.add('show');
  createHearts(20);
});

function createHearts(amount) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.animationDelay = (Math.random() * 2) + 's';
    heart.style.width = heart.style.height = (10 + Math.random() * 20) + 'px';

    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }
}
