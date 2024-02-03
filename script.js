const gridSizeInput = document.getElementById('grid-size');
const container = document.getElementById('container');
let color = 'white';
let mode = 'pen';

// Function to create the grid
function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid
    const cellSize = 800 / size; // Calculate cell size to fit the grid
    container.style.gridTemplateColumns = `repeat(${size}, ${cellSize}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${cellSize}px)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        // Remove fixed width and height from cell class in CSS
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.addEventListener('mouseover', draw);
        cell.addEventListener('mousedown', draw);
        container.appendChild(cell);
    }
}


// Function to handle drawing on cells
function draw(event) {
    if (event.type === 'mouseover' && !event.buttons) return;
    const cell = event.target;
    if (mode === 'pen') {
        color = 'white';
    } else if (mode === 'eraser') {
        color = '#282c34';
    } else if (mode === 'rainbow') {
        color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    cell.style.backgroundColor = color;
    cell.style.cursor = 'crosshair';
}

// Reset function
function reset() {
    container.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = '#282c34';
    });
}

// Event listener for the grid size input
gridSizeInput.addEventListener('input', () => {
    createGrid(gridSizeInput.value);
});

// Initial grid setup
createGrid(gridSizeInput.value);

// Update active function to be handled within draw function directly
