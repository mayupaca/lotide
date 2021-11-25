const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  const returnedObject = {}
  for (let item of allItems) {
    if (!itemsToCount[item]) {
      continue
    }
    if (returnedObject[item] === undefined) {
      returnedObject[item] = 0
    }
    returnedObject[item] += 1
  }
  return returnedObject;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames,
  { "Jason": true, 
    "Karima": true,
    "Fang": true,
    "Agouhanna": false
  });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);