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

// replace the old grid with a new one
const button = document.querySelector('.resize-button');

button.addEventListener('click', () => {
    let gridSize = parseInt(prompt('Enter grid size (max 100):'));
    if (gridSize > 100) gridSize = 100;

    // Clear existing grid
    container.innerHTML = '';

    // Create new grid
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.flex = `1 0 calc(100% / ${gridSize})`;
        container.appendChild(square);
    }

    // Add hover effect
    document.querySelectorAll('.square').forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
});


