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

//1 answer
const newh1 = document.createElement("h1");

const newh1Div = document.querySelector(".favoriteBooks");

newh1Div.appendChild(newh1);

// 2 Answer
for (let i = 0; i < books.length; i++) {
  console.log(books[i].title);
  const newp = document.createElement("p");
  newh1Div.appendChild(newp);
  newp.innerHTML = books[i].title + ", by " + books[i].author;
}
