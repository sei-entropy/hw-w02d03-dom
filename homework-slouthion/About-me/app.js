const font = document.querySelector("body");
font.style.fontFamily = "Arial, sans-serif";

const myNickname = document.querySelector("#nickname");
myNickname.replaceWith("Moons")
const myfavoriteAnimal = document.querySelector("#favorite");
myfavoriteAnimal.replaceWith("Horse")
const myHometown = document.querySelector("#hometown");
myHometown.replaceWith("Riyadh")

//////////Give each li the class of "listitem"
const list = document.querySelectorAll("li")
for (let i=0; i < list.length; i++){
    list[i].classList.add("listitem")
    //////Change each li's text color to "rebeccapurple"
    list[i].style.color = "rebeccapurple"
}

////////Create a new img element and set its src
// attribute to a picture of you. Put that new img element in the div with the class of "profilePicture"
const ul = document.querySelector("ul")
ul.style.color= "profilePicture";

const addImg = document.createElement("img")
addImg.setAttribute("src","horse.jpg" )
addImg.setAttribute("width", "20%")
const profilePic = document.querySelector(".profilePicture")
profilePic.appendChild(addImg)

/////// book list ///////
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

  const heading = document.createElement("h1")
  heading.innerText= "My Book List";
  const divheading = document.querySelector(".favoriteBooks")
  divheading.appendChild(heading)

  for (let i=0; i < books.length; i++){
      const p = document.createElement("p")
      p.innerText = " The title is (" + books[i].title
      + ") By: " + books[i].author
      divheading.appendChild(p)
      
      
  }

 