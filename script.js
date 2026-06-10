const btn = document.getElementById('likeBtn');
const count = document.getElementById('likeCount');

let curtido = false;
let total = 0;

btn.addEventListener('click', () => {
  curtido = !curtido;

  if (curtido) {
    total++;
    btn.classList.add('curtido');
    btn.querySelector('.heart').textContent = '♥';
    btn.querySelector('.like-text').textContent = 'Curtido';
  } else {
    total--;
    btn.classList.remove('curtido');
    btn.querySelector('.heart').textContent = '♡';
    btn.querySelector('.like-text').textContent = 'Curtir';
  }

  count.textContent = total;
});
