const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onSubmitBtn);

function onSubmitBtn(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled");
  } else {
    const obj = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);
  }

  event.currentTarget.reset();
}
