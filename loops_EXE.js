// //1
// let nums = "";
// for (let i = 1; i <= 10; i++) {
//   nums += i + " ";
// }
// console.log(nums);

// //2
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// //3
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (const num of numbers) {
//   sum += num;
// }
// console.log(sum);

// //4
// const names = ["Ron", "Michal", "Yossi", "Dana"];

// for (const name of names) {
//   console.log(name);
// }

// //5
// const numbers = [2, 5, 8, 11, 14, 17, 20];

// for (const num of numbers) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

// //6
// const numbers = [3, 99, 12, 45, 78];

// let max = numbers[1];

// for (const num of numbers.slice(1)) {
//   if (num > max) {
//     max = num;
//   }
// }
// console.log(`The biggest number in the list is ${max}`);

// //7
// const word = "javascript";

// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

// //8
// const numbers = [1, 2, 3, 4];

// for (const num of numbers) {
//   console.log(num * 2);
// }

// //9
// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// //10
// import input from "analiza-sync";

// let userInput = "";

// while (userInput != "stop") {
//   userInput = input("enter stop to end ");
// }

// //11
// let sum = 0;
// let num = undefined;

// while (num !== 0) {
//   num = Number(input("enter a number . press 0 to exit "));
//   sum += num;
// }
// console.log(sum);

// //12
// const password = "1234";
// let guess = undefined;

// while (guess !== "1234") {
//   guess = input("Enter password");
// }

// //13
// const numbers = [2, 4, 6, 8, 10];
// const target = 8;

// let i = 0;
// while (i < numbers.length) {
//   if (numbers[i] === target) {
//     console.log("Found");
//     break;
//   }
//   i++;
// }

// //14
// let row = "";

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     row += i * j + " ";
//   }
//   console.log(row);
//   row = "";
// }

// //15
// for (let i = 0; i <= 4; i++) {
//   console.log("* ".repeat(i));
// }

//16
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let line = "";
for (const row of matrix) {
  for (const num of row) {
    line += num + " ";
  }
  console.log(line);
  line = "";
}
