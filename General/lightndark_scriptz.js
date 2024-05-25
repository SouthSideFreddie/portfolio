// Call all the elements to be used and assign them to variables.


let body = document.querySelector("body");
let ball = document.getElementById("ball");
let path = document.querySelector(".switch");
let togbar = document.querySelector(".tog");
let sub = document.getElementById("sub");


// Add an eventlistener to toggle between dark and light mode whilst changing the outlook
// of other elements as well to suit the dark mode.

ball.addEventListener("click", function(){
    ball.classList.toggle("move");
    body.classList.toggle('night');
    togbar.classList.toggle('backG');
    path.classList.toggle("pathbackG");
    sub.classList.toggle("nightText");
})
