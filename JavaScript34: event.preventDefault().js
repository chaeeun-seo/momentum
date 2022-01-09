// to trigger the input validation, input has to be inside a form tag
// if I press the button inside of the form or input whose type is "submit", form is submitted automatically
// when the form is submitted, the web site will be refreshed

// want to stop the browser from refreshing and we want to save value of the user
// want to stop the form from being submitted
// want to stop submit event from happening or to be in the middle of it and listen whether submit event happened or not

// mission1. get value from the input when I submit the input
// mission2. stop from refreshing
// refreshing is the behold behavior, which means the brower is programmed to do that
// browser is programmed to refresh the page and submit the form when there's enter or when I press the button

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// submit event happens when I press enter or when I press the button

// first argument of EventListener function
// onLoginSubmit function takes one argument and you're giving this to js
// when someone submits the form, js calls onLoginSubmit function
// JS will give as onLoginSubmit function's first argument, some info that it might need

// the first argument of all the EventListener function is the info about what just happened
// I just have to make a space, and JS will fill the first argument with the info about info that just occurred
// for the first argument of EventListener function, we use event as a convention

// firstArgumentOfEventListenerFunction.preventDefault()
// preventDefault function is inside the first argument of the EventListener Function
// preventDefault function stops the default behavior of any event
// default behavior means what the browser will usually do
// browser usually submit the form by refreshing the page when I submit a form
// I'm stopping the browser from refreshing by using preventDefault function
// whatever function I put in EventListener function, JS will give info about what just happened as the first argument

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

// when submit event is happening, JS is calling onLoginSubmit function with the event object as the first argument and we're preventing default behavior from happening

// browser is grabbing information from the event and the browser is pressing play to the onLoginSubmit function
// when the event happens, the browser will call the function with extra info in the first argument

// by doing nothing, JS calls EventListener function with some info(event object)
// event object has a preventDefault function
// if we call preventDefault function, the default behavior of the browser is stopped
