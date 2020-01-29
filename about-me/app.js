// getting the parent of all elements `body`
const body = document.querySelector('body');
body.style.fontFamily = "Arial, sans-serif";

// getting each element
const nickname = document.querySelector('#nickname');
const favAnimal = document.querySelector('#favorite');
const hometown = document.querySelector('#hometown');

nickname.innerText = 'Mashael';
favAnimal.innerText = 'Dogs';
hometown.innerText = 'Khobar';

const list = document.querySelectorAll('li');
for(let i = 0; i < list.length; i++){
    list[i].setAttribute('class', 'listitem');
    list[i].style.color = 'rebeccapurple';
}

// Create
const myImage = document.createElement('img');

// Change
myImage.setAttribute('src', 'https://cdn4.vectorstock.com/i/thumb-large/26/68/young-executive-woman-profile-icon-vector-9692668.jpg');

// Get container
const myImgContainer = document.querySelector('.profilePicture');

// Place it
myImgContainer.appendChild(myImage);

// The Book List
var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false,
      img: 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg'
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      img: 'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg'
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true,
      img: 'https://images.penguinrandomhouse.com/cover/9780679645689'
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true,
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg'
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true,
      img: 'https://images-na.ssl-images-amazon.com/images/I/81af%2BMCATTL.jpg'
    }
  ];


  // Create h1 "My Book List"
  const myBookList = document.createElement('h1');
  // Change
  myBookList.innerText = 'My Book List';

  // Get container
  const booksContainer = document.querySelector('.favoriteBooks');
  // Place h1 inside container
  booksContainer.appendChild(myBookList);

  // Create unordered list
  const bookList = document.createElement('ul');
  // Place the book list
  booksContainer.appendChild(bookList);

  // Iterate through the array of books
  for(let i = 0; i < books.length; i++){
      // Create list item
      const book = document.createElement('li');

      // Change the list item
      book.innerText = books[i].title +', by ' + books[i].author;
      
      // Check if already read or not
      if(books[i].alreadyRead){
          book.style.color = 'red';
      }

        // Create image 
        const bookImage = document.createElement('img');
        // change image
        bookImage.setAttribute('src', books[i].img);
        // append it to list item
        book.appendChild(bookImage);

      // Place it under the unordered list
      bookList.appendChild(book);
  }