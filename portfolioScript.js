let symbols = document.getElementById("symbols");
let links = document.querySelector(".links")
let taunt = document.getElementById("taunt");
let clicktarget = document.getElementById("clicktarget")
let ulo = document.getElementById('skillz');
let experienz = document.querySelector(".experienz")
let phone = document.getElementById("phone")
let number = document.getElementById("number")
let fill = document.querySelector(".fill")
let button = document.querySelector(".clickme")
let exp_text = document.querySelector(".exp_text")
let intro = document.querySelector(".intro");
let projreveal = document.querySelector(".seeProjects")
let projects = document.querySelector(".projectlist")
let hire = document.querySelector(".hireMe")

// skills visibility toggling
clicktarget.addEventListener("click", function(e){
    ulo.style.display = 'flex'
    taunt.style.display = "none"
})
// For Mobile Menu and Hamburger symbols
symbols.addEventListener("click", function(e){
    symbols.classList.toggle("X");
    links.classList.toggle("open")
})
links.addEventListener("click", function(o){
    links.classList.remove("open")
    symbols.classList.remove("X")
})

// For display of number at footer
phone.addEventListener("click", function(e){
    phone.style.display = "none";
    number.style.display ="flex";
})

// Brings out the projects when a button is clicked
projreveal.addEventListener("click", function(t){
    intro.style.display ="none";
    projects.style.display = "flex";
    function show(){
        hire.style.display = "block"
    }
    setTimeout(show, 2600)
})


function show1(){
    experienz.classList.add("showcase1")
}
function show2(){
    experienz.classList.replace("showcase1", "showcase2")
}
function show3(){
    experienz.classList.replace("showcase2", "showcase3")
}
function reset(){
    experienz.classList.remove("showcase2")
}


// For experiences content to appear as an anumation, one after the other
button.addEventListener("click", function(w){
    exp_text.style.display ="none";
    show1()
    fill.addEventListener("animationend", function(e){
        show2();
        setTimeout(show3, 3100)
    })
})


