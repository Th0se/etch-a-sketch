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
console.log(horizontalContainers);

/* const horizontalContainer1 = document.querySelector(`#horizontalContainer1`);
horizontalDiv(horizontalContainer1);

const horizontalContainer2 = document.querySelector(`#horizontalContainer2`);
horizontalDiv(horizontalContainer2);

const horizontalContainer3 = document.querySelector(`#horizontalContainer3`);
horizontalDiv(horizontalContainer3);

const horizontalContainer4 = document.querySelector(`#horizontalContainer4`);
horizontalDiv(horizontalContainer4);

const horizontalContainer5 = document.querySelector(`#horizontalContainer5`);
horizontalDiv(horizontalContainer5);

const horizontalContainer6 = document.querySelector(`#horizontalContainer6`);
horizontalDiv(horizontalContainer6);

const horizontalContainer7 = document.querySelector(`#horizontalContainer7`);
horizontalDiv(horizontalContainer7);

const horizontalContainer8 = document.querySelector(`#horizontalContainer8`);
horizontalDiv(horizontalContainer8);

const horizontalContainer9 = document.querySelector(`#horizontalContainer9`);
horizontalDiv(horizontalContainer9);

const horizontalContainer10 = document.querySelector(`#horizontalContainer10`);
horizontalDiv(horizontalContainer10);

const horizontalContainer11 = document.querySelector(`#horizontalContainer11`);
horizontalDiv(horizontalContainer11);

const horizontalContainer12 = document.querySelector(`#horizontalContainer12`);
horizontalDiv(horizontalContainer12);

const horizontalContainer13 = document.querySelector(`#horizontalContainer13`);
horizontalDiv(horizontalContainer13);

const horizontalContainer14 = document.querySelector(`#horizontalContainer14`);
horizontalDiv(horizontalContainer14);

const horizontalContainer15 = document.querySelector(`#horizontalContainer15`);
horizontalDiv(horizontalContainer15);

const horizontalContainer16 = document.querySelector(`#horizontalContainer16`);
horizontalDiv(horizontalContainer16);
*/