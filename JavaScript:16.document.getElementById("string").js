// HTML in JavaScript

// document refers to html from javascript world
// document is an object that is given by the browser that allows us to interact with html

// document.getElementById("string")
// getElementById function is used to grab the element
// able to use getElementById function, when I create id in html tag
// getElementById will find element on html by the id

console.log(document.getElementById("title"));
const title = document.getElementById("title");
console.log(title);
console.dir(title);

// able to update
// change things in the document
title.innerText = "Got you!";

// able to check things
// able to get things from the html element
// way to get elements from html
console.log(title.id);
console.log(title.className);
