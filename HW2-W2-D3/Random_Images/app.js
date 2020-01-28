// this is Js file for Random_Images  .


document.querySelector('#randomize').addEventListener('click',function(){

    //console.log(" Adding img ! ");
    let imgWidth = document.querySelector('.width').value;
    let imgHeight= document.querySelector('.height').value;

    let newImg = document.createElement('img');

    newImg.setAttribute('src','https://source.unsplash.com/WLUHO9A_xik/');
    newImg.setAttribute('width',imgWidth);
    newImg.setAttribute('height',imgHeight);

    //newImg.style.width = imgWidth ;
    //newImg.style.height = imgHeight ;


    document.querySelector('.image').appendChild(newImg);
    
});
