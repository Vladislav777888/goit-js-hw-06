const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim();
  spanRef.textContent = inputValue;

  if (inputValue === "") {
    spanRef.textContent = "Anonymous";
  }
});
