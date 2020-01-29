// get image element from document
const img = document.querySelector('img');

// change image's position to absolute
img.style.position = 'absolute';
// get body element
const body = document.querySelector('body');
// set body's width 
body.style.width = '960px';

// a variable that moves the cat
let pixels = 0;

// assign pixels to left position of the image so it can move
img.style.left = pixels;

// function to move the cat
const catWalk = function () {

    // if the image's class flip-left
    if (img.getAttribute('class') === 'flip-left') {
        // if the image at the beginning of the page
        if (pixels === 0) {
            // set its attribute to flip-right
            img.setAttribute('class', 'flip-right');
        }
        // if still haven't reached the start
        else {
            // decrement until reaching the start of the page
            pixels -= 10;
            img.style.left = pixels + 'px';
        }
    }
    // else move to the right
    else {
        // every 50 milliseconds the cat moves 10pixels to right
        pixels += 10;
        img.style.left = pixels + 'px';

        // if cat the end of the page
        if (img.style.left === body.style.width) {
            // give the image .flip-left class which flip the image
            img.setAttribute('class', 'flip-left');
        };
    }
};

// variable to move the cat every 50 milliseconds
let myCat = setInterval(catWalk, 50);


// * I added an extra feature to stop / move the cat 

// get the button that stops / moves the cat
const walkButton = document.querySelector('button');

// function to stop / move the cat
const stopContinueWalk = function () {
    // if the button's text indicates it stops the cat
    if (walkButton.innerText === 'Stop walking!') {
        // stop the cat on the click of the button (clear timer)
        clearTimeout(myCat);
        // change the button's text 
        walkButton.innerText = 'Continue walking';
    } else {
        // else (button's text indicates it moves the cat)
        // set an interval every 50 millisecond execute the function catWalk
        myCat = setInterval(catWalk, 50);
        // change button's text
        walkButton.innerText = 'Stop walking!';
    };
};

// Event listener to listen to the click of the button
walkButton.addEventListener('click', stopContinueWalk);