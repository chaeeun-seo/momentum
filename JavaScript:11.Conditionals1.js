// Conditionals 1
// allows you to check if something is true or not
// most of the time, we use conditionals to check things


// when we use Conditionals
// if the user logged in, show them something
// if the user did something, we are going to react in some way


// age calculator that tells if I can drink or not

// prompt
// prompt allows to show a window to a user
// prompt("message", "default")
// prompt stops the execution of a javascript >> why we're not using prompt anymore
// we cannot apply any css style to the prompt function
// some browsers block these kind of pop-ups
// used to ask user for a value
// these days, most of the people create their own modals with html and css
// prompt() is the most straight-forward way on the browser side
// pause javascript execution until you apply
// if I press cancel, value becomes "null"(nothing)
// if I write nothing and press ok, value is empty("") string

const age = prompt("How old are you?");
console.log(age); 

// type check : use typeof
console.log(typeof age);

// type change/conversion
// parseInt(string) : convert string into a number
console.log(typeof "15", typeof parseInt("15"));
console.log(age, parseInt(age));

// cannot check if a string is more or less than something
// can check if a number is more or less than something 
// if it's a string we cannot compare which is bigger, so need to turn that into a number
// if a use writes something that's not a number, parseInt() will become NaN
// parseInt() cannot process string that's not a number
console.log(parseInt("abcdefg"));
