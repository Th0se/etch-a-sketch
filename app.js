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

const horizontalContainers = document.querySelectorAll('.horizontalContainer');
enumerate(horizontalContainers);
horizontalContainers.forEach((i) => {
    makeHorizontalDiv(i);
});

