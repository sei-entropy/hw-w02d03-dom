const details =document.body.style.fontFamily = "Arial, sans-serif"
 const Nickname=document.querySelector('#nickname');
 const FavoriteAnimal=document.querySelector('#favorite');
 const Hometown=document.querySelector('#hometown');

 Nickname.innerText='haya';
 FavoriteAnimal.innerText='horse';
 Hometown.innerText='Riyadh';

 const liItems = document.querySelectorAll('li');
  
 for (let i=0; i < liItems.length; i++) { 
    const currentliItems= liItems[i];
    currentliItems.classList.add('liItems');
    currentliItems.style.color='rebeccapurple';
 }
const profilePicture=document.createElement('img');
profilePicture.setAttribute('src','https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png');
const Divprofil=document.querySelector('.profilePicture');
Divprofil.appendChild(profilePicture);
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
  const heading=document.createElement('h1');
  heading.innerText='My Book List';
  const divfavoriteBooks=document.querySelector('.favoriteBooks');
  divfavoriteBooks.appendChild(heading);
  for (let i = 0; i < books.length; i++) {
    const currentBook = books[i];

     const paragraph = document.createElement('p');
    paragraph.innerText = `${currentBook.title}, by ${currentBook.author}`;

  }