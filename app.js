

const MyButton = document.querySelector('#randomize');
const NewImg = function() {
   
    const img = document.createElement('img');
    const src = "https://source.unsplash.com/random/1600x900";
    img.setAttribute('src', src)
    document.querySelector('.image').appendChild(img);
}

MyButton.addEventListener('click', NewImg);