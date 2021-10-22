// learn Function
// piece of code you execute over and over again


// world without function
console.log("Hello my name is name1");
console.log("Hello my name is name2");
console.log("Hello my name is name3");


// we want to duplicate as little code as possible
// function will encapsulate some code that we can play over and over again
// whatever in the curly braces was executed, whenever I press play function
function sayHello() {
    console.log("Hello!");
}

sayHello();
sayHello();
sayHello();
sayHello();


// argument : functionName(argument1, argument2)
// while pressing play on the function, you can send some information to that function with argument
// to play function and send something : functionName(argument)
sayHello("abc");


// to receive data : function function(parameter1, parameter2)
function sayHelloTo(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHelloTo("baby", 3);
sayHelloTo("dog", 10);
sayHelloTo("grand", 100);


// create a calculator
// if you don't send any argument and try to print that parameter, console will show "undefined"
// if you try to +-*/ undefined, you'll get NaN
// arguments' order matters
// parameter only exists in the function block
function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber)
}
function divide(a, b){
    console.log(a / b);
}

plus(50, 6);
divide(72, 4);


// make xx.xx
const player = {
    name: "something",
    sayHi: function(otherPersonsName){
        console.log("hi! " + otherPersonsName + " nice to meet you!")
    },
};

console.log(player.name);
player.sayHi("abc");
player.sayHi("def");
