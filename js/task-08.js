const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);
console.log(formEl.elements);
function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  for (let [key, value] of formData.entries()) {
    if (!value) {
      alert(`Where is my data of ${key}`);
    }
  }
}
