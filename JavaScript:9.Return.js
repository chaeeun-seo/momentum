// Returns

// Example : calculator
const calculator = {
    plus : function (a, b) {
        return a + b;
    },
    minus : function (a, b) {
        return a - b;
    },
    times : function (a, b) {
        return a * b;
    },
    divide : function (a, b) {
        return a / b;
    }, 
    power : function (a, b) {
        return a ** b;
    },
}

const plusResult = calculator.plus(3, 8);
const minusResult = calculator.minus(plusResult, 7);
const timesResult = calculator.times(4, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);


// Another Example : calculate korean age
// need a result in a code >> return 
const age = 100;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);
