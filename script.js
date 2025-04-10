const container = document.querySelector('#content');

const buttonDiv = document.querySelector('#top');

const button = document.createElement('button');
button.textContent = "Generate";
button.setAttribute("id", "button")



function sketchPad (element, quantity, parentElement) {
    const value = quantity * quantity;
    const containerWidth = container.offsetWidth;
    const squareSize = containerWidth / Math.sqrt(value);
    for(let i = 0; i < value; i++) {

        const square = document.createElement(element);
        parentElement.appendChild(square);
        square.setAttribute("class", "square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    }
}

buttonDiv.appendChild(button);

sketchPad("div", 100, container);


document.addEventListener("mouseover", function(event) {
    if(event.target.classList.contains("square")){
        event.target.classList.add("blue");
    }
});

function emptyDom() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
}

button.addEventListener("click", () => {
    let value = prompt("How many squares for new grid?");
     if(value <= 100) {
        emptyDom()
        sketchPad("div", value, container);
}
});