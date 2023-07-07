const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = item;

  listOfIngredients.append(ingredient);
});
