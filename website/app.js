console.log('Hello from JS!');

const createImagetButton=document.querySelector('#randomize');


const createImage=function(){
    console.log("making a image");

    const width=document.querySelector('.width');
    const widthContent = width.value;
    
   const height=document.querySelector('.height');
   const heightContent = height.value;


   const url="https://source.unsplash.com/"+widthContent+"x"+heightContent;

    const newImage = document.createElement('img');
    newImage.setAttribute('src',url);

    const newImageDiv = document.querySelector('.image');
    newImageDiv.appendChild(newImage);
    width.value = '';
    height.value = '';



}
createImagetButton.addEventListener('click',createImage);