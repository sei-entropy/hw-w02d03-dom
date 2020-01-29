console.log("I'm here")




const eventType = 'click'; //Type of event 



const myButton = document.querySelector('button'); //Target 






// Type + Target + Callback + Event Listener
const imyButton = document.querySelector('#randomize'); //target


const getnewElemnt = function() {
    const Link = "https://source.unsplash.com/1600x900";
    const image = document.createElement("img")
    image.setAttribute('src', Link)
    document.body.appendChild(image);

    myButton.addEventListener('click', getnewElemnt);
}

//Create Elemnt 

myButton.addEventListener(eventType, getnewElemnt)