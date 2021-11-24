const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function (newArray) {
  return newArray.slice(1);
}


const words = ["Yo Yo", "Lighthouse", "Labs"];
const newArray = tail(words);
assertEqual(newArray.length, 3);