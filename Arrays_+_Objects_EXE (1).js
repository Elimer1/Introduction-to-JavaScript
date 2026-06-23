//1
// const numbers = [1, 2, 3];
// console.log(numbers);

//2
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0], fruits[fruits.length - 1]);

//3
// fruits[1] = "mango";
// console.log(fruits);

//4
// fruits.push("orange");

//5
// fruits.pop();

//6
// fruits.unshift("kiwi");

//7
// fruits.shift();

//8
// const arr = ["a", "b", "c", "d"];

// arr.splice(1, 1);
// console.log(arr);

//9
// const arr = ["a", "b", "c", "d"];

// arr.splice(1, 0, "X");

// console.log(arr);

//10
// const arr = ["a", "b", "c", "d"];

// arr.splice(2, 1, "Y");
// console.log(arr);

//11
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

//12
// for (const element of arr) {
//   console.log(element);
// }

//13
// for (i = 0; nums.length; i++) console.log(nums[i]);

//14
// let sum = 0;
// for (const num of nums) {
//   sum += num;
// }
// console.log(sum);

//15
// for (const num of arr) {
//   if (num > 5) {
//     console.log(num);
//   }
// }

//16
// const user = {
//   name: "eli",
//   age: 26,
// };
// console.log(user);

//17
const person = {
  name: "Dan",
  age: 25,
};

// console.log(person.name, person.age);
// console.log(person["name"], person["age"]);

//18
person["city"] = "jerusalem";
person["name"] = "abraham";

//19
// delete person.age;

// console.log("age" in person);

//20
// const student = {
//   name: "Yael",
//   grades: [90, 80, 100],
// };

// console.log(student.grades[0]);
// student.grades.push(5);
// student.grades.pop();
// console.log(student.grades);

//21
// const product = {
//   name: "Laptop",
//   price: 3500,
//   inStock: true,
// };

// for (const [key, values] of Object.entries(product)) {
//   console.log(`${key}: ${product[key]}`);
// }

//22
// const user = {
//   username: "admin",
//   role: "manager",
//   active: true,
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));

// for (const key of Object.keys(user)) {
//   console.log(`${key} = ${user[key]}`);
// }

//23
const order = {
  id: 101,
  customer: {
    name: "Roi",
    address: {
      city: "Tel Aviv",
      zip: "12345",
    },
  },
};

console.log(order.customer.address.city);
order.customer.address.zip = "10002";
order.customer.phone = "123456789";
console.log(order.customer);

delete order.customer.address.city;
