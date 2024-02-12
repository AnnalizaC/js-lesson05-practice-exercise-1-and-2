//Exercise 1 Variables
var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

//Exercise 2 Variables
var themeSwitchInput = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

//Exercise 1 Functions
fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

//Exercise 2 Functions
themeSwitchInput.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
});
