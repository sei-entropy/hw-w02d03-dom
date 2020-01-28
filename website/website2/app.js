console.log("is it working!");

const page=document.querySelector('body');
page.style.fontFamily="Arial, sans-serif";


const nickname=document.querySelector("#nickname");
nickname.innerText="Nwja~";

const favorite=document.querySelector("#favorite");
favorite.innerText="Elephant";

const hometown=document.querySelector("#hometown");
hometown.innerText="Riyadh";


const allLi1=document.querySelectorAll(".listitem")[0];
allLi1.style.color='rebeccapurple';

const allLi2=document.querySelectorAll(".listitem")[1];
allLi2.style.color='rebeccapurple';

const allLi3=document.querySelectorAll(".listitem")[2];
allLi3.style.color='rebeccapurple';

const imageLocation=document.querySelector(".profilePicture");

const newImg=document.createElement('img');
newImg.setAttribute('src','https://i1.pngguru.com/preview/71/220/950/blackpink-jennie-dazed-and-confused-hq-black-pink-jenny-kim.jpg');
newImg.style.width='220px';
newImg.style.height='260px';
imageLocation.appendChild(newImg);


// The Book List 

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



  const heading=document.createElement('h1');
  heading.innerText="My Book List";

  const headingLocation=document.querySelector('.favoriteBooks');
  headingLocation.appendChild(heading);

  for (let  i = 0; i < books.length; i++ ){
    const text=books[i].title+" ,by "+books[i].author;
    const newPar=document.createElement('p');
   newPar.innerText=text;
   headingLocation.appendChild(newPar);

}


