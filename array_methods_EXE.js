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
// const numbers = [5, 2, 8, 1, 4];

// const sorted = numbers.sort((a, b) => b - a);
// console.log(sorted);

//29
// const items = ["apple", "banana", "cherry", "date", "elderberry"];

// items.splice(1, 2);
// console.log(items);

//32
// const nestedArray = [1, 2, [3, 4], 5, [6, 7]];
// const flatOne = nestedArray.flat();

// console.log(flatOne);

//36
// const numbers = [1, 2, 3, 4, 5, 6];
// const calcChain = numbers
//   .filter((num) => !(num % 2))
//   .map((num) => num * 2)
//   .reduce((acc, curr) => acc + curr);

// console.log(calcChain);

//38
// const items = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }];

// const groupBy = items.reduce((acc, curr) => {
//   const key = curr.type;

//   if (!acc[key]) acc[key] = [];
//   acc[key].push(curr);
//   return acc;
// }, {});

// console.log(groupBy);

//39
// const nums = [1, 2, 3];

// const hasDuplicates = nums.some(
//   (element, index, array) => index !== array.indexOf(element),
// );
// console.log(hasDuplicates);

//41
// const products = [
//   { name: "Laptop", price: 800, inStock: true, category: "tech" },
//   { name: "Phone", price: 400, inStock: false, category: "tech" },
//   { name: "Shirt", price: 50, inStock: true, category: "fashion" },
// ];

// const finalProduct = products
//   .filter((product) => product.inStock === true)
//   .filter((product) => product.price > 100)
//   .sort((a, b) => a.price - b.price)
//   .map((product) => product.name)
//   .join(" ");

// console.log(finalProduct);
