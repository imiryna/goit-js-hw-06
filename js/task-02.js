const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((item) => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = item;
  fragment.appendChild(ingredient);
  console.log(fragment);
});
listOfIngredients.append(fragment);
