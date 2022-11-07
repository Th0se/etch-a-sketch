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



const mainContainer = document.querySelector(`#mainContainer`);
makeHorizontalContainer(mainContainer);
mainContainer.style.display = `flex`;
mainContainer.style.flexDirection = `column`;
mainContainer.style.width = `1000px`;
mainContainer.style.height = `1000px`;


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
})
