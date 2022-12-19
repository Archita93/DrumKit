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

for (var i = 0 ; i < length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("I got clicked");
    });
}