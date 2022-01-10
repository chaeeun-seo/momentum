// Saving Username

// localStorage
// I want to remember and save username >> API (local storage)
// local stroage allows us to save things on the browser so I can get them later

// localStorage Methods
// 1. localStorage.setItem("nameOfItem", "valueOfItem") : allows us to set an item in local storage
// 2. localStorage.getItem("nameOfItem") : allows to get item's value
// 3. localStorage.removeItem("nameOfItem") : allows to remove item('s value)

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//when I submit, localStorage remembers username, but when we refresh, the form still exists >> I don't want that
// if there's username on the local storage, we're not going to show the form and just show h1
// if there's no username on the local storage, we're going to show the form first

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
