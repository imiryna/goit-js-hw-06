const inputTag = document.querySelector('[id="name-input"]');

const outputTag = document.querySelector('[id="name-output"]');

console.log(inputTag);
console.log(outputTag);

const updateOutput = () => {
  outputTag.innerHTML = inputTag.value == "" ? "Anonymous" : inputTag.value;
};

inputTag.addEventListener("input", updateOutput);
