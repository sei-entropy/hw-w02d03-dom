///style
console.log('hi')

//1
let heading = document.querySelector('body');
heading.style.fontFamily = 'Arial, sans-serif';
//2
//if i want same information 
// let changNam = document.querySelectorAll('li');
// for(let i =0 ; i<changNam.length ;i ++){

// changNam[i].innerText = 'hello My name is maimona';
// }

let changNam = document.querySelector('#nickname');
changNam.innerHTML = 'mim'
let changfav = document.querySelector('#favorite');
changfav.innerHTML = 'cat';
let changhom = document.querySelector('#hometown');
changhom.innerHTML = 'riyadh';
//3
let changLi = document.querySelectorAll('li');
for (let i = 0; i < changLi.length; i++) {
    changLi[i].className = 'listitem';
}

//4
let colorLi = document.querySelectorAll('li');
for (let i=0 ; i<colorLi.length ;i++){
colorLi[i].style.color = 'rebeccapurple';
}
//5
//profilePicture
let myImg = document.createElement('img');
myImg.setAttribute('src','http://66.media.tumblr.com/b389842bd7e22ea29c2c57f4b12fb000/tumblr_nbxzyjbqKH1qh9izdo1_500.png');
let addImg = document.querySelector('.profilePicture');
addImg.appendChild(myImg);

//DONE
