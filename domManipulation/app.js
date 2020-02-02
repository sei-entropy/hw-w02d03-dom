console.log("hi hi hi ");


const body = document.querySelector("body");

body.style.fontFamily = "Arial, sans-serif";



 const nickName = document.querySelector("#nickname");
 nickName.innerText = " AFnan Basudan  ";
 nickName.style.color="rebeccapurple";

 const favorite = document.querySelector("#favorite");
 favorite.innerText = "  horse  ";
 favorite.style.color="rebeccapurple";

 const homeTown = document.querySelector("#hometown");
 homeTown.innerText = " Riyadh ";
 homeTown.style.color="rebeccapurple";

 const theListDiv = document.querySelector("li");
 theListDiv.setAttribute("class","listitem");


 const img = document.createElement("img");
 const theImg = document.querySelector(".profilePicture");
 theImg.appendChild(img);
 const addImg = document.querySelector("img");
 addImg.setAttribute("src","https://i.picsum.photos/id/164/1200/800.jpg")
 addImg.setAttribute("width","500");
 addImg.setAttribute("height","500");
 


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



const theTital = document.createElement("h1");
theTital.innerText= " My Book List";
const tital = document.querySelector("div.favoriteBooks");
tital.appendChild(theTital);




    
    
    for (let i=0 ; i<books.length; i++){
        const bookPargraph = document.createElement("p");
        bookPargraph.innerText=books[i].title+" by "+books[i].author
        const add = document.querySelector("div.favoriteBooks");
        add.appendChild(bookPargraph)

          i++;
    }









