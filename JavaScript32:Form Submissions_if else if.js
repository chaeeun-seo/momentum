const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// element(input), property(value)
// value property can give us the content of input

// want to allow user to click the button only when they write their name

function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name!");
  } else if (username.length > 15) {
    alert("Your name is too long");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

// inputs can do more things
// HTML can do many things
// <input required> 필수입력 항목
// <input maxlength="15">
