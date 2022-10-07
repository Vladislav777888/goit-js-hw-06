const listRef = document.querySelector("#categories");
console.log("Number of categories:", listRef.children.length);

const liItemRef = document.querySelectorAll(".item");

liItemRef.forEach((elem) => {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.children.length);
});
