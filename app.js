const input = document.querySelector('input');
const output = document.querySelector('.output-text');
const errorWords = document.querySelector('.danger');
const text =
  'Тополиный пух, Пашик - петух.';
const textArr = text.split(' ');

let index = 0;

const timeStart = Date.now();

input.addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    if (e.target.value === textArr[index]) {
      output.textContent += e.target.value + ' ';
      e.target.value = '';
      index++;
      if (output.innerText.length === text.length) {
        const result = Date.now() - timeStart;
        let date = new Date();
        date.setTime(result);
        alert(`you spent ${date.getSeconds()} seconds`);
        const newGame = confirm('again?');
        if (newGame) {
          index = 0;
          output.textContent = ''
        } else {
          input.removeEventListener('keydown', () => { })
          alert('Я знаю, что ты будешь делать дальше. Сча помогу!!!');
          window.location.href = 'https://www.google.com/search?q=pornhub&oq=pornhub&aqs=chrome..69i57.1556j0j1&sourceid=chrome&ie=UTF-8';
        };
      }
    } else {
      errorWords.textContent = e.target.value + ' needs - ' + textArr[index];
      errorWords.classList.remove('hide');
      setTimeout(() => {
        errorWords.classList.add('hide');
      }, 2000);
    }
  }
});
