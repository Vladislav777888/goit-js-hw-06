function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('[type="number"]');
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(inputRef.value);
  let baseBoxSize = 20;

  for (let i = 0; i < amount; i++) {
    baseBoxSize += 10;
    const box = document.createElement("div");
    box.style.width = baseBoxSize + "px";
    box.style.height = baseBoxSize + "px";
    box.style.margin = "10px";
    box.style.backgroundColor = getRandomHexColor();
    boxesRef.append(box);
  }
}

function destroyBoxes() {
  boxesRef.textContent = "";
  inputRef.value = "";
}
