const $q = document.querySelector.bind(document);
const $qa = document.querySelectorAll.bind(document);

$q("body").style.fontFamily = "Arial, sans-serif";

$q("#nickname").innerText = "AlMuhannaMh";
$q("#favorite").innerText = "Leo";
$q("#hometown").innerText = "AlAhsa";

for (let i = 0; i < $qa("li").length; i++) {
    $qa("li")[i].className = "listitem";
    $qa(".listitem")[i].style.color = "rebeccapurple";
}

let newImg = document.createElement("img");
newImg.src = "img/vector-avatars-geometric-2-transparent.png"
$q(".profilePicture").appendChild(newImg);

////////////////////////
let books = [{
    title: "The Design of Everyday Things",
    author: "Don Norman",
    bookCoverImgURL: "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
    alreadyRead: false
},
{
    title: "The Most Human Human",
    author: "Brian Christian",
    bookCoverImgURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg",
    alreadyRead: true
},
{
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    bookCoverImgURL: "https://images-na.ssl-images-amazon.com/images/I/51tRkYYlpaL.jpg",
    alreadyRead: true
},
{
    title: "Ulysses",
    author: "James Joyce",
    bookCoverImgURL: "https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg",
    alreadyRead: true
},
{
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    bookCoverImgURL: "https://images-na.ssl-images-amazon.com/images/I/41iers%2BHLSL._SX326_BO1,204,203,200_.jpg",
    alreadyRead: true
}
];

const newHeading = document.createElement("h1");
newHeading.innerText = "My Book List";
$q(".favoriteBooks").appendChild(newHeading);

/* for (let i = 0; i < books.length; i++) {
    const bookParagraph = document.createElement("p");
    bookParagraph.innerText = books[i].title + ", by " + books[i].author;
    $q("body").appendChild(bookParagraph);
} */

let bookUl = document.createElement("ul");

for (let i = 0; i < books.length; i++) {
    let bookLi = document.createElement("li");
    let bookImg = document.createElement("img");

    const bookParagraph = document.createElement("p");
    bookParagraph.innerText = books[i].title + ", by " + books[i].author;
    bookLi.appendChild(bookParagraph)

    bookImg.src = books[i].bookCoverImgURL;
    bookLi.appendChild(bookImg);

    if (books[i].alreadyRead) {
        bookLi.style.color = "red";
    }
    bookUl.appendChild(bookLi);
}
$q("body").appendChild(bookUl);