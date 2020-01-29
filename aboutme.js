//chang the color of all page 
document.querySelector('body').style.fontFamily = "Arial, sans-serif";

// replacing thee information
const nicknameSpan = document.querySelector('span#nickname');
const favoriteSpan = document.querySelector('span#favorite');
const hometownSpan = document.querySelector('span#hometown');

// my information 
nicknameSpan.innerText = 'Ro';
favoriteSpan.innerText = 'Rabbit';
hometownSpan.innerText = 'Jazan';

//Give each li the class of "listitem"
//text color to "rebeccapurple"
const listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    const currentListItem = listItems[i];

    currentListItem.classList.add('listitem');
    currentListItem.style.color = 'rebeccapurple';
}

//Create a new img element and set its src attribute. 
const profilePicture = document.createElement('img');
profilePicture.setAttribute('src', 'https://www.kbl.co.uk/wp-content/uploads/2017/08/Default-Profile-Female.jpg');

//Put that new img element in the div with the class of "profilePicture"
const profilePictureDiv = document.querySelector('.profilePicture');
profilePictureDiv.appendChild(profilePicture);

//book list 
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

  //Create an h1 with the text of "My Book List"
  // put it inside div.favoriteBooks
const heading = document.createElement('h1');
heading.innerText = 'My Book List';
const favoriteBooksDiv = document.querySelector('div.favoriteBooks');
//append it 
favoriteBooksDiv.appendChild(heading);

//iterate through the array of books. For each book, 
//create a p tag with the book title and author
const body = document.querySelector('body');
for (let i = 0; i < books.length; i++) 
{
    const currentBook = books[i];

    const paragraph = document.createElement('p');
    paragraph.innerText = `${currentBook.title}, by ${currentBook.author}`;
    body.appendChild(paragraph);
}
    