console.log('Hello from JS!');


//Change the font-family of the page to "Arial, sans-serif"
const page = document.querySelector("body");
page.style.fontFamily = "Arial, sans-serif";


// Replace each of the span tags (nickname, favorite, hometown) 
        //with your own information (e.g. put your nickname in
        // the nickname span)
        const spamName = document.querySelector("#nickname");
        const spamFav = document.querySelector("#favorite");
        const spamHome = document.querySelector("#hometown");
        spamName.innerHTML = "Shahad Alqahani"
        spamFav.innerHTML = "Hourse"
        spamHome.innerHTML = "Riyadh"


// Give each li the class of "listitem"
const listClass = document.querySelectorAll('li');
listClass[0].setAttribute('class', 'listitem');
listClass[1].setAttribute('class', 'listitem');
listClass[2].setAttribute('class', 'listitem');


// Change each li's text color to "rebeccapurple"
listClass[0].style.color = "rebeccapurple";
listClass[1].style.color = "rebeccapurple";
listClass[2].style.color = "rebeccapurple";


// Create a new img element and set its src attribute to a 
        //picture of you. Put that new img element in the div with 
        //the class of "profilePicture"
        const createImg = document.querySelector('.profilePicture');
        createImg.innerHTML = "<img src=\"profile.png\">";
        
    


        ///////THE BOOK LIST /////
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
//Create an h1 with the text of "My Book List",
// and put it inside div.favoriteBooks
          const newhead = document.querySelector('.favoriteBooks');
          newhead.innerHTML = "<h1>My Book List</h1>";

          //Iterate through the array of books. For each book,
          // create a p tag with the book title and author 
          //(e.g. "The Most Human Human, by Brian Christian"). 
          //Append it to the page
          for (let i =0; i< books.length;i++)
          newhead.innerHTML += "<p>"+ books[i].title+", by "+ books[i].author+"</p>"

