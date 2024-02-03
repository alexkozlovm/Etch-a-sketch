// Get all the .cell divs
const cells = document.querySelectorAll('.cell');
let color = 'white';

// Add event listener to each cell
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        if (event.buttons === 1) {
            cell.style.backgroundColor = color;
            cell.style.cursor = 'crosshair';
        }
    });

    cell.addEventListener('click', () => {
        cell.style.backgroundColor = color;
    });
});


