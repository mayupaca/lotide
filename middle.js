// const eqArrays = function (array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// const assertArraysEqual = function (array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(array1)} === ${JSON.stringify(array2)}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(array1)} !== ${JSON.stringify(array2)}`);
//   }
// }
const assertArraysEqual = require("./assertArraysEqual");

function middle(numbers) {
  if (numbers.length < 3) {
    return []
  }
  const arrayLengthIsEven = numbers.length % 2 === 0
  const middleIndex = Math.floor(numbers.length / 2)
  if (arrayLengthIsEven) {
    return [numbers[middleIndex - 1], numbers[middleIndex]]
  }
  return [numbers[middleIndex]]
}

module.exports = middle;

// assertArraysEqual([], middle([1]))
// assertArraysEqual([], middle([1, 2])); // => []
// assertArraysEqual([2], middle([1, 2, 3])); // => [2]
// assertArraysEqual([3], middle([1, 2, 3, 4, 5])); // => [3]
// assertArraysEqual([2,3], middle([1, 2, 3, 4])); // => [2, 3]
// assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6])); // => [3, 4]