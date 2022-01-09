// CSS in JavaScript part Three

// 1. className
// if we start with a class, js code below will replace the class name
// js doesn't care about the past, and it'll replace the className
// if we use className, initial className is gone
// it's a problem when we want to keep the initial class

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
