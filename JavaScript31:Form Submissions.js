const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// element(input), property(value)
// value property can give us the content of input

function onLoginBtnClick() {
  console.log(loginInput.value);
  console.log("click!!!");
}

loginButton.addEventListener("click", onLoginBtnClick);

// want to allow user to click the button only when they write their name
