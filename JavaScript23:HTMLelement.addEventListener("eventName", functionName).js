// Events part Two

// Best way to find out what event I can listen for
// googling the (name of the element + html element + mdn)
// HTMLElement - Web APIs | MDN
// HTMLElement from the JS point of view

// console.dir(element)
// able to see on--, which are all events we can use

// listen to event whether mouse goes on top of the title

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.innerText = "title was clicked!";
  title.style.color = "red";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
