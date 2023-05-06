const screen01 = document.querySelector('.screen01');
const screen02 = document.querySelector('.screen02');
const screen01Img = document.querySelector('.screen01 img');
const cookieResponse = document.querySelector('.cookie-response');
const tryAgainButton = document.querySelector('.screen02 button');
const cookieMessage = document.querySelector('.screen02 p');
const phrases = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Siga os bons e aprenda com eles.',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
  'O bom-senso vale mais do que muito conhecimento.',
  'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
  'São os nossos amigos que nos ensinam as mais valiosas lições.',
  'Aquele que se importa com o sentimento dos outros, não é um tolo.',
  'A adversidade é um espelho que reflete o verdadeiro eu.',
  'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
  'Uma bela flor é incompleta sem as suas folhas.'
];

document.body.addEventListener('keydown', event => {
  if(event.key === 'Enter' && screen02.classList.contains('hide'))
    handleClickCookie()
});

screen01Img.addEventListener('click', () => {
handleClickCookie()
});

tryAgainButton.addEventListener('click', event => {
  event.preventDefault()
  toggleScreen()
})

function toggleScreen() {
  screen01.classList.toggle('hide');
  screen02.classList.toggle('hide');
}

function handleClickCookie() {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  cookieMessage.innerHTML = randomPhrase;
  toggleScreen();
}




