function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorRef = document.querySelector(".change-color");
const textColorRef = document.querySelector(".color");

btnChangeColorRef.addEventListener("click", () => {
  textColorRef.textContent = getRandomHexColor();
  document.body.style.background = getRandomHexColor();
});
