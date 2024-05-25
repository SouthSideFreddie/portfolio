// Make an array of colors to be assigned to the boxes

let colors = rcArray();

//call key elements from html and store them in variables 

let boxes = document.querySelectorAll(".squares");
let pickedcolor = colors[Math.floor(Math.random()*colors.length)]; //this gives a random color to be guessed 
let displayColor = document.getElementById('rule');
let retry = document.querySelector(".retry")
let congrats = document.getElementById("congrats")

// displays the rgb code of the picked color to be guessed
displayColor.textContent = pickedcolor;

for(i =  0, k = 0; i < colors.length; i++){
    boxes[i].style.backgroundColor = colors[i];

    boxes[i].addEventListener("click", function(){
        alert(this.style.backgroundColor)        
            if(this.style.backgroundColor == pickedcolor){
                colorChange(pickedcolor); //this changes all the boxes to the selected color if guessed correctly.

                let time = setTimeout(function(){congrats.style.display = "flex"}, 1000) //this displays a congratulatory message after winning
                
                if(retry.style.display == "flex"){
                    retry.style.display = "none"; //this removes the retry prompt/div from the screen.
                }
        }
        else{
            // a function that is a pop-up that prompts the user to retry then disappears.
            secs = 0; 
            retry.style.display = "flex";
            retry.textContent = "Please Try Again";
            this.style.backgroundColor = "black"
            function short(){
                secs++;
                if(secs === 2){
                    console.log(secs)
                    retry.style.display = "none";
                    secs = 0;
                    clearInterval(timer)
                }
            }
            var timer = setInterval(short, 500)
            
            
        }
    })
}

//this function changes all the boxes to the selected color to be guessed 

function colorChange(color){
    for(i = 0; i < colors.length; i++){
        boxes[i].style.backgroundColor = color;
    }
}

// This creates random rgb input for the boxes
function randColor(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ', ' + g + ", " +  b + ")";
}

// This adds the random rgb input to an array
function rcArray(){
    var arr = []
    for(i = 0; i < 6; i++){
        arr.push(randColor());
    }

    return arr;
}


