// Question 1
let myFunctionExpression = function() {
  console.log("My name is Rune");
};
myFunctionExpression();

// Question 2
const myButton = document.querySelector(".btn");

myButton.addEventListener("click", function() {
  console.log("i was clicked");
});

// Question 3
const keyPressedCallback = document.getElementById("firstName");

function callAfterPressed() {
  console.log(event.key);
}
keyPressedCallback.addEventListener("keydown", callAfterPressed);

// Question 4
const mouseOverButton = document.getElementsByTagName("button")[1];

mouseOverButton.addEventListener("mouseover", function() {
  mouseOverButton.classList.add("hover");
});

// Question 5
const removeMouseOver = document.querySelector("[data-animal='dog']");

removeMouseOver.addEventListener("mouseout", function() {
  removeMouseOver.classList.remove("hover");
});

// Question 6
const animalData = document.querySelectorAll("li");

function returnDataValue(event) {
  console.log(event.target.dataset.animal);
}
for (let index = 0; index < animalData.length; index++) {
  animalData[index].addEventListener("mouseover", returnDataValue);
}

// Question 7
const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;

  case "cow":
    console.log("Moo");
    break;

  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}

// Question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
  console.log(sheep);
});

// Question 9
function logHelloTimer() {
  console.log("Hello");
  if (counter === 5) {
    clearInterval(intervalid);
  }
  counter++;
}
let counter = 0;
const intervalid = setInterval(logHelloTimer, 500);

// Question 10
const updateContainerDiv = document.querySelector(".container");

function updateDiv() {
    updateContainerDiv.innerHTML = "Text updated";
}

setTimeout(updateDiv, 2000);