const eventType= 'click';

const randomButton = document.querySelector('#randomize');





const changeImgRandom = function(){
   const widthImg = document.querySelector('.width');
const heightImg = document.querySelector('.height');
   widthImg.value = '';
   heightImg.value='';
   const newImgAdd = document.createElement('img');
   newImgAdd.setAttribute('src','https://source.unsplash.com/user/erondu');
document.body.appendChild(newImgAdd);
}
randomButton.addEventListener(eventType,changeImgRandom);
