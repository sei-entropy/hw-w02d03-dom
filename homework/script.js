// This is my js for the hw

const addWidthHeightValue = document.querySelector("#randomize");

const createAddImg = function() {
  console.log("Adding values...");

  const width = document.querySelector(".width");
  const height = document.querySelector(".height");

  const widthValue = width.value;
  const heightValue = height.value;

  console.log(widthValue);
  console.log(heightValue);

  const newImg = document.createElement("img");

  const newImgDiv = document.querySelector(".image");
  newImgDiv.appendChild(newImg);

  newImg.setAttribute(
    "src",
    "https://source.unsplash.com/user/erondu/" + widthValue + "x" + heightValue
  );

  width.value = "";
  height.value = "";
};

addWidthHeightValue.addEventListener("click", createAddImg);
