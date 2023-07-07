const numberOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("ul>li").length}`);
});
