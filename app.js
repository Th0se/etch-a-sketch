const mainContainer = document.querySelector(`#mainContainer`);

const makeGrids = () => {
    mainContainer.setAttribute(`style`, `grid-template-columns: repeat(16, 2fr); grid-template-rows: repeat(16, 2fr)`);
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement(`div`);
        cell.classList.add(`cell`);
        cell.addEventListener(`click`, (i) => {
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
sizeSlider.addEventListener(`input`, () => {
    sizeDisplay.textContent = sizeSlider.value;
    removeAllChildNodes(mainContainer);
    mainContainer.setAttribute('style', `grid-template-columns: repeat(${sizeSlider.value}, 2fr); grid-template-rows: repeat(${sizeSlider.value}, 2fr);`);
    for (let i = 0; i < sizeSlider.value*sizeSlider.value; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('click', function(event){
            event.target.style.backgroundColor = green;
        })
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

const colourControl = document.createElement(`div`);
const colourPicker = document.createElement(`input`);
colourPicker.setAttribute(`type`, `color`);
colourPicker.addEventListener(`input`, (() => {
    for (let i = 0; i < sizeSlider.value*sizeSlider.value; i++) {
        mainContainer.children[i].addEventListener(`click`, ((event) => {
            event.target.style.backgroundColor = newColor;
        });
    });
);
colourControl.appendChild(colourPicker);

const topArea = document.querySelector('#topArea');
topArea.appendChild(resetButton);
topArea.appendChild(colourControl);
topArea.style.display = `flex`;
topArea.style.justifyContent = 'center';

makeGrids();

const chooseColor = document.querySelector('#color');
chooseColor.addEventListener('input', function(){
    let val = slider.value;
    let newColor = chooseColor.value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = newColor;
        })
    }
});