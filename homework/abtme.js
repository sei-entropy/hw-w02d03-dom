console.log("Adding values...");
//1 answer
const bodyBackground = document.querySelector("body");

const changingColor = bodyBackground.setAttribute(
  "style",
  "background-color: #F2A649;font-family:Arial,sans-serif"
);

//2 answer
const nickname = document.querySelector("#nickname");

nickname.innerHTML = "aaljamid";

const favorite = document.querySelector("#favorite");

favorite.innerHTML = "Cat";

const hometown = document.querySelector("#hometown");

hometown.innerHTML = "KSA";

/// 3 Answer
const liClass = document.querySelectorAll("li");

for (i = 0; i < liClass.length; i++) {
  liClass[i].setAttribute("class", "listitem");
}
