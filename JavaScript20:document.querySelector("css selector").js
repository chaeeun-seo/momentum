// Searching For Elements

// document.querySelector("");
// querySelector allows you to search for elements using css notations
// querySelector returns only one element
// Returns the first element that is a descendant of node that matches selectors.

// to get h1 that is inside of div whose class is hello
// even though there are several elements that matches querySelector condition, it will only take the first one
const title = document.querySelector(".hello h1");

console.log(title);
title.innerText = "HELLO";

// document.querySelectorAll("");
// if I want to take all the elements that match, use querySelectorAll
// querySelectorAll will give an array of all the elements that match selector
const titleAll = document.querySelectorAll(".hello h1");

// when I want to select the one that has id of hello
const title1 = document.querySelector("#hello");
const title2 = document.getElementById("hello");
