// Type of the event (on click)
const type = 'click';

// The target 
const randomizeButton = document.querySelector('#randomize');

// callback
const randomizeImage = function() {

    // create an image element
    const image = document.createElement('img');

    // get source input
    const selectedSource = document.querySelector('#source');
    const source = selectedSource.options[selectedSource.selectedIndex].value;
    

    // change image's value

    // Picsum option
    if(source === 'picsum'){
        image.setAttribute('src', 'https://picsum.photos/200/300');
    }

    // Fill murray option
    else if(source === 'fill'){
        // randomizing the fill image based on colors
        const random = Math.floor(Math.random()*2);
        console.log(typeof(random))
        // calm
        if(random === 0){
            image.setAttribute('src', 'http://www.fillmurray.com/200/300');
        }
        // gray
        else {
            image.setAttribute('src', 'http://www.fillmurray.com/g/200/300');
        }
    }

    // Cage option
    else if(source === 'cage'){

         // randomizing the cage image
         const random = Math.floor(Math.random()*4);
         console.log(typeof(random))
         // calm
         if(random === 0){
             image.setAttribute('src', 'http://www.placecage.com/200/300');
         }
         // gray
         else if(random === 1) {
             image.setAttribute('src', 'http://www.placecage.com/g/200/300');
         }
         // crazy
         else if(random === 2){
            image.setAttribute('src', 'http://www.placecage.com/c/200/300');
         }
         // gif
         else {
            image.setAttribute('src', 'http://www.placecage.com/gif/200/300');
         }
    }

    // Lorem option
    else if(source === 'lorem'){
        image.setAttribute('src', 'https://loremflickr.com/320/240');
    }

    // if no option selected 
    else {
        image.setAttribute('src', 'https://source.unsplash.com/random/1600x900/');
    }

    // get user input for height & width
    const widthInput = document.querySelector('.width');
    const heightInput = document.querySelector('.height');
    const width = widthInput.value;
    const height = heightInput.value;
    image.style.width = width+'px';
    image.style.height = height+'px';
    

    // put it in the document
     // Get the container
    const container = document.querySelector('.image');
    container.prepend(image);
}


// Add an event listener 
randomizeButton.addEventListener(type, randomizeImage);