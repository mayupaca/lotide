// const assertEqual = function (actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   } else if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

const head = function (items) {
  return items[0];
};

module.exports = head;

// assertEqual(head([8, 6, 7]), 7);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

