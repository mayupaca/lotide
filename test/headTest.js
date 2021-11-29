const head = require("../head");
const assertEqual = require("../assertEqual");

assertEqual(head([8, 6, 7]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
