function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

let resizeButton = document.querySelector('#resize-button');

val = 16;
addBoxes();

resizeButton.addEventListener('click', ()=> {
    val = prompt('Please enter a value between 1-100', '');
    if (val == null) {
        val = undefined
    } else if (val <= 100) {
        addBoxes();
    } else {
        alert('Please enter a valid value')
        val = undefined
    }
})

function addBoxes () {
removeAllChildNodes(container);
container = document.querySelector('#container')
container.setAttribute('style', `grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr);`);

for (i = 0; i <= val**2; i++) {

    grid = document.querySelectorAll('.box');

    let newBox = document.createElement('div');
    newBox.classList.add('box');
    container.appendChild(newBox);

    grid.forEach((x) => x.addEventListener('mouseover', assignColored));
}
}

function assignColored (x) {
    x.target.classList.add('colored');
}

let clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    grid.forEach((x) => x.classList.remove('colored'));
});