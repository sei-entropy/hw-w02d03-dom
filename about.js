document.body.style.fontFamily= 'Arial, sans-serif';
const nickname = document.querySelector('#nickname');
const favorite = document.querySelector('#favorite');
const hometown = document.querySelector('#hometown');
nickname.innerText="moh";
favorite.innerText="panda";
hometown.innerText ="alhssa";
const addclass = document.querySelectorAll('li');
addclass[0].classList.add('listitem');
addclass[1].classList.add('listitem');
addclass[2].classList.add('listitem');
addclass[0].style.color = 'rebeccapurple';
addclass[1].style.color = 'rebeccapurple';
addclass[2].style.color = 'rebeccapurple';
const newImg = document.createElement('img');
newImg.setAttribute('src','https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png');
const divpicure = document.querySelector('.profilePicture');
divpicure.appendChild(newImg);




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


    const listOfbooks = document.createElement('h1');
    listOfbooks.innerText = 'My Book List';
    const divbooks = document.querySelector('.favoriteBooks');
    divbooks.appendChild(listOfbooks);
for(let i =0;i<books.length;i++)
{
    const newPa = document.createElement('p');
    newPa.innerText = books[i].title+", by "+books[i].author;
    divbooks.appendChild(newPa);
}