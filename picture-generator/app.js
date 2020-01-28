/// Select the button that will be used to generate a random img
const randomizeBtn = document.querySelector('#randomize');

// create callback function to handle the button click
// the function is resposible for generating random img when it's called
const generateRandomImg = function() {

    // Extracting the values for the image width and height
    // from their respective input fields
    const width = document.querySelector('.width').value;
    const height = document.querySelector('.height').value;
    
    // Create new img element and give it a src property
    // and set its width and height based on user input
    const img = document.createElement('img');
    const src = `https://source.unsplash.com/user/erondu/${width}x${height}`;
    img.setAttribute('src', src)

    // Appending the generated img to the page
    // inside the div with the image class
    document.querySelector('.image').appendChild(img);
}

// Adding event listner for the button click event
randomizeBtn.addEventListener('click', generateRandomImg);
