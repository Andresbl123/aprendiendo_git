const form = document.getElementById("form");
const submitButton = document.getElementById("submitButton");

const name = document.getElementById("name");
const email = document.getElementById("email");
const gender = document.getElementById("gender");
const terms = document.getElementById("terms");

const formIsValid = {
  name: false,
  email: false,
  gender: false,
  terms: false,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

name.addEventListener("change", (e) => {
  if (e.target.value.trim().length > 0) formIsValid.name = true;
});

email.addEventListener("change", (e) => {
  if (e.target.value.trim().length > 0) formIsValid.email = true;
});

gender.addEventListener("change", (e) => {
  console.log(e.target.checked);
  if (e.target.checked == true) formIsValid.gender = true;
});

terms.addEventListener("change", (e) => {
  formIsValid.terms = e.target.checked;
  e.target.checked
    ? submitButton.removeAttribute("disabled")
    : submitButton.setAttribute("disabled", true);
});

const validateForm = () => {
  const formValid = Object.values(formIsValid);
  const valid = formValid.findIndex((value) => value == false);
  if (valid == -1) form.submit();
  else alert("Formulario invalido");
};
