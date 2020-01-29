const createImg = document.querySelector('button#randomize');

const randomImg = function(){
const createNewImg = document.createElement('img');
createNewImg.setAttribute('src', 'https://source.unsplash.com/random');
document.querySelector('body').appendChild(createNewImg);

}
createImg.addEventListener('click', randomImg);