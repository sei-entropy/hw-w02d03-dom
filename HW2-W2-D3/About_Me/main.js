// this is Js file for About_Me  .

// Change the font-family 
let fontPage = document.querySelector('body');
fontPage.style.fontFamily = 'Arial, sans-serif';


//Replace each of the span tags
document.querySelector('#nickname').innerText = ' Raghad98 ';
document.querySelector('#favorite').innerText = ' Cats ';
document.querySelector('#hometown').innerText = ' Riyadh ';

// Give each li the class of "listitem" AND text color to "rebeccapurple"
let allLi = document.querySelectorAll('li');
console.log( allLi );

for (let i = 0; i < allLi.length; i++) {
    allLi[i].setAttribute('class','listitem');
    allLi[i].style.color = 'rebeccapurple';
}


//Create a new img elemen in the div with the class of "profilePicture"
const newImg = document.createElement('img');
newImg.setAttribute('src','Me.JPG');

document.querySelector('.profilePicture').appendChild(newImg);
newImg.setAttribute('width','150 px');
newImg.setAttribute('height','150 px');


///  The Book List
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


/// Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks
const newHeading = document.createElement('h1');
newHeading.innerText=' My Book List ';
const div = document.querySelector('.favoriteBooks').appendChild(newHeading);


// 
for (let i = 0; i < books.length; i++) {
    const newPara = document.createElement('p');
    newPara.innerText = books[i].title +', by '+books[i].author ;
    newHeading.appendChild(newPara);

}
