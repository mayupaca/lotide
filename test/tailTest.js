const tail = require("../tail");
const assertEqual = require("../assertEqual");

const words = ["Yo Yo", "Lighthouse", "Labs"];
const newArray = tail(words);
assertEqual(newArray.length, 3);
