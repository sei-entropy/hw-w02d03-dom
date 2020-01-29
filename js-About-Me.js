document.querySelector('body').style.fontFamily = "Arial, sans-serif";

document.body.style.fontFamily= 'Arial, sans-serif';
const nickname = document.querySelector('#nickname');
const favorite = document.querySelector('#favorite');
const hometown = document.querySelector('#hometown');

nickname.innerText="Renad";
favorite.innerText="Cats";
hometown.innerText ="Zulfi";

const ListItems = document.querySelectorAll('li');

for(let i = 0; i < ListItems.length; i++) {

    currentListItem = ListItems[i];
    currentListItem.style.color = 'rebeccapurple';
}

const profileImg = document.createElement('img');

const divpicure = document.querySelector('.profilePicture');
divpicure.appendChild(profileImg);

profileImg.setAttribute('src','https://i.pinimg.com/originals/27/89/6f/27896fe6c2e52d75ecfa6470bbccb540.jpg');


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

  const myBooks = document.createElement('h1');
  myBooks.innerText = 'My Book List';

  const divfavoriteBooks=document.querySelector('.favoriteBooks');
  divfavoriteBooks.appendChild(myBooks);

  for(let i = 0; i < books.length; i++) {
    const listOfBooks = document.createElement('p');

    listOfBooks.innerText = books[i].title + ' by ' + books[i].author;
    myBooks.appendChild(listOfBooks); 
 }