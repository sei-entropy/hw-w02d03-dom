console.log('im here')

document.body.style.fontFamily = 'Arial ,sans-serif' //Change the font-family of the page to "Arial, sans-serif"
    //Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
const Name = document.querySelector("#nickname");
const Fav = document.querySelector("#favorite");
const Town = document.querySelector("#hometown")
Name.innerText = 'Lama';
Fav.innerText = 'None';
Town.innerText = 'Riyadh';



//Give each li the class of "listitem"
const List = document.querySelector("li")
for (let i = 0; i < List.length; i++) {
    List[i] = List[i].appendChild('List')

}

//Change each li's text color to "rebeccapurple"
const Li = document.querySelector("li");
for (let i = 0; i < Li.length; i++)
    Li[i] = Li[i].style.color = 'rebeccapurple';

//Create a new img element and set its src attribute to a picture of you. Put that new img element in the div with the class of "profilePicture"



const Pic = document.createElement('img');
Pic.setAttribute('src', 'https://images.alwatanvoice.com/news/large/9998851720.jpg');
document.body.appendChild(Pic);


var books = [{
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
//Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks
const H = document.createElement('h1');
H.innerText = 'My book List';
const newBok = document.querySelector('.favoriteBooks');
newBok.appendChild(H)


//Iterate through the array of books. For each book, create a p tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page

for (let i = 0; i < books.length; i++) {

    const P = document.createElement('p');
    P.innerText = books[i].title + "  By " + books[i].author
    newBok.appendChild(P)
}