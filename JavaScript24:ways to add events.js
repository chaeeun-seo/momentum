// More Events

// 1. one way to listen to events : HTMLElement.addEventListener("eventName", functionName)
// if we use EventListener, I can HTMLElement.removeEventListener

// 2. another way to listen to events : assigning an event listener to the oneventname property
// HTMLElement.onEventName = functionName 
const h1 = document.querySelector("div.hello:first-child h1");

function handleH1Click() {
  h1.innerText = "h1 was clicked!";
  h1.style.color = "red";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

// h1.addEventListener("click", handleTitleClick);
h1.onclick = handleTitleClick;
// h1.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseLeave);
h1.onmouseleave = handleMouseLeave;
