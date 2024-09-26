console.log("Hello Everyone");
const bodyPreference = document.querySelector("main");
const welcomeMessage = document.getElementById("welcome-message");

function openForm() {
  document.getElementById("login-form-section").style.display = "block";
  document.getElementById("main-content").classList.add("blur");
}

function closeForm() {
  document.getElementById("login-form-section").style.display = "none";
  document.getElementById("main-content").classList.remove("blur");
}

window.onload = function () {
  openForm();
};

document
  .getElementById("login-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = document.getElementById("username-input").value;

    // Use fetch to send data to the server
    const response = await fetch("https://week5-project.onrender.com/get-login", {
      method: "POST", // Switch to POST because we're sending data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }), // Send the username as part of the request body in JSON format
    });

    const data = await response.json(); // Await the response and parse the data as JSON

    // Update the page with the preferences object returned from the fetch

    let currentPreference = data.preferences;

    if (currentPreference == "light") {
      bodyPreference.className = "change-body";
    } else if (currentPreference == "dark") {
      bodyPreference.className = "change-body-dark";
    }

    welcomeMessage.textContent = `Welcome ${username}`;
    console.log(welcomeMessage);
    // document.body.style.backgroundColor = "blue";
    console.log(bodyPreference);
    document.getElementById("login-form").reset();
    closeForm();
  });

// assigning sounds to a const variable
const happySound = new Audio("/sound1.mp3");
const calmSound = new Audio("/sound2.wav");
const neutralSound = new Audio("/sound3.wav");
const sadSound = new Audio("/sound4.wav");
const angrySound = new Audio("/sound5.wav");

// get button elements
const happyButton = document.getElementById("happy-button");
const calmButton = document.getElementById("calm-button");
const neutralButton = document.getElementById("neutral-button");
const sadButton = document.getElementById("sad-button");
const angryButton = document.getElementById("angry-button");

// create event handlers for our buttons
function handleHappySound() {
  happySound.play();

  setTimeout(() => {
    happySound.pause();
    happySound.currentTime = 0; // Reset the audio to the beginning
  }, 3000);
}
function handleCalmSound() {
  calmSound.play();

  setTimeout(() => {
    calmSound.pause();
    calmSound.currentTime = 0; // Reset the audio to the beginning
  }, 3000);
}
function handleNeutralSound() {
  neutralSound.play();
  setTimeout(() => {
    neutralSound.pause();
    neutralSound.currentTime = 0; // Reset the audio to the beginning
  }, 3000);
}
function handleSadSound() {
  sadSound.play();
  setTimeout(() => {
    sadSound.pause();
    sadSound.currentTime = 0; // Reset the audio to the beginning
  }, 3000);
}

function handleAngrySound() {
  angrySound.play();
  setTimeout(() => {
    angrySound.pause();
    angrySound.currentTime = 0; // Reset the audio to the beginning
  }, 3000);
}

// event listeners for our button

happyButton.addEventListener("click", handleHappySound);
calmButton.addEventListener("click", handleCalmSound);
neutralButton.addEventListener("click", handleNeutralSound);
sadButton.addEventListener("click", handleSadSound);
angryButton.addEventListener("click", handleAngrySound);

const newUserForm = document.getElementById("new-user-form");
//Event handler for new user submit button
function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(newUserForm);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);

  fetch("https://week5-project.onrender.com/new-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });

  newUserForm.reset();
}
newUserForm.addEventListener("submit", handleSubmit);
