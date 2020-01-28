// this is Js file for Random_Images  .


//  clicks button #randomize
document.querySelector('#randomize').addEventListener('click',function(){

    let imgWidth = document.querySelector('.width').value;
    let imgHeight= document.querySelector('.height').value;
// Create an img element
    let newImg = document.createElement('img');

    newImg.setAttribute('src','https://source.unsplash.com/random/160x900');

// Bonus 1    
    newImg.setAttribute('width',imgWidth);
    newImg.setAttribute('height',imgHeight);

    
    //newImg.style.width = imgWidth ;
    //newImg.style.height = imgHeight ;


    document.querySelector('.image').appendChild(newImg);
    
});
