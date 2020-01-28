console.log('Hello from JS!');


const eventType = 'click';
const myButton = document.querySelector('#randomize');

const createUrlImg = function(event) {
  console.log('The button was clicked!', event);
  const getElement = document.createElement('img')
  getElement.setAttribute('src',"https://source.unsplash.com/1600x900")
  getElement.setAttribute("width", "50%")
  document.querySelector('.image').appendChild(getElement)

}
myButton.addEventListener('click',createUrlImg)
