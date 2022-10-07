const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredientsRef = document.querySelector("#ingredients");

const createIngrediants = (arr) => {
  return arr.map((elem) => {
    const listItemRef = document.createElement("li");
    listItemRef.textContent = elem;
    listItemRef.classList.add("item");

    return listItemRef;
  });
};

const elements = createIngrediants(ingredients);

listIngredientsRef.append(...elements);
