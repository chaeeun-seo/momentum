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

// to trigger the input validation, input has to be inside a form tag
// whenever the form is submitted, page is refreshed
// if I press the button inside of the form or input whose type is "submit", form is submitted automatically
// when the form is submitted, the web site will be refreshed
// if I press enter in the form and there's no more inputs, these will be automatically submitted

// want to stop the browser from refreshing and we want to save value of the user
// want to stop the form from being submitted
