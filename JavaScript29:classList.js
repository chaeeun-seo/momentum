// CSS in JavaScript part Three

// 1. classList
// when we start with a class and use className, js doesn't care about the past, and it'll replace the className
// if we use className, initial className is gone
// classList helps keep initial class
// classList allows you to work with the list of classes

// HTMLelement.classList.contains(specifiedClass)
// classList has a function called contains
// if the class that we specified is contained on the class of html element
// Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.

// HTMLelement.classList.remove(specifiedClass)
// HTMLelement.classList.add(specifiedClass)

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);
