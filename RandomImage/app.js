console.log("hi");



// the type of the event 
const eventType = 'click';

// the target of the event 

const myButton = document.querySelector('button#randomize');
let url = ("https://source.unsplash.com/1600x900");

// the callback - what do you want to do as a response?
const myCallback = function(){
 
 
 let image = document.querySelector(".img");
     image.setAttribute("src", url);




    //let width = document.querySelector("input.width");
    //let height = document.querySelector("input.height");

    //let url = ("https://source.unsplash.com/" + width + "x" + height);
    //let image = document.querySelector(".img");
    // image.setAttribute("src", url);

 

}


myButton.addEventListener(eventType,myCallback);



