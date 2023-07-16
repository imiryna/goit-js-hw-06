const formEl = document.querySelector(".login-form");
console.dir(formEl);

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    const obj = { email: email.value, password: password.value };
    console.log(obj);
  }
  event.currentTarget.reset();
}
