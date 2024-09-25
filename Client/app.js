console.log("Hello Everyone");

document
  .getElementById("login-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = document.getElementById("username-input").value;
    const preferencesOutput = document.getElementById("preferencesOutput");
    const bodyPreference = document.querySelector("body");

    // Use fetch to send data to the server
    const response = await fetch("http://localhost:8080/get-login", {
      method: "POST", // Switch to POST because we're sending data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }), // Send the username as part of the request body in JSON format
    });

    const data = await response.json(); // Await the response and parse the data as JSON

    // Update the page with the preferences object returned from the fetch
    preferencesOutput.textContent = `Preferences: ${data.preferences}`;

    let currentPreference = data.preferences;

    if (currentPreference == "light") {
      bodyPreference.className = "change-body";
    } else if (currentPreference == "dark") {
      bodyPreference.className = "change-body-dark";
    }

    // document.body.style.backgroundColor = "blue";
    console.log(bodyPreference);
  });

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
