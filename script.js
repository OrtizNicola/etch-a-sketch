const GRID_SIZE = 16;
const CONTAINER_SIZE = 500;

let container = document.querySelector(".container");
let resizeBtn = document.querySelector(".resize");
let input = document.querySelector("#size");

function createGrid(gridSize) {
    container.textContent = "";
    let pixelSize = CONTAINER_SIZE / gridSize;
    for(let i = 0; i < Math.pow(gridSize, 2); i++) {
        let pixel = document.createElement("div");
        pixel.style.cssText = `width: ${pixelSize}px; 
                               height: ${pixelSize}px; 
                               border: solid black 0.5px; 
                               box-sizing: border-box;`;

        pixel.addEventListener("mouseenter", () => {
            pixel.style.backgroundColor = "purple";
        })

        container.appendChild(pixel);
    }
}

resizeBtn.addEventListener("click", () => {
    createGrid(input.value);
})

createGrid(GRID_SIZE);