// Events

// Events
// when I click, when mouse goes on top of h1, when I finish input, when I write my name and press enter, when I disconnect from wifi
// js can listen to all these events

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  console.log("title was clicked!");
  title.style.color = "red";
}

// element.addEventListener("eventName", functionName)
// EventListener listens to the event
// it's important not to press play of the function >> no brackets
// when the event happens, js will press play for me

// js will look at the title, and listens when someone clicks on the title
// we're listening to the click event, and when click event happens, we want to execute a function called handleTitleClick
// when user clicks the title, js will press play for me
// I'm giving JS just the name of the function, so when user clicks the title, js will press play for me
title.addEventListener("click", handleTitleClick);

// if we look inside the element object, we can find many things that we can get or set
// to listen to an event, we have to take html element and run the function at addEventListener and specify which event we have to listen to and specify what function we want to run when user does the event
