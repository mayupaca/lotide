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

// Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"]; // no need to capture the return value since we are not checking it
// assertEqual(tail(words), ["Lighthouse", "Labs"]); // original array should still have 3 elements!
const words = ["Yo Yo", "Lighthouse", "Labs"];
const newArray = tail(words);
assertEqual(newArray.length, 3);