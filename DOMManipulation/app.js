// About Me

const bodyStyle = document.querySelector('body');
bodyStyle.style.fontFamily= "Arial, sans-serif";




document.getElementById("nickname").textContent = "Salman";
document.getElementById("favorite").textContent = "Dog";
document.getElementById("hometown").textContent = "Riyadh";

const listItems= document.querySelectorAll('li');
listItems[0].setAttribute('class','listitem');
listItems[1].setAttribute('class','listitem');
listItems[2].setAttribute('class','listitem');

listItems[0].style.color= "rebeccapurple";
listItems[1].style.color= "rebeccapurple";
listItems[2].style.color= "rebeccapurple";

const newImage = document.createElement('img');
  const newattribute= newImage.setAttribute('src', 'https://www.fillmurray.com/400/400');
   document.querySelector('.profilePicture').appendChild(newImage);
   


   // The Book list 

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
  
  const heading = document.createElement('h1');
  heading.innerText= "My Book List";
  document.querySelector('.favoriteBooks').appendChild(heading);

  for (let i=0, i< books.length, i++){
    const paragraph = document.createElement('p');
    if (books[i].alreadyRead= true || false){
      return(title+', by '+author);
      append();
  }


   
