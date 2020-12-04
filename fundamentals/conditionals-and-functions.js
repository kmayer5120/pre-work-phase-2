/*
 * Conditionals, Functions, Scope, and Loops
 */

// Video: Conditionals, Functions, and Scope (https://www.youtube.com/watch?v=-SHDR7YqYss&ab_channel=DeepDiveCodingBootcamp)

/*
//Comparison operators
//Equals
let equals = 1 === 1; // === operator will compare the type and value

//greater than
let greaterThan = 5 > 1;

//less than
let lessThan = 2 < 10;

//greater than or equals to
let greaterThanEq = 5 >= 5;

//less than or equals to
let lessThanEq = 4 <= 9;

//not equals
let notEquals = 5 !== 2;
*/

let storeA = 3.10;
let storeB = 4.40;
let storeAIsLower = storeA < storeB;
// console.log(storeAIsLower);
/*

//if block
if (storeA < storeB) {
    console.log("Store A has a lower price.");
} else if (storeB < storeA) {
    console.log("Store B has a lower price.");
} else {
    console.log("Their prices are equal.");
}

//testing ternary operator in js because why not?
(storeA < storeB) ? console.log("Store A has a lower price.") : console.log("Store B has a lower price.");
//note to self: works the same as in Java
*/

/*
//functions
function compareStorePrices(storeA, storeB) {
    if (storeA < storeB) {
        console.log("Store A has a lower price.");
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.");
    } else {
        console.log("Their prices are equal.");
    }
}

compareStorePrices(10, 5);
compareStorePrices(5, 10);
compareStorePrices(5, 5);
*/

/*
//returning values from functions
function squareNum(number) {
    return number * number;
}

let squaredNumber = squareNum(4);

console.log(squaredNumber);
console.log(squareNum(2));

*/

/*
//scope
//Note to self: same as any other programming language
let x = 10;

function addNumbers(n, m) {
    return n + m;
}
*/

//arrays
//zero indexed just like most other languages
//arrays can be nested -- do not have to declare as multi dimensional like Java, C#, C++, etc.

//array declarations use square brackets
let ourArray = [1, 2, 3, 4, 5];
//accessing array values
// console.log(ourArray[0]);

//for loops
/*for (let i = 0; i < ourArray.length; ++i) {
    console.log(ourArray[i]);
    // for(let j = 0; j < 10; ++j) {
    //     //nested loop
    //     console.log("j is equal to " + j);
    // }
}
// let i = 0;
// while (i < ourArray.length) {
//     console.log(ourArray[i]);
//     ++i;
// }*/

//while loops
let x = 0;
while (x < 10) {
    console.log("Ran");
    x++;
}
