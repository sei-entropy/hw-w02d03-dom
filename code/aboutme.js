//document.querySelector('body').setAttribute('font-family','Arial, sans-serif');
document.querySelector('body').style.fontFamily='Arial, sans-serif';

const nicknameTargit= document.querySelector('span#nickname');
const favoriteAnimalTargit= document.querySelector('span#favorite');
const hometownTargit= document.querySelector('span#hometown');

nicknameTargit.innerText='Sara';
favoriteAnimalTargit.innerText='cat';
hometownTargit.innerText='Riyadh';
//
const allList= document.querySelectorAll('li');
for(let i=0;i<allList.length;i++){
    const currentList = allList[i];
    currentList.classList='listitem';
    currentList.style.color='rebeccapurple';
}

//img
const imgTargit=document.querySelector('div.profilePicture');

const newImg= document.createElement('img');
newImg.setAttribute('src','https://amp.businessinsider.com/images/4fd8dcb7eab8eab648000004-750-143.jpg');

imgTargit.appendChild(newImg);

//new object
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
  //work start.
  //tatel
  const newH1 = document.createElement('h1');
  newH1.innerText='My Book List';

  h1Targit= document.querySelector('div.favoriteBooks');
  h1Targit.appendChild(newH1);
//pragraph
for(let i=0;i<books.length;i++){

const newPragraph =document.createElement('p');
newPragraph.innerText=books[i].title+'by :'+books[i].author+'Is it Readed :'+books[i].alreadyRead;



pragraphTargit =document.querySelector('div.favoriteBooks');
pragraphTargit.appendChild(newPragraph);
}

