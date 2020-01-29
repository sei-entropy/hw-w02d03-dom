const pageStyle = document.querySelector('body');
pageStyle.style.fontFamily = 'Arial, sans-serif';
const spanNickname= document.querySelector('#nickname');
const spanFavorite= document.querySelector('#favorite');
const spanHomeTown= document.querySelector('#hometown');
const listColor= document.querySelectorAll('.listitem');


spanNickname.innerText = ' chocolate';
spanFavorite.innerText = ' cat';
spanHomeTown.innerText=' Riyadh';
for(let i =0;i< listColor.length;i++){
    listColor[i].style.color = 'rebeccapurple';

}


const newImg = document.createElement('img');
newImg.setAttribute('src','https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/109778.jpg');
document.querySelector('.favoriteBooks').appendChild(newImg);

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

  const newHeading = document.createElement('h1');
  newHeading.innerText='My Book List';
  document.querySelector('.favoriteBooks').appendChild(newHeading);
       
       for(let i = 0; i< books.length;i++){
        const newParagraph = document.createElement('p');
           newParagraph.innerText=books[i].title+' by '+books[i].author;
           document.querySelector('.favoriteBooks').appendChild(newParagraph);
       }

   
