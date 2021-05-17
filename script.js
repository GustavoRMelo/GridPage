const container = document.querySelector('.grid');

for (i=1; i<=16;i++){
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