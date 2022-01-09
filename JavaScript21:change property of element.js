// Events

// able to grab things from the html using javascript b/c html is loading app.js
// browser gives us the access to it

// getting h1 that's inside of div with a classname hello and which is the first child
const title = document.querySelector("div.hello:first-child h1");
title.innerText = "HELLO";
console.log(title);

// console.dir();
// to check inside of element that we got by using querySelector, use console.dir()
// gives object representation of an element
console.dir(title);

// by checking element by console.dir, we can see many on--
// on-- are all events

// we can change the values of any property inside of JavaScript objects
// some of them cannot be changed : ex. namespaceURI

// style is an object inside of h1 element
// we can see the style of element that is written in JavaScript form
// color is a property inside a style object
// we can modify the style of h1 from js
title.style.color = "green";
