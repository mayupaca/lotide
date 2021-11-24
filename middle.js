// const assertEqual = function (actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   } else if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };

const person = { firstName: "Khurram" };
const firstName = person["firstName"];
const firstNameAgain = person[firstName];
console.log(firstNameAgain);