const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(
        expected
      )}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(
        expected
      )}`
    );
  }
  console.log(`Example label: ${inspect(actual)}`);
};

const eqObjects = function (object1, object2) {
  let object1KeysArr = Object.keys(object1);
  let object2KeysArr = Object.keys(object2);
  if (object1KeysArr.length !== object2KeysArr.length) {
    return false;
  }
  for (let key of object1KeysArr) {
    let twoValuesAreSame;
    if (typeof object1[key] === "object") {
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

assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" });
