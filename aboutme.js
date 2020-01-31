//1
var body =document.querySelector("body");
var curreentstyle = getComputedStyle(body);
var fontsize=curreentstyle.fontFamily;
body.style.fontFamily="Arial, sans-serif";

//2
var list =document.querySelector('#nickname');
var currentHyml =list.innerHTML;
list.innerHTML="<span></span>";
list.innerHTML="wejdan";

var list2 =document.querySelector('#favorite');
var currentHyml2 =list2.innerHTML;
list2.innerHTML="<span></span>";
list2.innerHTML="cat";

var list3 =document.querySelector('#hometown');
var currentHyml3 = list3.innerHTML;
list3.innerHTML="<span></span>";
list3.innerHTML="Hail";

//3

var changColor =document.querySelector(".listitem");
var curreentstyleColor = getComputedStyle(changColor);
var fonttextColor=curreentstyle.color;
changColor.style.color="rebeccapurple";

var changColor1=document.querySelector(".listitem1");
var curreentstyle = getComputedStyle(changColor1);
var fonttextColor1=curreentstyle.color;
changColor1.style.color="rebeccapurple";

var changColor2 =document.querySelector(".listitem2");
var curreentstyle= getComputedStyle(changColor2);
var fonttextColor2=curreentstyle.color;
changColor2.style.color="rebeccapurple";
//4
var elem = document.createElement("img");
var pic = document.querySelector("div.favoriteBooks");
elem.setAttribute("src", "https://img.icons8.com/dotty/80/000000/user-female-circle.png");
elem.setAttribute("height", "200");
elem.setAttribute("width", "200");
elem.setAttribute("alt", "profile");
list.appendChild(elem);



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
  
  //5
  var heading1 = document.querySelector("div.favoriteBooks");
  var currentHTML1 = heading1.innerHTML;
  heading1.innerHTML="<div></div>";
  heading1.innerHTML="My Book List ";

//6
  for (let i=0 ; i<books.length; i++){
 const theBooks= document.createElement('p');

 theBooks.innerText=books[i].title +' by '+books[i].author;
 heading1.appendChild(theBooks);

  }


  



