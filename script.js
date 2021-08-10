let sqr = document.querySelector("#block");
let innerSqrs = document.querySelectorAll(".inner-block");
let heading = document.querySelector("#heading");

sqr.addEventListener("mousedown", function(){
    sqr.style.border = "0px solid red";
    event.target.innerHTML = magic();
    innerSqrs = document.querySelectorAll(".inner-block");
    
});


function magic() {
    return  `<div class="inner-block" style="background-color: ${backgroundColorMagic()}"></div>
    <div class="inner-block" style="background-color: ${backgroundColorMagic()}"></div>
    <div class="inner-block" style="background-color: ${backgroundColorMagic()}"></div>
    <div class="inner-block" style="background-color: ${backgroundColorMagic()}"></div>`; 
}

function random() {
    return Math.floor(Math.random() * 255);
}

function backgroundColorMagic() {
  
    return `rgb(${random()}, ${random()} ,${random()})`
}

setInterval(() => {
    heading.style.color = backgroundColorMagic();
    innerSqrs.forEach(element => {
        
    element.style.backgroundColor = backgroundColorMagic();

}); 
}, 2150);
