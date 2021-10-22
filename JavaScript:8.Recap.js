// Recap

// Data Types : string, number
console.log("text");
console.log('text');
console.log(3 + 4);


// Variables : const, lt
// constants don't allow us to update them
// able to update let
// when you want to update the variable, don't put let
// use let only when creating variable, not updating variable
// always use const, sometimes use let when I need, never use var
const a = 7;
console.log(a);

let AmICool = true;
AmICool = false;


// Data Types : Booleans(true, false), null(nothingness), undefined(state of all the let without a value)
// null : nothingness (python: None, Go: nil)
// undefined : state of all the let without a value
const b = true;
const c = null; // to make sure there is nothing in this variable
let hello;      // it exists, but has no value
console.log(hello);


// Array
// able to put number, string, variable, booleans
// able to access items it the array : arrayName[index]
// able to update some items to the list : arrayName[index] = value
// able to add an item to the list
// able to know the context if we use array
const me = "cool";
const days = [1, 2, false, true, null, undefined, "text", me];
const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy[0]);

console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);

toBuy.push("meat");
console.log(toBuy);


// Object
// group of properties that need to have some context
// to save properties that have meaning
// get item from the object : objectName.property
// update item of the object : objectName.property = value
// create a new property after object is created : objectName.newProperty = value
const player = {
    name : "something", 
    age: 200,
};

console.log(player, console);
console.log(player.name);
player.name = "something else";
console.log(player);
player.happy = "always";
console.log(player);


// Function
// way of encapsulating a code so that we can re-play over and over again
// to play function : functionName()
// send data to function : functionName(argument1, argument2, ...)
// receive data inside the function : function functionName(parameter1, parameter2, ...)
// parameters are just placeholders, when we send the real date >> so we can name them as anything
// parameters and arguments order matters
// if there's less parameters than arguments, it doesn't matter
// parameter can be used only in the body of the function
function plus(potato, tomato) {
    console.log(potato + tomato);
};

plus(6, 7);
plus(3.141592, 9876);
plus(9876, 3.141592);
plus(1, 2, 3, 4, 5);


// Last Example
const calculator = {
    add : function (a, b) {
        console.log(a + b);
    },
    minus : function (a, b) {
        console.log(a - b);
    },
    times : function (a, b) {
        console.log(a * b);
    },
    divide : function (a, b) {
        console.log(a / b);
    }, 
    powerof : function (a, b) {
        console.log(a ** b);
    },
}

calculator.add(3, 8);
calculator.minus(2, 7);
calculator.times(4, 9);
calculator.divide(6, 5);
calculator.powerof(17, 2);
