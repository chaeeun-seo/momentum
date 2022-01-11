// PadStart()

const clock = document.querySelector("h2#clock");

// Mission : to show time (hours and minutes)
// JS has Date object for this
// new Date() : gives today
// new Date().getHours() : we can get hour in number

// problem : when the number is less than 10, it should look like 0x not just x
// fill the strings with two characters >> should have minimum two characters

// padStart(max/length, fillString) : function I can apply to a string
// tell JS to use padStart() to add padding to the start of the string
// string's length must be maxLength, and if it's not, will add fillString in front
// if string's length is already same as the maxlength, it's not doing anything

// padEnd(maxLength, fillString) : tell JS to use padStart() to add padding to the end of the string

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// we have to wait for 1 second to get time >> call getClock() as soon as website loads
getClock();
setInterval(getClock, 1000);
