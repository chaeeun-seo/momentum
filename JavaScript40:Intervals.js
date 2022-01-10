const clock = document.querySelector("h2#clock");

// interval
// sth that should happen every OO seconds

function sayHello() {
  console.log("hello!");
}

// setInterval(functionName, ms)
// executing the function every ceratin amount of time
// first argument : the function I want to run
// second argument : the miliseconds you want to wait btw each call

// every 5 seconds
// first I cannot see anything, but after 5 seconds I can see first hello from the console
setInterval(sayHello, 5000);
