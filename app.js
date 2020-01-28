console.log('hello');


//make new img 
const newImg = document.createElement('img');
//change it

//newImg.setAttribute('src','https://www.placecage.com/300/300');

newImg.setAttribute('src', 'https://source.unsplash.com/1600x900');

//put it in the page
const addToTheButton = document.querySelector('#randomize')
const createImg = function(){
    document.querySelector('div').appendChild(newImg);
}
addToTheButton.addEventListener('click',createImg);

//bonus
