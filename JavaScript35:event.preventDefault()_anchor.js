// Events part Two

// event.preventDefault()
// HTMLElement.addEventListener("eventName", functionName)
// function functionName(event) {event.preventDefault();}

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

// default behavior of a link is to click and go somewhere
// browser by default is programmed to go to the links, but preventDefaut can stop it
// alert blocks everything and default behavior keeps going >> not using anymore

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// handleLinkClick({information about the event that just happened})
