let container = document.querySelector(".container");

let gridSize = 16;

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