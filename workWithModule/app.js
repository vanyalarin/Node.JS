var greeting1 = require("./greeting");
console.log(`Hello ${greeting1.name}`);
var greeting2 = require("./greeting");
greeting2.name = "Bob";
console.log(`Hello ${greeting2.name}`);
console.log(`Hello ${greeting1.name}`);