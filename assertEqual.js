// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 2);
assertEqual(5, 5);