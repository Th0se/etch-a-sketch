const mainContainer = document.querySelector(`#mainContainer`);

const makeGrids = () => {
    mainContainer.setAttribute(`style`, `grid-template-columns: repeat(16, 2fr); grid-template-rows: repeat(16, 2fr)`);
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement(`div`);
        cell.classList.add(`cell`);
        cell.addEventListener(`mouseover`, (i) => {
            i.target.style.backgroundColor = `green`;
        });
        mainContainer.appendChild(cell);
    };
};

const removeAllChildNodes = ((elementInput) => {
    while (elementInput.firstChild) {
        elementInput.removeChild(elementInput.firstChild);
    };
});

const resetButton = document.createElement(`button`);
resetButton.setAttribute(`id`, `resetButton`);
resetButton.textContent = `reset colour`;
resetButton.style.margin = `10px`;
resetButton.style.padding = `10px`;
resetButton.style.border = `1px solid black`;
resetButton.addEventListener('click', () => {
    for (let i = 0; i < sizeSlider.value * sizeSlider.value; i++) {
        mainContainer.children[i].style.backgroundColor = `blue`;
    };
});

const sizeSlider = document.querySelector(`#sizeSlider`);
const sizeDisplay = document.createElement(`p`);
sizeDisplay.textContent = sizeSlider.value;
sizeSlider.addEventListener(`input`, () => {
    sizeDisplay.textContent = sizeSlider.value;
    removeAllChildNodes(mainContainer);
    mainContainer.setAttribute('style', `grid-template-columns: repeat(${sizeSlider.value}, 2fr); grid-template-rows: repeat(${sizeSlider.value}, 2fr);`);
    for (let i = 0; i < sizeSlider.value*sizeSlider.value; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'green';
        })
        mainContainer.appendChild(div); 
    }
});

const sizeControl = document.querySelector(`#sizeControl`);
sizeControl.appendChild(sizeDisplay);
sizeControl.style.display = `flex`;
sizeControl.style.flexDirection = `column`;
sizeControl.style.alignItems = "center";

const topArea = document.querySelector('#topArea');
topArea.appendChild(resetButton);
topArea.style.display = `flex`;
topArea.style.justifyContent = 'center';

makeGrids();