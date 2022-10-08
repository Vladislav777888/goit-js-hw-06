const inputRef = document.querySelector("input[data-length='6']");
inputRef.classList.add("validation-input");

inputRef.addEventListener("blur", (event) => {
  const inputValue = event.target.value.trim();
  const dataValue = Number(event.target.getAttribute("data-length"));
  event.target.classList.add("invalid");

  if (inputValue.length === dataValue) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  }
});
