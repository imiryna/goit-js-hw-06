const inputTag = document.querySelector("input");

const texTag = document.querySelector("span");

const fontSizeControl = () => {
  console.log(inputTag.value);
  texTag.style.fontSize = inputTag.value + "px";
};

inputTag.addEventListener("input", fontSizeControl);
