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
  

const changPageFont = document.querySelector('body');
changPageFont.style.fontFamily = "Arial, sans-serif";
 

const putNick = document.querySelector('#nickname')
putNick.innerText= "Rawan Alrajeh"
putNick.append();

const putfavoranmil = document.querySelector('#favorite')
putfavoranmil.innerText= "Cat"
putfavoranmil.append();

const puthometown = document.querySelector('#hometown')
puthometown.innerText= "Al-Aflaj"
puthometown.append();


const createClass = document.querySelectorAll('li')

for (i= 0; i < createClass.length ; i++) {
  createClass[i].setAttribute("class", "listitem");
  createClass[i].style.color ='#a9a9a9';
}


let imagProfile = document.querySelector(".profilePicture");
let imG = document.createElement("img")
imG.setAttribute("src","https://i.ibb.co/sQZz9MZ/IMG-5801.jpg")
imagProfile .appendChild(imG)


const favoriteBook = document.querySelector('.favoriteBooks')
const header1 = document.createElement("h1")
header1.textContent="My Book List"
favoriteBook.appendChild(header1)


for (i=0; i < books.length; i++) {
    const details= document.createElement("p");
    details.textContent= books[i].title+ ", by " + books[i].author;
    favoriteBook.appendChild(details);


}
//bouns

// const bookImg= document.createElement("img");
//     bookImg.setAttribute("src", ImagesOfbook[i]);
//     const other = details.appendChild(bookImg);
//     favoriteBook.appendChild(other);

// }
