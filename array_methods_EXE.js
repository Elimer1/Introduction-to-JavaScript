//2
// const arr = ["hello", "world"];

// const upper = arr.map((str) => str.toUpperCase());
// console.log(upper);

//4
// const nums = [1, 2, 3, 4, 5, 6];

// const evenNums = nums.filter((num) => !(num % 2));

// console.log(evenNums);
//8
const prices = [50, 120, 80, 200, 150, 90];

const filterMap = prices
  .filter((price) => price > 100)
  .map((price) => Math.round(price * 1.1));

console.log(filterMap);
