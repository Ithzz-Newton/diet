var registerForm = document.getElementById("registerForm");

var weight_kg = document.getElementById("weight_kg");
var height_m = document.getElementById("height_m");
var user_ages = document.getElementById("user_ages");
var user_gender = document.getElementById("user_gender");
var user_activty = document.getElementById("user_activty");

var line_userId = document.getElementById("line_userId");
var displayName = document.getElementById("displayName");

var submitButton = document.getElementById("submitButton");
var buttonSpinner = document.getElementById("buttonSpinner");
var buttonText = document.getElementById("buttonText");
var unknowError = document.getElementById("unknowError");

function afterSubmit(e) {
  e.preventDefault();

  var info = {
    weight_kg: weight_kg.value,
    height_m: height_m.value,
    user_ages: user_ages.value,
    user_gender: user_gender.value,
    user_activty: user_activty.value,

    line_userId: line_userId.value,
    displayName: displayName.value,
  };

  var url =
    "https://script.google.com/macros/s/AKfycbzqlY580qpLm_NJkHhubCFQfOpG6MTLK_-VfdmZSJe1YeScTfWWKDI8F6E-ZiPvPikmiw/exec";

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
