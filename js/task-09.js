function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");

const text = document.querySelector(".color");

const toChangeColor = document.querySelector(".change-color");

toChangeColor.addEventListener("click", detChangeColor);

function detChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
}
