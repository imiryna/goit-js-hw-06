const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementtBtn = document.querySelector('[data-action="increment"]');

const valueTag = counter.querySelector("#value");
let counterValue = 0;

const counterInc = () => {
  counterValue += 1;
  valueTag.innerHTML = counterValue;
  console.log(counterValue);
};

const counterDec = () => {
  counterValue -= 1;
  valueTag.innerHTML = counterValue;
  console.log(counterValue);
};

decrementBtn.addEventListener("click", counterDec);

incrementtBtn.addEventListener("click", counterInc);

//   // console.log(e);
//   const typeOfClick = e.target.dataset.action;
//   let value = Number(counterValue.innerHTML);
//   switch (typeOfClick) {
//     case "decrement":
//       value -= 1;
//       break;
//     case "increment":
//       value += 1;
//       break;
//     default:
//       console.log("shit happened");
//   }
//   counterValue.innerHTML = value;
// };

// buttonsTag.forEach((b) => {
//   b.addEventListener("click", handleClick);
// });

// console.log(buttons);
