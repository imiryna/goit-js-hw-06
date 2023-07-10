const inputTag = document.querySelector('[id="validation-input"]');

// inputTag.classList.add("valid", "invalid");

console.log(inputTag);

const lostBlur = () => {
  console.log(inputTag.dataset.length);
  if (inputTag.value.length == inputTag.dataset.length) {
    inputTag.classList = ["valid"];
  } else {
    inputTag.classList = ["invalid"];
  }
};

inputTag.addEventListener("blur", lostBlur);
