//2
// const arr = ["hello", "world"];

// const upper = arr.map((str) => str.toUpperCase());
// console.log(upper);

//4
// const nums = [1, 2, 3, 4, 5, 6];

// const evenNums = nums.filter((num) => !(num % 2));

// console.log(evenNums);

//8
// const prices = [50, 120, 80, 200, 150, 90];

// const filterMap = prices
//   .filter((price) => price > 100)
//   .map((price) => Math.round(price * 1.1));

// console.log(filterMap);

//10
// const nums = [1, 2, 3, 4];

// const listProduct = nums.reduce((acc, curr) => acc * curr);

// console.log(listProduct);

//12
// const users = [
//   { name: "Avi", age: 20 },
//   { name: "Dana", age: 30 },
//   { name: "Yossi", age: 40 },
// ];

// const average = users.reduce((acc, curr) => acc + curr.age, 0) / users.length;
// console.log(average);

//25
const numbers = [5, 2, 8, 1, 4];

const sorted = numbers.sort((a, b) => b - a);
console.log(sorted);
