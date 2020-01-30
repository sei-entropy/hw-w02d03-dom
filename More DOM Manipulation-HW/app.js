const fontF = document.querySelector('body');
fontF.style.fontFamily = 'Arial, sans-serif';

const nickN = document.querySelector('span#nickname');
nickN.innerText = 'Ranen Khlabi';

const fov = document.querySelector('span#favorite');
fov.innerText = 'Cat';

const homeT = document.querySelector('span#hometown');
homeT.innerText = 'Tabuk';

const list = document.querySelectorAll('li');
for (let i =0;i<list.length;i++){
    list[i].setAttribute('class','listitem')
    list[i].style.color ='rebeccapurple';
}

const newImg =document.querySelector('div.profilePicture');

const img = document.createElement('img');
img.setAttribute('src','https://webcomicms.net/sites/default/files/clipart/175033/free-pictures-sun-175033-7616602.jpg');
newImg.appendChild(img);

//////////Book List

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

  const newH1 =document.querySelector('div.favoriteBooks');
  const H1s =document.createElement('h1');
  H1s.innerText= 'My Book List';
  newH1.appendChild(H1s);

  for(let i =0; books.length;i++){
    document.querySelector(".favoriteBooks").innerHTML+='<p>'+books[i].title + ' ' + books[i].author + ' </p>';
} 