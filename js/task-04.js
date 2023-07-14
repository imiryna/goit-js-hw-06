const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementtBtn = document.querySelector('[data-action="increment"]');

const valueTag = document.getElementById("value");
let counterValue = 0;

const counterInc = () => {
  counterValue += 1;
  valueTag.textContent = counterValue;
  console.log(counterValue);
};

const counterDec = () => {
  counterValue -= 1;
  valueTag.textContent = counterValue;
  console.log(counterValue);
};

decrementBtn.addEventListener("click", counterDec);

incrementtBtn.addEventListener("click", counterInc);
