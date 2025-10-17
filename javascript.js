// Select the container div from the HTML
const container = document.querySelector('.container');

const resetButton = document.getElementById('resize-button');

// Function to generate a random hexadecimal color code
function getRandomColor() {
    // Generate a random number up to 16777215 (FFFFFF in hexadecimal)
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    // Pad the string with leading zeros if necessary to ensure it's 6 characters long
    return '#' + randomHex.padStart(6, '0');
}

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

        // Add a mouseover event listener to each square
        gridSquare.addEventListener('mouseover', function() {
            // This time, set the background color to a new random color each time
            this.style.backgroundColor = getRandomColor();
        });

        container.appendChild(gridSquare);
    }
}

// Function to reset the grid
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

// Add a click event listener to the button
resetButton.addEventListener('click', resetGrid);
// Initial grid creation when the page first loads
createGrid(16);