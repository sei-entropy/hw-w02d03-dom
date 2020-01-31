document.querySelector('body').style.fontFamily="Arial, sans-serif";

const nickname = document.querySelector('span#nickname');

nickname.innerText="HUDA";

const favorit = document.querySelector('span#favorite');

favorit.innerText="WHALE";

const hometown = document.querySelector('span#hometown');

hometown.innerText="RIYADH";
//..........................................................

const list = document.querySelectorAll('li');

for (let i = 0; i < list.length; i++) {

    const tListitem = list[i];

    tListitem.classList.add('listitem');

    tListitem.style.color = 'rebeccapurple';
}

//.......................................................

const profilePicture=document.createElement('img');

profilePicture.setAttribute('src','https://i.pinimg.com/564x/55/1d/e6/551de67d65c930e81628cc024c04934f.jpg');

const profilePicture2 = document.querySelector('.profilePicture');

profilePicture2.appendChild(profilePicture);

//.............................................................

const books = [
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
  //.................................................
  const Book = document.createElement("h1");
  Book.innerText = "My Books List";
  
  const favorite = document.querySelector(".favoriteBooks");
  favorite.appendChild(Book);

  
  for (let i=0 ; i<books.length ; i++){
      const  booktitle = document.createElement("p");
  
      booktitle .innerText =  books[i].title +" by " + books[i].author;
      favorite.appendChild( booktitle);
  } 

  