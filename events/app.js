// function to get 3 inputs and display them
const makeMadLib = function (event) {
    // get noun input from document
    const nounInput = document.querySelector('#noun');
    // get noun value from input
    const nounVal = nounInput.value;
    // get adjective input from document
    const adjInput = document.querySelector('#adjective');
    // get adjective value from input
    const adjVal = adjInput.value;
    // get person input from document
    const personInput = document.querySelector('#person');
    // get person value from input
    const personVal = personInput.value;

    // concat 3 values
    const story = personVal + ' really likes ' + adjVal + ' ' + nounVal + '.';
    // get story div from document
    const storyDiv = document.querySelector('#story');
    // set text to the concatenated values
    storyDiv.innerText = story;

    // console click coordinates
    console.log('x & y coordinates: ' + event.pageX + ', ' + event.pageY);
}

// get lib button from document
const libButton = document.querySelector('#lib-button');
// Add event listener on lib button
libButton.addEventListener('click', makeMadLib);


// get the target `body` from document
const followTarget = document.querySelector('body');

// create div element
const div = document.createElement('div');
// change div
div.style.width = '10px';
div.style.height = '10px';
div.style.backgroundColor = 'rebeccapurple';
div.style.position = 'absolute';

// a function to follow the mouse
const followMouse = function (event) {
    // get x coordinate
    const posX = event.pageX;
    // y coordinate
    const posY = event.pageY;
    // assign x & y coordinates
    div.style.left = posX + 'px';
    div.style.top = posY + 'px';
    // move the div to cursor or mouse
    followTarget.appendChild(div);
}

// a variable that contains an event
const event = followTarget.addEventListener('mousemove', followMouse);
// repeating the event every 10 milliseconds
const follow = setInterval(event, 10);