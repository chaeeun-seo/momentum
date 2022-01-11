// Recap

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// document.createElement("")
// create sth in js and put that on html
const bgImage = document.createElement("img");

bgImage.src = "img/${chosenImage}";

// document.body.appendChild() : add html to the body at the end
// document.body.prependChild() : add html to the body on top of everything
// add bgImage inside of body
document.body.appendChild(bgImage);
