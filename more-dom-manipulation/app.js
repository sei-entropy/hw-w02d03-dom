// Change the font of the page
document.querySelector('body').style.fontFamily = "Arial, sans-serif";

// selecting all the span elements before 
// replacing their information
const nicknameSpan = document.querySelector('span#nickname');
const favoriteSpan = document.querySelector('span#favorite');
const hometownSpan = document.querySelector('span#hometown');

// placing my information inside the spans
nicknameSpan.innerText = 'The Devil';
favoriteSpan.innerText = 'Horse';
hometownSpan.innerText = 'Madinah';

// selecting all the li elements
// and adding the class 'listitem' to them
// and giving each ones text color to "rebeccapurple"
const listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    const currentListItem = listItems[i];

    currentListItem.classList.add('listitem');
    currentListItem.style.color = 'rebeccapurple';
}

// Creating new img element and adding a profile
// picture as its src attribute
const profilePicture = document.createElement('img');
profilePicture.setAttribute('src', 'http://www.fillmurray.com/200/300');

// Adding the img to the div with class "profilePicture"
const profilePictureDiv = document.querySelector('.profilePicture');
profilePictureDiv.appendChild(profilePicture);


// Data for some book list (copied exactly from the main repo)
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

// creating an h1 and adding it to the div with class "favoriteBooks"
const heading = document.createElement('h1');
heading.innerText = 'My Book List';

const favoriteBooksDiv = document.querySelector('div.favoriteBooks');
favoriteBooksDiv.appendChild(heading);

// iterating through the list of books and creating a paragraph tag for each one
const body = document.querySelector('body');

for (let i = 0; i < books.length; i++) {
    const currentBook = books[i];
    
    const paragraph = document.createElement('p');
    paragraph.innerText = `${currentBook.title}, by ${currentBook.author}`;

    // changing the book color based on if it's read or not
    if(currentBook.alreadyRead){
        paragraph.style.color = 'green';
    }
    else{
        paragraph.style.color = 'red';
    }

    body.appendChild(paragraph);

}