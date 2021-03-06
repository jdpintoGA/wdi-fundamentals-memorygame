let cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png',
  },

  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png',
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png',
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png',
  },
];

let cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('you found a match!');
  } else {
    alert('try again :(');
    window.location.reload();
    //page refresh
  }
}

function flipCard(event) {
  const cardId = event.srcElement.getAttribute('data-id');
  event.srcElement.setAttribute('src', cards[cardId].cardImage);
  console.log(event.srcElement);
  console.log('user flipped ' + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  if (cardsInPlay.length % 2 === 0) {
    checkForMatch();
  }
}

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();

function mTest(a, b) {
  console.log(a % b);
}

mTest(2, 0);
