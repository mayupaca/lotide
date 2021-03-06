// const eqArrays = function (array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// const assertArraysEqual = function (array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//   }
// }

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === " ") {
      continue;
    }
    if (results[letter] === undefined) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;

// assertArraysEqual(letterPositions("hello").e, [1]);