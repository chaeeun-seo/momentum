// Recap
// console.log() shows result in the console
// alert() shows result in the browser
// if I assign a function to a variable(const, let), that variable will hold the return value of a function
// once I write return, the function finishes
// once I write return, the function stops running and it will return the value
// when the function returns something, that's the moment when the function finishes its job

const calculator = {
    plus: function (a, b) {
        console.log("hello");
        return a + b;
        console.log("byebye"); // never runs
    },
};

const plusResult = calculator.plus(6, 7);
