function display_random_image() {
    fetch(`https://source.unsplash.com/random/600x900`).then((response) => {
        let image = document.createElement('div');
        image.classList.add('image');
        image.innerHTML = `<img class="image" src="${response.url}" />`
        document.body.appendChild(image);
    })

}
