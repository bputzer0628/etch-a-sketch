// Select the container div from the HTML
const container = document.querySelector('.container');

const resetButton = document.getElementById('resize-button');

// Function to create the 16x16 grid
function createGrid(size) {
    // Clear any previous grid squares
    container.innerHTML = '';

    // Set the number of rows and columns dynamically
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const totalSquares = size * size;
    for (let i = 0; i < totalSquares; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');

        gridSquare.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });

        container.appendChild(gridSquare);
    }
}
function resetGrid() {
    let newSize = prompt("Enter the number of squares per side for the new grid (e.g., 16):");
    newSize = parseInt(newSize);

    if (!isNaN(newSize) && newSize > 0) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid positive number.");
        createGrid(16); // Fallback to a default size
    }
}
resetButton.addEventListener('click', resetGrid);

// Initial grid creation when the page first loads
createGrid(16);

