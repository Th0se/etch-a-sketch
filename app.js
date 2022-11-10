const mainContainer = document.querySelector(`#mainContainer`);
mainContainer.style.border = `3px solid black`;

const colour = `green`;

const makeGrids = () => {
    mainContainer.setAttribute(`style`, `grid-template-columns: repeat(16, 2fr); grid-template-rows: repeat(16, 2fr)`);
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement(`div`);
        cell.classList.add(`cell`);
        cell.addEventListener(`click`, (i) => {
            i.target.style.backgroundColor = colour;
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
resetButton.textContent = `clear grid`;
resetButton.style.margin = `5px`;
resetButton.style.padding = `10px`;
resetButton.style.border = `3px solid black`;
resetButton.addEventListener('click', () => {
    for (let i = 0; i < sizeSlider.value * sizeSlider.value; i++) {
        mainContainer.children[i].style.backgroundColor = `blue`;
    };
});

const sizeSlider = document.querySelector(`#sizeSlider`);
sizeSlider.addEventListener(`input`, () => {
    sizeDisplay.textContent = sizeSlider.value;
    removeAllChildNodes(mainContainer);
    mainContainer.setAttribute('style', `grid-template-columns: repeat(${sizeSlider.value}, 2fr); grid-template-rows: repeat(${sizeSlider.value}, 2fr);`);
    for (let i = 0; i < sizeSlider.value*sizeSlider.value; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('click', ((event) => {
            event.target.style.backgroundColor = colour;
        }));
        mainContainer.appendChild(div); 
    }
});

const sizeDisplay = document.createElement(`p`);
sizeDisplay.textContent = sizeSlider.value;

const sizeControl = document.querySelector(`#sizeControl`);
sizeControl.appendChild(sizeDisplay);
sizeControl.style.display = `flex`;
sizeControl.style.flexDirection = `column`;
sizeControl.style.alignItems = "center";
sizeControl.style.border = `3px solid black`;
sizeControl.style.margin = `5px`;

const colourNote = document.createElement(`p`);
colourNote.textContent = `Note: the default colour is green,
                            and you must choose a colour
                            each time you resize the grid.`

const colourPicker = document.createElement(`input`);
colourPicker.setAttribute(`type`, `color`);
colourPicker.addEventListener(`input`, (() => {
    let colour = colourPicker.value;
    for (let i = 0; i < sizeSlider.value*sizeSlider.value; i++) {
        mainContainer.children[i].addEventListener(`click`, ((event) => {
            event.target.style.backgroundColor = colour;
        }));
    };
}));

const colourInstruction = document.createElement(`p`);
colourInstruction.textContent = `<= use this button to set
                                    how the grid change colour.`;
colourInstruction.style.marginLeft = `2px`;

const colourButton = document.createElement(`div`);
colourButton.appendChild(colourPicker);
colourButton.appendChild(colourInstruction);
colourButton.style.display = `flex`;
colourButton.style.alignItems = `center`;

const colourControl = document.createElement(`div`);
colourControl.appendChild(colourButton);
colourControl.appendChild(colourNote);
colourControl.style.border = '3px solid black';
colourControl.style.margin = '5px';

const topArea = document.querySelector('#topArea');
topArea.appendChild(resetButton);
topArea.appendChild(colourControl);
topArea.style.display = `flex`;
topArea.style.flexDirection = `column`;

makeGrids();
