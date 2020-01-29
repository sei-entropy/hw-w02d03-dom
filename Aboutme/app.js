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






const changeFont = document.querySelector('body');
changeFont.style.fontFamily = "Arial, sans-serif";
//replace span with content
const replaceNickname = document.querySelector('#nickname');
replaceNickname.innerText = "Abo mazro";

const favorite = document.querySelector('li span#favorite');
favorite.innerText = "Monkey!";


const hometown = document.querySelector('#hometown');
hometown.innerText = "Riydh";



// create an Image
createNewImg = document.createElement('img');
createNewImg.setAttribute('src', 'avatar.png');
document.querySelector(' .profilePicture').appendChild(createNewImg);

  //create h1 
  createH1 = document.createElement('h1');
  createH1.innerText ="My Book List";
  document.querySelector(' .favoriteBooks').appendChild(createH1);
// Iterate through the array of books and get book title and author
for(let i=0; i<=books.length-1; i++){
    const titleResult = books[i].title;
    const authorResult = books[i].author;
    creatP = document.createElement('p');
    creatP.innerText = 'The book title '+titleResult+', by '+ authorResult;
    document.querySelector(' .favoriteBooks').appendChild(creatP);
}




//change the li to class list item
let lenLi =document.querySelectorAll('li').length;
for(let i=0;i <=lenLi ;i++){
let li = document.querySelectorAll('li')[i];
li.setAttribute('class','listitem');
//change all li text color to "rebeccapurple"
li.style.color = "rebeccapurple";
}



