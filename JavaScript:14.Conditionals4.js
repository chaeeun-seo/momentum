// Conditionals 4

// === : to check if the value is exactly same 
// !== : to check if the valur is not same
// javascript reads from top to bottom
// important to consider the order of the conditions or some codes will never be executed

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age === 100){
    console.log("wow you are 100");
} else if (age > 80) {
    console.log("You can do whatever you want");
} 
