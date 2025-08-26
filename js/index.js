const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submitButton");
const nameError = document.getElementById("nameError");
const subjectError = document.getElementById("subjectError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

function validateForm() {
  let isValid = true;

  // Reset errors
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  subjectError.innerHTML = "";
  messageError.innerHTML = "";

  if (nameInput.value.trim() === "") {
    nameError.innerHTML = "Enter your name";
    isValid = false;
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.innerHTML = "Enter a valid email";
    isValid = false;
  }

  if (subjectInput.value.trim() === "") {
    subjectError.innerHTML = "Enter subject";
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.innerHTML = "Leave a message";
    isValid = false;
  }

  return isValid;
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateForm()) {
    alert("Form submitted successfully!");
  }
});
