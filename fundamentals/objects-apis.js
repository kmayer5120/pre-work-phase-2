/*
 * Objects, Interfaces, and APIs
 */
//Video: Object Oriented & APIs (https://www.youtube.com/watch?v=7AMKg_kWI9g&ab_channel=DeepDiveCodingBootcamp)

//Simple example object with a function
// let dog = {
//     name: "Steve",
//     color: "brown",
//     breed: "Pug",
//     size: "Small",
//     bark: function (typeOfBark) {
//         console.log("bark bark");
//     },
// };
//
// dog.bark();

//Passing by value and by ref

//pass by value
// function x(y) {
//     y = y + 5;
//     console.log(y)
// }

// let y = 5;
// x(y); //prints 10
// console.log(y); //prints 5

//pass by ref
function x(y) {
    y.num = y.num + 5;
    console.log(y)
}
let y = {
    name: "Tom",
    num: 10,
}

//passing by reference here
x(y); //prints {name: "Tom", num: 15}
console.log(y); //prints the same as before because pass by ref -- same as other languages -- objects are ref types