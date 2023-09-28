
const spaceship3 = document.querySelector('#spaceship3');
const spaceship4 = document.querySelector('#spaceship4');
var spaceshipHeight = spaceship3.clientHeight;


window.addEventListener('scroll',(event) => {

    var b = document.body.offsetHeight;
    var c = window.scrollY;

    var position = ((c/b)-(spaceshipHeight/b))*100;
    console.log("position = " + position, "imgHeight = " + spaceshipHeight);

    
    spaceship3.style.bottom = position + '%';
    spaceship4.style.bottom =  position + '%';

});