// CSS in JavaScript part Three

// toggle
// toggle will check if the class exist

const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// HTMLElement.classList.toggle("className")
// if element's classList has className, remove that className from the classList
// if element's classList doesn't have className, add that className from the classList
// removing it if it's present and adding it if it's not present. 
function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
