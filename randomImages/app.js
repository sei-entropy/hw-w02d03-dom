//Botton Random image
const randomizeIm = document.querySelector('#randomize');

//callback function
const createImage =function(){

//Bonus 1
//The image width and height
   const width = document.querySelector('.width');
   const widthContent = width.value;

   const height = document.querySelector('.height');
   const heightContent = height.value;

//Create new image element and give 'src' property & set its width and height
   const url="https://source.unsplash.com/"+widthContent+"x"+heightContent;
   const image = document.createElement('img');
   image.setAttribute('src',url);

//Appending the generated img to the page
//inside the div with the image class
    const imageDiv = document.querySelector('.image');
    imageDiv.appendChild(image);
    width.value = '';
    height.value = '';
}

//Adding event listner for the button click
randomizeIm.addEventListener('click',createImage);