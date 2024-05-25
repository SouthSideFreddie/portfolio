var mobMenu = document.querySelector(".mobile_menu");
var bars = document.getElementById("bars");
var X = document.getElementById("X");
var actions = document.getElementById("action")

function Xappear(){
    bars.style.display ="none";
    X.style.display ="block";
}
function barPpear(){
    X.style.display = 'none';
    bars.style.display = 'block';
}
function mobAppear(){
    mobMenu.classList.toggle("reset");
}
actions.addEventListener("click", function(){
    setTimeout(mobAppear, 100);
    setTimeout(function(){
        if(mobMenu.classList.contains("reset")){
            Xappear();
        }
        else{
            barPpear();
        }
    }, 105)
        
})