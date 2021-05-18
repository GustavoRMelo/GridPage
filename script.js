const container = document.querySelector('.grid');
const inicialGrid = 16;
createGrid(inicialGrid);
document.getElementById("btn").addEventListener("click", changeGrid);
function changeGrid(){
    let gridSize = prompt("Choose grid size (limit=100): ")
    if (gridSize>100){
        alert("Grid too big.");
        return false;
    }
    let gridCreated = Math.ceil(Math.sqrt(gridSize));
    let columns = 'grid-template-columns: repeat('+gridCreated+',80px)';
    //let rows = 'grid-template-rows: repeat('+gridCreated+',80px)';
    removeAllChildNodes(container);
    container.setAttribute('style', columns);
    //container.setAttribute('style', rows);
    createGrid(gridSize);
};
function createGrid(inicialGrid){
    for (i=1; i<=inicialGrid;i++){
        const content = document.createElement('div');
        content.classList.add('cell');
        content.setAttribute('id', i);
        content.textContent = i;
        container.appendChild(content);
        let test = document.getElementById(i);
        test.addEventListener("mouseover", function( event ) {
        // highlight the mouseover target
        event.target.style.color = "orange";
  
        // reset the color after a short delay
            setTimeout(function() {
                event.target.style.color = "";
            }, 500);
        }, false);
    };
};
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
