var registerForm = document.getElementById("registerForm");

var service1 = document.querySelector("#service1");
var service2 = document.querySelector("#service2");
var service3 = document.querySelector("#service3");
var service4 = document.querySelector("#service4");

var line_userId = document.getElementById("line_userId");
var displayName = document.getElementById("displayName");

var submitButton = document.getElementById("submitButton");
var buttonSpinner = document.getElementById("buttonSpinner");
var buttonText = document.getElementById("buttonText");
var unknowError = document.getElementById("unknowError");


function afterSubmit(e) {
  e.preventDefault();

  var info = {
    service1: service1.checked,
    service2: service2.checked,
    service3: service3.checked,
    service4: service4.checked,

    line_userId: line_userId.value,
    displayName: displayName.value,
  };

  var url =
    "https://script.google.com/macros/s/AKfycbwFYQUjGWIygYv7muSnIirYS3NKFROwelPz5AjuJbTiYqc34AsDWWo-kBbTpG07JY8F/exec";

  buttonText.textContent = "Saving..";
  buttonSpinner.classList.remove("d-none");
  submitButton.disabled = true;

  fetch(url, {
    method: "POST",
    cache: "no-cache",
    redirect: "follow",
    body: JSON.stringify(info),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      window.location = "https://liff.line.me/1657073013-0xv8KjB1";
      registerForm.reset();
      buttonText.textContent = "Register";
      buttonSpinner.classList.add("d-none");
      submitButton.disabled = false;
    })
    .catch((err) => {
      console.log(err);
      console.log("something Went Wrong");
      unknowError.classList.remove("d-none");
      setTimeout(function () {
        unknowError.classList.add("d-none");
        buttonText.textContent = "Register";
        buttonSpinner.classList.add("d-none");
        submitButton.disabled = false;
      }, 1000);
    });
}

registerForm.addEventListener("submit", afterSubmit);
