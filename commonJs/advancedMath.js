const { add } = require("./math");

const squareSum = (num1, num2) => add(num1, num2) ** 2;

module.exports = squareSum;
