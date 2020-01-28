console.log("hi");



// the type of the event 
const eventType = 'click';

// the target of the event 

const myButton = document.querySelector('button#randomize');

// the callback - what do you want to do as a response?
const myCallback = function(){
 const img = document.createElement("img");
 const imges = ["https://i.picsum.photos/id/1002/4312/2868.jpg", 
 "https://i.picsum.photos/id/1011/5472/3648.jpg",
"https://i.picsum.photos/id/1026/4621/3070.jpg",
"https://i.picsum.photos/id/1044/4032/2268.jpg",
"https://i.picsum.photos/id/106/2592/1728.jpg",
"https://i.picsum.photos/id/1067/5760/3840.jpg"]

const randomNumber = Math.floor(Math.random() * imges.length);
  console.log(randomNumber);
 img.setAttribute("src",imges[randomNumber]);
 const newImgVid = document.querySelector(".image");
 newImgVid.appendChild(img);

const whidthInput = document.querySelector(".width");
const width = whidthInput.value ; 
img.setAttribute("width",width);

 
const  heightInput = document.querySelector(".height")
const height = heightInput.value;
img.setAttribute("height", height); 

}


myButton.addEventListener(eventType,myCallback);



