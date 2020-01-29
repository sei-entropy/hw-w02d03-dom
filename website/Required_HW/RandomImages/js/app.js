const $q = document.querySelector.bind(document);
const $qa = document.querySelectorAll.bind(document);

const eventClick = "click";
const buttonRandomize = $q("#randomize");

const randomizeCallback = function (event) {
    let inputWidth = $q("input.width");
    let inputWidthValue = inputWidth.value;

    let inputHeight = $q("input.height");
    let inputHeightValue = inputHeight.value;

    let createNewImg = function () {
        let newImg = document.createElement("img");
        newImg.src = "https://source.unsplash.com/" + inputWidthValue + "x" + inputHeightValue;

        newImg.width = inputHeightValue;
        newImg.height = inputHeightValue;

        $q(".image").appendChild(newImg);
        console.log(inputWidthValue, inputHeightValue);
        inputWidth.value = "";
        inputHeight.value = "";
    }

    if ((inputWidthValue == null || inputWidthValue == "") && (inputHeightValue == null || inputHeightValue == "")) {
        alert("Please enter the width/height");
        return false
    } else if (($qa("img")[0] == null || $qa("img")[0] == "")) {
        return createNewImg();
    } else {
        $qa("img")[0].remove();
        return createNewImg()
    }
}

buttonRandomize.addEventListener(eventClick, randomizeCallback);