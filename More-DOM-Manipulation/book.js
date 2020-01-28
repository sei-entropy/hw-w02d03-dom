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
//1
const newH = document.createElement('h1');
newH.innerText = 'My Book List';
const targetDiv = document.querySelector('.favoriteBooks');
targetDiv.appendChild(newH);

//2

let myBook = document.createElement('p');
for (let i =0;i< books.length;i++){
    document.cre
myBook.appendChild(books[i].title + 'by' + books[i].author);
}
//Done
//bonus
//1 && 3
let underList = document.createElement('ul');
for(let i =0 ;i<books.length ; i++){
    let bok = document.createElement('li');
    bok.appendChild(books[i].title);
    //2
    let imag = document.createElement('img');
    imag.src = books[i].imag;
    imag.appendChild(books[i].imag);
    //3
    if (book[i].alreadyRead) {
   bok.style.color = 'red';
    }
}