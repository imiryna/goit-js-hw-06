const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

// Option #1
let items = [];
ingredients.forEach((item) => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = item;
  items.push(ingredient);
  console.log(items);
});
listOfIngredients.append(...items);

// Option #2
// const fragment = document.createDocumentFragment();
// ingredients.forEach((item) => {
//   const ingredient = document.createElement("li");
//   ingredient.classList.add("item");
//   ingredient.textContent = item;
//   fragment.appendChild(ingredient);
// });
// listOfIngredients.append(fragment);
