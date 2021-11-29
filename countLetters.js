// const assertEqual = function (actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   } else if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };

const countLetters = function (letters) {
  let object = {}
  for (const letter of letters) {
    if (letter !== " ") {
      if (object[letter] === undefined) {
        object[letter] = 1;
      } else {
        object[letter] += 1;
      }
    }
  }
 return object;
}

// assertEqual(countLetters('LHL'), {L: 2, H: 1});


