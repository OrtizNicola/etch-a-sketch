const GRID_SIZE = 16;
const CONTAINER_SIZE = 500;
const PIXEL_SIZE = CONTAINER_SIZE / GRID_SIZE;

let container = document.querySelector(".container")

for(let i = 0; i < Math.pow(GRID_SIZE, 2); i++) {
    let pixel = document.createElement("div");
    pixel.style.cssText = `width: ${PIXEL_SIZE}px; 
                           height: ${PIXEL_SIZE}px; 
                           border: solid black 1px; 
                           box-sizing: border-box;`;

    pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = "pink";
    })

    container.appendChild(pixel);

    pixel
}