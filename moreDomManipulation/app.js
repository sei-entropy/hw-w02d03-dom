/*

- Change the font-family of the page to `"Arial, sans-serif"`
  - Replace each of the `span` tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
  - Give each `li` the class of `"listitem"`
  - Change each `li`'s text color to `"rebeccapurple"`
  - Create a new `img` element and set its `src` attribute to a picture of you. Put that new `img` element in the div with the class of `"profilePicture"`

*/

//1
const page =document.querySelector('body'); 
page.style.fontFamily= 'Arial' , 'sans-serif';


//2
const nickname = document.createElement('span');
nickname.innerText= " Nan";
const targetLi1 = document.querySelector('#nickname');
targetLi1.append(nickname);

const fav = document.createElement('span');
fav.innerText= " Cats";
const targetLi2 = document.querySelector('#favorite');
targetLi2.append(fav);

const home = document.createElement('span');
home.innerText= " Al-ahsa";
const targetLi3 = document.querySelector('#hometown');
targetLi3.append(home);

//3
const allListItems= document.querySelectorAll('li')

//4
const firstListItem = document.querySelector('li')
const SecondtListItem = document.querySelector('li:nth-of-type(2)')
const lastListItem = document.querySelector('li:last-child')

firstListItem.style.color="rebeccapurple";
SecondtListItem.style.color="rebeccapurple";
lastListItem.style.color="rebeccapurple";

//5
const newImg = document.createElement('img');
newImg.setAttribute('src','https://mrkzgulfup.com/uploads/158024982790951.png');
const targetDiv = document.querySelector('.profilePicture');
targetDiv.appendChild(newImg);


// The Book list : 

var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      image: 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg',
      alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg',
      alreadyRead: true
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      image: 'https://images-na.ssl-images-amazon.com/images/I/51tRkYYlpaL.jpg',
      alreadyRead: true
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg',
      alreadyRead: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: 'https://images-na.ssl-images-amazon.com/images/I/41iers%2BHLSL._SX326_BO1,204,203,200_.jpg',
      alreadyRead: true
    }
  ];

  const newHeading = document.createElement('h1');
newHeading.innerText = 'My Book List '; 
const bookList = document.querySelector('.favoriteBooks');
bookList.appendChild(newHeading);



for (let i=0 ; i<books.length ;i++) {
     let favBook = document.createElement('li');
     favBook.innerText = books[i].title +" By "+ books[i].author; 
    const targetP = document.querySelector('.favoriteBooks');
    targetP.appendChild(favBook);

    const bookImg = document.createElement('img');
    bookImg.setAttribute('src',books[i].image);
    const targetI = document.querySelector('.favoriteBooks');
    targetI.appendChild(bookImg);

    if ( books[i].alreadyRead === true )
    favBook.style.color='red' ;
         
 
 }
 