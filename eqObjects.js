const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const eqObjects = function (object1, object2) {
  let object1WithKeys = Object.keys(object1);
  let object2WithKeys = Object.keys(object2);
  if (object1WithKeys.length !== object2WithKeys.length) { // check ofject length
    return false;
  }
  for (let key of object1) {
    if (object1WithKeys[key] !== object2WithKeys[key]) {
      return false;
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false