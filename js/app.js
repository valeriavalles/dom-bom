//window.onload = function() {
 // es un evento que le indica 
//

window.onload = function() {
    var board = document.querySelector('.board-js');
   
    /*board.addEventListener('click', function(event){
        event.target.style.backgroundColor = 'red';
    });
    board.addEventListener('dblclick', function(event){
        event.target.style.backgroundColor = 'green';
    });
    board.addEventListener('dblclick', function(event){
        event.target.style. = 'green';
    });

};

function addBgc(event){
    event.target.style.backgroundColor='red';
}*/
board.addEventListener('click',addx)

};
var centinel = true;
function addx(event){
    if (event.target.matches('td') && event.target.textContent===''){
    if(centinel)
    event.target.textContent = 'x';
   // centinel = false;//
else
    event.target.textContent = 'o';
    centinel = !centinel;
 }
}