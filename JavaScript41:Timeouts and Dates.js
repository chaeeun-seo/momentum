// Timeouts and Dates

const clock = document.querySelector("h2#clock");

// setTimeout(function, ms)
// how we can run a function only once but after certain time
// first argument : function I want to run
// second argument : after how many seconds (ms)

// Mission : to show time (hours and minutes)
// JS has Date object for this
// new Date() : gives today

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// we have to wait for 1 second to get time >> call getClock() as soon as website loads
getClock();
setInterval(getClock, 1000);

// problem : when the number is less than 10, it should look like 0x not just x
