document.body.style.fontFamily = 'Arial, sans-serif';
const nickname = document.querySelector('#nickname');
nickname.innerText = 'Abdulhamid'; 
const favorite = document.querySelector('#favorite');
favorite.innerText = 'ice cream'; 
const hometown = document.querySelector('#hometown');
hometown.innerText = 'Unayzah';

const listItems = document.querySelectorAll('li');
for(let i = 0; i < listItems.length; i++) {
    listItems[i].classList.add('listitem');
}

const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://avatars2.githubusercontent.com/u/59395387?s=460&v=4');
document.body.appendChild(newImg);

var books = [
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

const newH1 = document.createElement('h1');
newH1.innerText = 'My Book List'; 
const favBooks = document.querySelector('.favoriteBooks'); 
favBooks.appendChild(newH1);
for(let i = 0; i < books.length; i++) {
    const bookP = document.createElement('p');
    bookP.innerText = books[i].title + ',By ' + books[i].author; 
    favBooks.appendChild(bookP);
}