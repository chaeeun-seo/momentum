// Getting Username

// I want the form to disappear when user submits username
// 1. removing the whole HTML from the page
// 2. hide it using css

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

// upper case variables are variable that only contain strings
// we use uppercase variable when we want to save strings

const HIDDEN_CLASSNAME = "hidden";

// add the className hidden whose display property is none in css
// the form goes away but we can save username

// combine string and variable
// 1. "string " + variable
// 2. `string ${variable}`

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// handleLinkClick({information about the event that just happened})
