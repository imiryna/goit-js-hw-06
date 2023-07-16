const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let dataFromForm = {};

  // const formData = new FormData(event.currentTarget);
  for (let [key, value] of event.) {
    if (!value) {
      alert(`Where is my data of ${key}`);
      break;
    }
    dataFromForm[key] = value;
  }
  console.log(dataFromForm);
  formEl.reset();
}
