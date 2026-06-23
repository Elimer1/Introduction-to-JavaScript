// //1
// const age = 20;

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// //2
// const number = 7;

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// //3
// const isLoggedIn = true;

// if (isLoggedIn) {
//   console.log("welcome");
// } else {
//   console.log("Please log in");
// }

// //4
// const num = -5;
// if (!num) {
//   console.log("zero");
// } else if (num > 0) {
//   console.log("positive");
// } else {
//   console.log("negative");
// }

// //5
// const a = 10;
// const b = 20;

// if (a === b) {
//   console.log("equal");
// } else if (a > b) {
//   console.log("a is bigger");
// } else {
//   console.log("b is bigger");
// }

// //6
// const password = "1234";

// if (password === "1234") {
//   console.log("access granted");
// } else {
//   console.log("incorrect password");
// }

//7
// const x = 15;
// if (x >= 10 && x <= 20) {
//   console.log("in range");
// } else {
//   console.log("out of range");
// }

// //8
// const grade = 63;

// if (grade >= 90) {
//   console.log("Excellent");
// } else if (grade >= 75) {
//   console.log("Good");
// } else if (grade >= 60) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// //9
// const temp = 28;

// if (temp > 30) {
//   console.log("Very hot, drink water");
// } else if (temp >= 20) {
//   console.log("pleasant outside");
// } else {
//   console.log("Cold, take a jacket");
// }

// //10
// const age = 20;
// const hasID = true;

// if (age >= 18 && hasID) {
//   console.log("access granted");
// } else {
//   console.log("access deneid");
// }

// //11
// const isAdmin = false;
// const isManager = true;

// if (isAdmin || isManager) {
//   console.log("access granted");
// } else {
//   console.log("access denied");
// }

// //12
// const hasCard = false;

// console.log(!hasCard ? "access denied" : "access granted");

// //13
// const day = "Saturday";

// console.log(day === "Saturday" || day === "Sunday" ? "Weekend!" : "Weekday");

// //14
// const name = "";

// console.log(!name ? "Guest" : name);

//15
// const arr = [];

// console.log(arr.length ? "Not empty" : "Empty");

// //16
// const x = "5";
// const y = 5;

// console.log(x == y);
// console.log(x === y);

// //17
// const value = "Hello";

// console.log(` value is of type ${typeof value}`);

//18
// const dayNum = 3;

// switch (dayNum) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invlaid day number");
//     break;
// }

// //19
// const score = 85;

// console.log(score >= 90 ? "Pizza" : score >= 70 ? "Burger" : "Salad");

// switch (true) {
//   case score >= 90:
//     console.log("Pizza");
//     break;
//   case score >= 70:
//     console.log("Burger");
//     break;
//   default:
//     console.log("Salad");
// }

//20
//will print default as well with  no break

//21
const userInput = "";

if (!userInput) {
  console.log("Input cannot be empty");
} else {
  console.log("Input accepted");
}

//22
//var will be 10 let will throw a refrence error

//23
//reference error

// //24
// const username = "Coder123";

// if (username) {
//   console.log("Welcome back");
// } else {
//   console.log("Please provide a username");
// }

// //25
// const points = 0;

// if (points) {
//   console.log("You have pointa!");
// } else {
//   console.log("No points yet");
// }

//26
// const hasTicket = true;
// const hasId = false;

// if (hasTicket && hasId) {
//   console.log("Welcome to the show");
// } else {
//   console.log(
//     !hasId && !hasTicket
//       ? "Missing ID and ticket"
//       : !hasId
//         ? "Missing ID"
//         : "Missing ticket",
//   );
// }

// //27
// const hasCash = false;
// const hasCard = true;

// if (hasCard || hasCash) {
//   console.log("Payment accepted");
// } else {
//   console.log("Insolvent");
// }

// //28
// const isRaining = false;

// if (!isRaining) {
//   console.log("Lets go for a walk");
// } else {
//   console.log("stay indoors");
// }

// //29
// const age = 22;
// const hasTicket = true;
// const isVIP = false;

// if ((age >= 18 && hasTicket) || isVIP) {
//   console.log("Welcome");
// } else {
//   console.log("access denied");
// }

//30
