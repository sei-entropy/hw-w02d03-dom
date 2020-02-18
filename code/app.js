const eventType = 'click';
const myButton = document.querySelector('button#randomize');

const myCallback = function() {
    console.log('The button was clicked!');
 const newImg= document.createElement('img');
newImg.setAttribute('src','https://source.unsplash.com/1600x900');
document.querySelector('body').appendChild(newImg);
  }
  
  myButton.addEventListener(eventType,myCallback);


