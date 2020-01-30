const os = require("os");
const greeting = require("./greeting")
const User = require("./User")

let userName = os.userInfo().username;
console.log(`Дата запроса : ${greeting.date}`);
console.log(greeting.getMessage(userName))
const User = require("./User")
let Ivan = new User("Ivan", 19)
Ivan.sayHi();