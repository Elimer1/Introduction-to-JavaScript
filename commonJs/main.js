const { add } = require("./math.js");
const { greeting } = require("./greet.js");
const { user } = require("./user.js");
const { add: add2, mult } = require("./operations.js");
const { addition, subtraction, multiplication } = require("./utils.js");
const { isEven } = require("./checkNumber.js");
const User = require("./newUser.js");
const numbers = require("./numbers.js");
const config = require("./config.js");
const getRandom = require("./random.js");
const squareSum = require("./advancedMath.js");
const { info, error } = require("./logger.js");

console.log(greeting("eli"));
console.log(user);
console.log(add2(5, 8), mult(7, 5));
console.log(subtraction(8, 4));
console.log(isEven(5));
console.log(isEven(63));
console.log(isEven(6));
console.log(isEven(23));

const user1 = new User("eli");

console.log(numbers.reduce((acc, curr) => acc + curr));
console.log(config.dbName, config.port, config.theme);
console.log(getRandom());
console.log(squareSum(5, 7));
info("system started successfully");
error("failed to connect to database");
