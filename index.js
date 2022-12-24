// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I got clicked");
// }

// Everytime the user clicks the first button, handleClick function is called
// No need to use paranethese in the method because it would be activated
// when addEventListener is called rather than when the button is clicked

// Anonymous button

// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked");
// });

var length = document.querySelectorAll(".drum").length;
var audio

function sound(input){
    
    switch (input) {
        case "w":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "k":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        default:
            alert("this.innerHTML");
            break;
    }
}


for (var i = 0 ; i < length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        sound(this.innerHTML);
        audio.play();
    });
}


document.addEventListener("keydown", function(event){
    console.log(event);
    sound(event.key);
    audio.play();
});
    







// console.log(this.innerHTML)
        // switch (this.innerHTML) {
        //     case "w":
        //         audio = new Audio("sounds/tom-2.mp3");
        //         break;
        //     case "a":
        //         audio = new Audio("sounds/tom-1.mp3");
        //         break;
        //     case "s":
        //         audio = new Audio("sounds/tom-3.mp3");
        //         break;
        //     case "d":
        //         audio = new Audio("sounds/tom-4.mp3");
        //         break;
        //     case "j":
        //         audio = new Audio("sounds/crash.mp3");
        //         break;
        //     case "k":
        //         audio = new Audio("sounds/snare.mp3");
        //         break;
        //     case "l":
        //         audio = new Audio("sounds/kick-bass.mp3");
        //         break;
        //     default:
        //         alert("this.innerHTML");
        //         break;
        // }