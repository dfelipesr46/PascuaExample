const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');

const gridSize = 5;
let score = 0;

// Generate random positions for Easter eggs
const eggPositions = new Set();
while (eggPositions.size < 5) {
  const randomPos = Math.floor(Math.random() * (gridSize * gridSize));
  eggPositions.add(randomPos);
}

// Create the grid
for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  if (eggPositions.has(i)) {
    const egg = document.createElement('img');
    egg.src = 'https://cdn-icons-png.flaticon.com/512/725/725188.png';
    egg.alt = 'Easter Egg';
    cell.appendChild(egg);
    cell.dataset.egg = true;
  }
  gameBoard.appendChild(cell);
}

// Add click event
gameBoard.addEventListener('click', (e) => {
  const cell = e.target.closest('.cell');
  if (!cell || cell.classList.contains('found')) return;

  if (cell.dataset.egg) {
    cell.classList.add('found');
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    if (score === eggPositions.size) {
      alert('You found all the Easter eggs! 🎉');
    }
  } else {
    alert('No egg here! 🐣');
  }
});
