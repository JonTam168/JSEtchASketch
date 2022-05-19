const change = document.getElementById('box');

/*change.addEventListener('click', change.setAttribute('style', backgroundColor: red)); 
change.setAttribute('style', backgroundColor: red); */

const container = document.getElementById('container');

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++){
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover', changeColor);

    };
};

function changeColor(color){
    this.style.backgroundColor = 'red';
    return false;
}
const reset = document.getElementById('reset');

function resetGrid(rows, cols) {
    for(c = 0; c < (rows *cols); c++){
        let cell = document.querySelectorAll('div');
        cell[c].style.backgroundColor = 'white';
    }

}


createGrid(16, 16);
    
