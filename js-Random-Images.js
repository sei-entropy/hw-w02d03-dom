const imgButton = document.querySelector('#randomize');

const  myImg= function() {

    const newImg = document.createElement('img');

    newImg.setAttribute('src','https://source.unsplash.com/random');  
    document.querySelector('.image').appendChild(newImg);
}

imgButton.addEventListener('click',myImg);

