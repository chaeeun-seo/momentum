// learn Arrays

// world without array
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// to access days of week in application
const daysOfWeek1 = mon + tue + wed + thu + fri + sat + sun;
console.log(daysOfWeek1)


// need a better way to group/list things >> list
// able to put 'number', 'variable', 'string', 'boolean', 'null', 'undefined' in an array
// to create an array, use []
// every single item in an array should be separated by a comma(,)
const daysOfWeek2 = [mon, tue, wed, thu, fri, sat, sun];
const nonsense = [1, 2, "hello", false, null, true, undefined];
console.log(daysOfWeek2, nonsense);


// we can make all of above simpler
// it's possible to find out what is the nth day of the week
const daysOfWeek3 = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(daysOfWeek3)


// Get Item from Array
// list indexing : getting items from the array
// computer count from 0
// if you want to find nth one of the array, use arrayName[n]
console.log(daysOfWeek3[4]);


// Add one more day to the array
// add one thing to the array
const daysOfWeek4 = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek4);
daysOfWeek4.push("sun");
console.log(daysOfWeek4);


// if I have a list of things I have to buy
const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy[1]);
console.log(toBuy[999]);
toBuy.push("kimchi");
console.log(toBuy);
