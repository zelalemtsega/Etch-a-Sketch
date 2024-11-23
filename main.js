const container = document.querySelector('.container');
const gridSize = 16;

// create the 16*16 grid
for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

// add event listner for mouseover for hoover effect
document.querySelectorAll('.square').forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
});

