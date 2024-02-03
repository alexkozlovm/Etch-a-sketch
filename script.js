// Get all the .cell divs
const cells = document.querySelectorAll('.cell');
let color = 'white';
let mode = 'pen';

function active () {
    if (mode === 'pen') {
        color = 'white';
    } else if (mode === 'eraser') {
        color = '#282c34';
    } else {
        color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
}

// Add event listener to each cell
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        if (event.buttons === 1) {
            active()
            cell.style.backgroundColor = color;
            cell.style.cursor = 'crosshair';
        }
    });

    cell.addEventListener('click', () => {
        cell.style.backgroundColor = color;
    });
});

function reset() {
    cells.forEach(cell => {
        cell.style.backgroundColor = '#282c34';
    });
}

