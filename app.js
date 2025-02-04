let container = document.querySelector(".container");

let gridSize = 16;

function generateGrid(gridSize) {
    for (let k = 0; k < gridSize; k++) {
        let row = document.createElement("div");
        row.classList = "row";
        
        for (let i = 0; i < gridSize; i++) {
            let square = document.createElement("div");
            square.classList = "square";
            // square.textContent = (k * gridSize) + i;
            
            row.appendChild(square)
        }
        container.appendChild(row)
    }
    
    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach(element => {
        element.addEventListener("mouseover", (e) => {
            element.style.backgroundColor = "red";
        })
    });
}

// Prompt user for new grid size on button press
let newBtn = document.querySelector(".setup");
newBtn.addEventListener("click", () => {
    let newGrid = parseInt(prompt("Enter a size (upto 100) for your new grid: "))
    if (newGrid > 100) {
        alert("Please enter a number below 100")
        refresh();
    }
    gridSize = newGrid;
    // Remove divs in container and add new divs
    let toRemove = Array.from(container.children)
    toRemove.forEach(element => {
        element.remove();
    })
    generateGrid(gridSize);
})


// Starting default grid
generateGrid(gridSize);