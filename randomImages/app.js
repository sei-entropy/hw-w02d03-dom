const eventType = 'click';
const someoneClicks  = document.querySelector('#randomize');

const randomImage = function() {
  console.log('The button was clicked!');
  const newImage = document.createElement('img');
  const newattribute= newImage.setAttribute('src', 'https://source.unsplash.com/1600x900');
   document.querySelector('.image').appendChild(newImage);
  
}

someoneClicks.addEventListener(eventType, randomImage );