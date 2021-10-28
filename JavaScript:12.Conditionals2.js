// Conditionals 2

// if parseInt(age) is not NaN, we're going to show a message
// functions will be executed from inside to out
const yourAge = parseInt(prompt("How old are you?"));

// isNaN(number) : check if it is NaN
// isNaN(number) will return boolean value(true, false)
// it will return "false" if it is a number
// it will return "true" if it is not a number
console.log(isNaN(yourAge));


// Conditionals
// condition have to be a boolean(true, false)
// if (condition) {
//     // condition === true
// } else {
//     // condition === false
// }

if (isNaN(yourAge)) {
    console.log("please write a number");
} else {
    console.log("Thank you for writing your age.");
}
