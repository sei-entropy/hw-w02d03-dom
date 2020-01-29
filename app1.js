console.log('It works!!');


let fontStyle = document.querySelector("body");

fontStyle.style.fontFamily = "Arial, sans-serif";


//==========================================================



let replace1 = document.querySelector("#nickname");

replace1.innerText = "Amirah";

let replace2 = document.querySelector("#favorite");

replace2.innerText = "cat";

let replace3 = document.querySelector("#hometown");

replace3.innerText = "Riyadh";

//======================================================

let classname = document.querySelectorAll("li");

for (let i = 0; i < classname.length; i++) {
    const element = classname[i];

    element.setAttribute('class', 'listitem');


    //  classname[i].setAttribute( 'class', 'listitem');
}


console.log(classname);

//==========================================================

let changes = document.querySelectorAll("li");

fontStyle.style.color = "rebeccapurple";

//=========================================================





let img1 = document.createElement('img');


img1.setAttribute('src', 'https://cdn4.vectorstock.com/i/1000x1000/18/98/user-icon-female-person-symbol-profile-avatar-sign-vector-18991898.jpg://www.google.com.sa/url?sa=i&url=http%3A%2F%2Fwww.llumac.cat%2Fpicsl%2F699278%2F&psig=AOvVaw0jxttj1zKza9jdMarv1HNR&ust=1580371942837000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDOyP-uqOcCFQAAAAAdAAAAABAD');
img1.setAttribute('width', '100px');
img1.setAttribute('hight', '100px');

let divimg=document.querySelector(".profilePicture");

divimg.appendChild(img1);







//===========================================================


let h1tag = document.createElement('h1');
h1tag.innerText = "My Book List ";

let divH1=document.querySelector(".favoriteBooks");
divH1.appendChild(h1tag);



//===========================================================



let books = [
    {
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
  

  for (let i=0 ; i<books.length; i++){

let newPara = document.createElement('p');    
let bookstitle = books[i].title;
let booksauthor = books[i].author;


let result = bookstitle+',  by'+booksauthor;

newPara.innerText = result ;

document.querySelector(".favoriteBooks").appendChild(newPara);



}