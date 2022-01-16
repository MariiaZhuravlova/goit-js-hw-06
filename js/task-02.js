const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('#ingredients');
const listOfIngredientsEl = ingredients.map((ingredient) => {
  const liItemEl = document.createElement("li");
  liItemEl.textContent = ingredient;
  liItemEl.classList.add("item");
  return liItemEl;
});

ulIngredients.append(...listOfIngredientsEl);
