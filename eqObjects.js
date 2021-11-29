// const assertArraysEqual = function (array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//   }
// };



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
// };

const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  let object1KeysArr = Object.keys(object1);
  let object2KeysArr = Object.keys(object2);
  if (object1KeysArr.length !== object2KeysArr.length) {
    return false;
  }
  for (let key of object1KeysArr) {
    let twoValuesAreSame;
    if (Array.isArray(object1[key])) {
      twoValuesAreSame = eqArrays(object1[key], object2[key]);
    } else if (typeof object1[key] === "object") {
      twoValuesAreSame = eqObjects(object1[key], object2[key]);
    } else {
      twoValuesAreSame = object1[key] === object2[key];
    }
    if (!twoValuesAreSame) {
      return false;
    }
  }
  return true;
};

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertArraysEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertArraysEqual(eqObjects(cd, cd2), false); // => false
