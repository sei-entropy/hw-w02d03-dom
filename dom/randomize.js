  



const eventtype='click';

const myButton=document.querySelector('button');

const widthinput=document.querySelector('.width');
const heightinput=document.querySelector('.height');

const newimageRand=function(){

    const newImage=document.createElement('img');
    newImage.setAttribute('src',"https://source.unsplash.com/user/erondu/600x600");
    const newImageDiv=document.querySelector('.image');
    newImageDiv.appendChild(newImage);
    
}

myButton.addEventListener('click',newimageRand);