// Type of event for all functions
const clickType = 'click'; // on button click
const keypressType = 'keypress'; // on key presses

// get div.solution from document to show results
const divSolution = document.querySelector('#solution');

// TODO: Calculate half number

// Target 
const halfButton = document.querySelector('#half-button');

// Callback
const calculateHalfNum = function () {
    // get the input from document
    const halfInput = document.querySelector('#half-input');
    // get the value from input
    const halfVal = halfInput.value;
    // divide by 2 
    const half = halfVal / 2;
    // show result in div.solution 
    divSolution.innerText = half;
    // reset
    halfInput.value = '';
}

// Event listener
halfButton.addEventListener(clickType, calculateHalfNum);
halfButton.addEventListener(keypressType, calculateHalfNum);


// TODO: Calculate fraction/whole
// Target 
const percentButton = document.querySelector('#percent-button');

// Callback 
const calculatePercent = function () {
    // get fraction input from document
    const fracInput = document.querySelector('#percent1-input');
    // get fraction value from input
    const fracValue = fracInput.value;
    // get whole input from document
    const wholeInput = document.querySelector('#percent2-input');
    // get whole value from input
    const wholeValue = wholeInput.value;
    // divide fraction by whole
    const percent = fracValue / wholeValue;
    // show result in div.solution
    divSolution.innerText = percent;
    // reset
    fracInput.value = '';
    wholeInput.value = '';
}

// Event Listener
percentButton.addEventListener(clickType, calculatePercent);
percentButton.addEventListener(keypressType, calculatePercent);

// TODO: Calculate are of circle

// Target
const areaButton = document.querySelector('#area-button');

// callback
const calculateCircleArea = function () {
    // get area input from document
    const areaInput = document.querySelector('#area-input');
    // get value from input
    const radius = areaInput.value;
    // declare a variable with pi value
    const pi = 3.14159;
    // calculate area = pi * (radius)^2
    const area = pi * Math.pow(radius, 2);
    // show results in div.solution
    divSolution.innerText = area;
    // reset 
    areaInput.value = '';
}

// Event Listener
areaButton.addEventListener(clickType, calculateCircleArea);
areaButton.addEventListener(keypressType, calculateCircleArea);