// Recap

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

// no argument for paintGreetings() function
// instead const username in paintGreetings() function
// BUT hitting the localStorage twice

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 1. CHECK THE LOCALSTORAGE
// localStorage is an API >> function that allows us to save, get, delete things from a tiny database the browser has
// localStorage.getItem("item that does not exist") >> we get null result
// localStorage.getItem("item that does exist") >> we get the value of that key
// searching, deleting, adding keys and values
// if I search for a key and if that exists, I'll get the vale

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // if there's no username on the localStorage
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings();
}
