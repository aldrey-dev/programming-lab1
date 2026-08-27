const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

const originalHeading = "Welcome";
const originalBgColor = "#f0f0f0";

function showGreeting() {
    const userName = nameInput.value.trim();

    if (userName === "") {
        messageArea.textContent = "Please enter your name.";
    } else {
        mainHeading.textContent = "Hello, " + userName + "!";
        messageArea.textContent = "";
    }

    console.log("Greeting button clicked.");
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
    messageArea.textContent = "Background color changed to light blue.";
    console.log("Background button clicked. Color changed to light blue.");
}

function resetPage() {
    mainHeading.textContent = originalHeading;
    nameInput.value = "";
    messageArea.textContent = "";
    document.body.style.backgroundColor = originalBgColor;
    console.log("Reset button clicked. Page restored.");
}

function showTypingText() {
    messageArea.textContent = "You are typing: " + nameInput.value;
}

function showMouseoverMessage() {
    console.log("The mouse is over the greeting button.");
}

greetingButton.addEventListener("click", showGreeting);
backgroundButton.addEventListener("click", changeBackgroundColor);
resetButton.addEventListener("click", resetPage);
nameInput.addEventListener("input", showTypingText);
greetingButton.addEventListener("mouseover", showMouseoverMessage);

console.log("JavaScript file loaded successfully. All events attached.");