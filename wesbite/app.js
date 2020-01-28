const button = document.querySelector('#randomize');
const inputWidth = document.querySelector('input.width');
const inputHeight = document.querySelector('input.height');
const inputSource = document.querySelector('select');
const generateImage = function(event) {
    let url = 'https://source.unsplash.com/random/'; 
    let sep = 'x';
    const newImage = document.createElement('img');
    if(inputWidth.value !== '' && inputHeight.value !== '') {
        newImage.setAttribute('src', 
        url + inputWidth.value + sep + inputHeight.value);
    } else {
        newImage.setAttribute('src', url);
    }
    document.body.appendChild(newImage);
    console.log(url);
}
button.addEventListener('click', generateImage);