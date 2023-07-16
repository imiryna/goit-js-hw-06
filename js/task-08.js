const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let dataFromForm = {};

  if (event.currentTarget.elements.email) {
    dataFromForm.email = event.currentTarget.elements.email;
  } else {
    alert("No email");
  }

  if (event.currentTarget.elements.password) {
    dataFromForm.password = event.currentTarget.elements.password;
  } else {
    alert("No password");
  }
  console.log(dataFromForm);
  formEl.reset();
}
