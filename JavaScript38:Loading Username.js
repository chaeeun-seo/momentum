// Loading Username

// localStorage
// I want to remember and save username >> API (local storage)
// local stroage allows us to save things on the browser so I can get them later

// localStorage Methods
// 1. localStorage.setItem("nameOfItem", "valueOfItem") : allows us to set an item in local storage
// 2. localStorage.getItem("nameOfItem") : allows to get item's value (if there's no item, I get null)
// 3. localStorage.removeItem("nameOfItem") : allows to remove item('s value)

// when I submit, localStorage remembers username, but when we refresh, the form still exists >> I don't want that
// if there's username on the local storage, we're not going to show the form and just show h1(greeting)
// if there's no username on the local storage, we're going to show the form first

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

// Uppercase Variable : for string
// if there's type error with variable, js will tell
// BUT if there's type error with string, js will not tell
// when I'm repeating strings that are created by me, strings are better to be saved as uppercase variables
// to remind these are text string that we don't want to make a mistake on

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = "Hello " + username;
  paintGreetings(username);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

link.addEventListener("click", handleLinkClick);

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// form(id="login-form") and h1(id="greeting") have class "hidden" for default

// by checking if there's username on the localStorage, we can save username and greeting unless we delete username

if (savedUsername === null) {
  // if there's no username on the localStorage
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
