const makeHorizontalDiv = ((elementInput) => {
    let result = [];
    const numberOfDiv = 16;
    for (let i = 0; i < numberOfDiv; i++) {
        result.push(`<div class="grid"></div>`);
    };
    result = result.join('');
    elementInput.innerHTML = result;
});

const makeHorizontalContainer = ((elementInput) => {
    let result = [];
    const numberOfDiv = 16;
    for (let i = 0; i < numberOfDiv; i++) {
        result.push(`<div class="horizontalContainer"></div>`);
    };
    result = result.join('');
    elementInput.innerHTML = result;
});

const enumerate = ((elementInput) => {
    for (let i = 0; i < elementInput.length; i++) {
        elementInput[i].setAttribute(`id`, `horizontalContainer${i + 1}`);
    };
});



const resetButton = document.createElement(`div`);
resetButton.setAttribute(`id`, `resetButton`);
resetButton.textContent = `generate new grid`;
resetButton.style.margin = `10px`;
resetButton.style.padding = `10px`;
resetButton.style.border = `1px solid black`;



const mainContainer = document.querySelector(`#mainContainer`);
makeHorizontalContainer(mainContainer);
mainContainer.style.display = `flex`;
mainContainer.style.flexDirection = `column`;
mainContainer.style.width = `100%`;
mainContainer.style.height = `1000px`;
mainContainer.style.margin = `auto`;


const horizontalContainers = document.querySelectorAll('.horizontalContainer');
enumerate(horizontalContainers);
horizontalContainers.forEach((i) => {
    makeHorizontalDiv(i);
    i.style.height = `6%`;
    i.style.width = `100%`;
    i.style.display = `flex`;
    i.style.flexDirection = `row`;
});

const grid = document.querySelectorAll(`.grid`);
grid.forEach((i) => {
    i.style.height = `100%`;
    i.style.width = `6%`;
    i.style.border = `solid 1px black`;
    i.style.backgroundColor = `green`;
    i.addEventListener(`mouseover`, () => {
        i.style.backgroundColor = `blue`;
    })
})

const topArea = document.querySelector('#topArea');
topArea.appendChild(resetButton);
topArea.style.display = `flex`;
topArea.style.justifyContent = 'center';