document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const userMail = emailField.value;

  const passwordField = document.getElementById("password-field");
  const userPassword = passwordField.value;

  if (
    userMail === "muntasirbillah01@gmail.com" &&
    userPassword === "alhamdulillah"
  ) {
    window.location.href = "bank.html";
  } else {
    alert("Invalid Password");
  }
});

// email-field
// password-field
