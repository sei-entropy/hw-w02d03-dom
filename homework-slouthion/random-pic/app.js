const randomBu = document.querySelector("#randomize");
const changePic = function(){
   console.log("You click me") ;
   const newImage = document.createElement("img");
    newImage.setAttribute("src", "https://source.unsplash.com/random")
   const imgDiv = document.querySelector(".image");
   imgDiv.appendChild(newImage);
   
}
randomBu.addEventListener("click", changePic );
