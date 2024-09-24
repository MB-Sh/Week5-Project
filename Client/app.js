console.log("Hello Everyone");

// assigning sounds to a const variable
const happySound = new Audio("./assets/happy.mp3");
const angrySound = new Audio("./assets/angry.mp3");

// get button elements
const happyButton = document.getElementById("happy-button");
const angryButton = document.getElementById("angry-button");

// create event handlers for our buttons
function handleHappySound() {
  happySound.play();
}

function handleAngrySound() {
  angrySound.play();
}

// event listeners for our button

happyButton.addEventListener("click", handleHappySound);
angryButton.addEventListener("click", handleAngrySound);

// sending login form data to server

const loginForm = document.querySelector("#login-form");

// async function handleSubmitLoginForm(event) {
//   event.preventDefault();
//   console.log("Form submitted!");
//   const result = await fetch("http://localhost:8080/get-login");
//   const data = await result.json();
//   console.log(data);
//   return data;
// }

// loginForm.addEventListener("submit", handleSubmitLoginForm);

// async function getFeedback() {
//   const result = await fetch("http://localhost:8080/get-login");
//   const data = await result.json();
//   console.log(data);
//   return data;
// }
