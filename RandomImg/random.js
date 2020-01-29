
const Random = document.querySelector('#randomize');
const RandomImg = function () {
    console.log('making a tweet...');

    const newImg = document.createElement('img');
    newImg.setAttribute('src', 'https://source.unsplash.com/random');
    document.body.appendChild(newImg);

}
Random.addEventListener('click', RandomImg);

