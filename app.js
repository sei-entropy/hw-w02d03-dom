//.image
console.log('Hello from JS!');
// The type of the event
const eventType = 'click';
// The target of the event
const myButton = document.querySelector("#randomize");
// The callback - what do you want to
//                do as a response?
const myCallback = function(event) {
  console.log('The button was clicked!', event);


    const createImg = document.querySelector('.image');
    createImg.innerHTML = "<img id = \"randomImg\"src=\"https://source.unsplash.com/random\">";
    

    // const newImg = document.querySelector('#randomImg');
    // newImg.setAttribute('src','https://source.unsplash.com/random/');
}
//Create an Event Listener
//WHEN this EVENT takes place on this TARGET
//call this CALLBACK Function
myButton.addEventListener(eventType, myCallback);