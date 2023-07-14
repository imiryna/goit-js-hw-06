function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  divBoxes: document.getElementById("boxes"),
  inputAmount: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  sizeBase: 30,
};

refs.btnCreate.addEventListener("click", btnCreateEvent);

function btnCreateEvent() {
  let amount = Number(refs.inputAmount.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  let array = [];
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.marginBottom = "20px";
    divEl.style.width = `${refs.sizeBase + i * 10}px`;
    divEl.style.height = `${refs.sizeBase + i * 10}px`;
    array.push(divEl);
  }
  refs.divBoxes.append(...array);
  refs.inputAmount.value = "";
}
refs.btnDestroy.addEventListener("click", destroyDivBoxes);

function destroyDivBoxes() {
  refs.divBoxes.innerHTML = "";
}
