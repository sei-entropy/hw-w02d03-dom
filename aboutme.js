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
//var img =document.createElement(".profilePicture");
//var img =document.querySelector(".profilePicture");
/*var elem = document.createElement("img");
elem.setAttribute("height", "768");
elem.setAttribute("width", "1024");
elem.setAttribute("alt", "profilepic");
img.setAttribute("src", "https://i1.wp.com/lubnah.me.ke/wp-content/uploads/2019/11/5781665-huzur-shif-hijab-drawing-hijab-cartoon-anime-muslimah-cartoon-hijab-860_1000.jpg?zoom=2&fit=860%2C1000&ssl=1");
document.body.appendChild(elem);*/

/*var img = document.createElement('img'); 
img.src =  
'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
document.getElementById('.profilePicture').appendChild(img); */

var elem = document.createElement("img");
elem.setAttribute("src", "https://www.placecage.com/300/300");
elem.setAttribute("height", "40");
elem.setAttribute("width", "120");
elem.setAttribute("alt", "profile");
document.body.appendChild(elem);



