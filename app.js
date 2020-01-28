const button = document.querySelector('#randomize');
const myCallback = function(){
    let width = Math.trunc(Math.random() * 800);
    let height = Math.trunc(Math.random() * 600);
    const newImg = document.createElement('img');
    // this bonus
    //  width = document.querySelector('.width').value;
    //  height = document.querySelector('.height').value;
   
       let randomsimg= "https://source.unsplash.com/" + width + "x" + height;
       newImg.setAttribute('src' ,randomsimg);
       const imgDiv = document.querySelector('.image');
   
   document.body.appendChild(newImg);

}
 button.addEventListener('click', myCallback);