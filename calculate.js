var registerForm = document.getElementById("registerForm");

var morning_food = document.getElementById("morning_food");
var morning_fruit = document.getElementById("morning_fruit");
var morning_bev = document.getElementById("morning_bev");
var morning_food_u = document.getElementById("morning_food_u");
var morning_fruit_u = document.getElementById("morning_fruit_u");
var morning_bev_u = document.getElementById("morning_bev_u");

var noon_food = document.getElementById("noon_food");
var noon_fruit = document.getElementById("noon_fruit");
var noon_bev = document.getElementById("noon_bev");
var noon_food_u = document.getElementById("noon_food_u");
var noon_fruit_u = document.getElementById("noon_fruit_u");
var noon_bev_u = document.getElementById("noon_bev_u");

var night_food = document.getElementById("night_food");
var night_fruit = document.getElementById("night_fruit");
var night_bev = document.getElementById("night_bev");
var night_food_u = document.getElementById("night_food_u");
var night_fruit_u = document.getElementById("night_fruit_u");
var night_bev_u = document.getElementById("night_bev_u");

var line_userId = document.getElementById("line_userId");
var displayName = document.getElementById("displayName");

var submitButton = document.getElementById("submitButton");
var buttonSpinner = document.getElementById("buttonSpinner");
var buttonText = document.getElementById("buttonText");
var unknowError = document.getElementById("unknowError");

function afterSubmit(e) {
  e.preventDefault();

  var info = {
    morning_food: morning_food.value,
    morning_fruit: morning_fruit.value,
    morning_bev: morning_bev.value,
    morning_food_u: morning_food_u.value,
    morning_fruit_u: morning_fruit_u.value,
    morning_bev_u: morning_bev_u.value,

    noon_food: noon_food.value,
    noon_fruit: noon_fruit.value,
    noon_bev: noon_bev.value,
    noon_food_u: noon_food_u.value,
    noon_fruit_u: noon_fruit_u.value,
    noon_bev_u: noon_bev_u.value,

    night_food: night_food.value,
    night_fruit: night_fruit.value,
    night_bev: night_bev.value,
    night_food_u: night_food_u.value,
    night_fruit_u: night_fruit_u.value,
    night_bev_u: night_bev_u.value,

    line_userId: line_userId.value,
    displayName: displayName.value,
  };

  var url =
    "https://script.google.com/macros/s/AKfycbw7QQbxXITdgcyKpVknUB8h6GraZpmqV5Iw4A_vJYaMu99dClL-WoG_ZgF7_FeHMjIKDw/exec";

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
