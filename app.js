console.log('It works!!');



//==============================================



const img = document.createElement('img');
img.setAttribute('src','https://source.unsplash.com/random');


let myButton = document.querySelector("button");
function myCallback() { console.log("The button was clicked");
}
myButton.addEventListener("click", myCallback);




function myCallback() {
console.log("The button was clicked!");
document.querySelector('button').appendChild(img);
}
myButton.addEventListener("click", myCallback);