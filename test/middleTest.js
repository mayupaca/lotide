const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns undefined", () => {
    assert.deepEqual(middle([]), [1]);
  });
  it("returns []", () => {
    assert.deepEqual(middle([]), [1, 2]);
  });
  it("returns [2]", () => {
    assert.deepEqual(middle([2]), [1, 2, 3]);
  });
  it("returns [2, 3]", () => {
    assert.deepEqual(middle([2, 3]), [1, 2, 3, 4]);
  });
});

assertArraysEqual([], middle([1]));
assertArraysEqual([], middle([1, 2])); // => []
assertArraysEqual([2], middle([1, 2, 3])); // => [2]
assertArraysEqual([3], middle([1, 2, 3, 4, 5])); // => [3]
assertArraysEqual([2, 3], middle([1, 2, 3, 4])); // => [2, 3]
assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
