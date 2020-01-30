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
///book.js

var books = [{
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        alreadyRead: true
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        alreadyRead: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: true
    }
];
//1
const newH = document.createElement('h1');
newH.innerText = 'My Book List';
const targetDiv = document.querySelector('.favoriteBooks');
targetDiv.appendChild(newH);

//2

//let myBook = document.createElement('p');
// for (let i = 0; i < books.length; i++) {
//     let myBook = document.createElement('p');
//        myBook.innerText = (books[i].title + 'by' + books[i].author);

//      let targetbook = document.querySelector('body');
//     targetbook.appendChild(myBook);
   
// }
//Done
//bonus
//1 && 3
let underList = document.createElement('ul');
for (let i = 0; i < books.length; i++) {
    let bok = document.createElement('li');
          bok.innerText = (books[i].title + ' by ' + books[i].author);
           if (books[i].alreadyRead) {
               bok.style.color = 'red';
           };
          let targetbook = document.querySelector('body');
          targetbook.appendChild(bok);
       
          
    //bok.appendChild(books[i].title);
    //2
    // let imag = document.createElement('img');
    // imag.src = books[i].imag;
    // imag.appendChild(books[i].imag);
    // //3
    // if (book[i].alreadyRead) {
    //     bok.style.color = 'red';
    // }
}