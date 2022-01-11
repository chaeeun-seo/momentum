// Recap

const clock = document.querySelector("h2#clock");

// new Date object will give you the current date, time when you call that line
// turn hours, minutes and seconds (that we got by using the new Date object) into strings
// padStart function is used for string when I need the string to be longer
// padStart function add string in front or at the end if it's not long enough

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// we have to wait for 1 second to get time >> call getClock() as soon as website loads
getClock();

// this makes things look like realtime
// setInterval allows us to call a function every whatever ms
// without setInterval, getClock function will be executed only once
setInterval(getClock, 1000);
