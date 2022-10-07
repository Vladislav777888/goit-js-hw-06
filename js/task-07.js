const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRef.addEventListener("input", (event) => {
  textRef.style.fontSize = event.target.value + "px";
});
