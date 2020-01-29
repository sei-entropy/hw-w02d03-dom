const randomizeButoon = document.querySelector('#randomize');
// create callback function to 'button click'
const RandomImg = function()
 {
    // Create new img element and give it a src property
    const img = document.createElement('img');
    img.setAttribute('src', 'https://source.unsplash.com/random/800X600')

    // Append image to the page
    document.querySelector('.image').appendChild(img);
 }
// Add listner for the button click event
randomizeButoon.addEventListener('click', RandomImg);
