// learn javascript Variables


// Ways to create variables : 1. const (constant)
// variable that cannot change
const a = 7;
const b = 2;
const myName = "something";


// Ways to create variables : 2. let
// variable that can change
// use let when I want to create a new one
// let is for creation
// once a variable exist, if I want to update variable, update it without using let
let myName = "something";
console.log("hello " + myName);
myName = "something else";
console.log("your new name is " + myName);


// cannot assign a new value to constant
// if I made a variable with const, I cannot update it
// const is used when I want to be sure that some variables never be changed
const myName = "something";
console.log("hello " + myName);
myName = "something else";
console.log("your new name is " + myName)


// When I should use const & When I should use let
// use const by default, if I want to update variable, use let
// most of the time, I don't have to update everything
// most of the time, I have to change only some important parts


// old variable : var
// able to update variable at any point if I want
// var cannot tell us if I should update it or not


// Why we should use const & var instead of var
// const and let allow us to lock some variables
// const and let stop us from updating things that should not change
// const and let allows us to extract meaning from the code immediately


// When we use const VS. let VS. var
// we use let if something can be changed 
// browser can still understand var, but better to stick to the better version: const, let
// never use var
// always use const, sometimes use let, never use var
