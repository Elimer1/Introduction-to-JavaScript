//1
const greeting = (name) => `Hello ${name}`;

//2
const addNums = (num1, num2) => num1 + num2;

//3
const isEven = (num) => num % 2 === 0;

//4
const firstElemeent = (arr) => arr[0];

//5
const capital = (str) => str.toUpperCase();

//6
//   10   5

//7
//if you dont declare the variable with type itll become global

//8
//itll print one because the fucntion was defined when x was 1

//9

// if (true) temp = 1;
// console.log(temp);

//10
let count = 0;

function add(count) {
  return ++count;
}

//11
adder = (arr) => {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
};

//12
squared = (num) => num * num;

add_squares = (num1, num2) => squared(num1) + squared(num2);

//13
getEvens = (arr) => {
  let evens = [];
  for (const num of arr) {
    if (!(num % 2)) evens.push(num);
  }
  return evens;
};
