const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  const flippedCards = [];

  function handleCardClick(card) {
    if (!card.classList.contains('blocked') && !card.classList.contains('turned') && flippedCards.length < 2) {
      card.classList.add('turned');
      flippedCards.push(card);
  
      if (flippedCards.length === 2) {
        const card1 = flippedCards[0].getAttribute('data-card-name');
        const card2 = flippedCards[1].getAttribute('data-card-name');
  
        if (memoryGame.checkIfPair(card1, card2)) {
          flippedCards.forEach((card) => card.classList.add('blocked'));
          flippedCards.length = 0; // Clear the flippedCards array
        } else {
          setTimeout(() => {
            flippedCards.forEach((card) => {
              card.classList.remove('turned');
            });
            flippedCards.length = 0; // Clear the flippedCards array
          }, 1000);
        }
  
        document.getElementById('pairs-clicked').textContent = memoryGame.pairsClicked;
        document.getElementById('pairs-guessed').textContent = memoryGame.pairsGuessed;
  
        if (memoryGame.checkIfFinished()) {
          alert('You won!');
        }
      }
    }
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      handleCardClick(card);
    });
  });
});