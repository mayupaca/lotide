// const tail = require("../tail");
// const assertEqual = require("../assertEqual");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const newArray = tail(words);
// assertEqual(newArray.length, 3);

const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), (["Lighthouse", "Labs"]));
  });
  it("returns [4, 7, 1] for [3, 4, 7, 1]", () => {
    assert.deepEqual(tail([3, 4, 7, 1]), [4, 7, 1]);
  });
});