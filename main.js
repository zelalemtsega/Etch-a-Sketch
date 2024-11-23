const container = document.querySelector('.container');
const gridSize = 16;

// create the 16*16 grid
for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}
