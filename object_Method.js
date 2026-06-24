const user = {
  id: 101,
  username: "alice_dev",
  email: "alice@example.com",
  isAdmin: true,
};

//1
// const getKeys = (obj) => Object.keys(obj);
// console.log(getKeys(user));

//2
// const getValues = (obj) => Object.values(obj);
// console.log(getValues(user));

//3
// Object.entries(user).forEach(([key, value]) => console.log(`${key}: ${value}`));

//4
// const grades = { math: 80, english: 90, science: 70 };

// const average = (obj) => {
//   const valueArr = Object.values(obj);
//   const sum = valueArr.reduce((acc, curr) => acc + curr);
//   return sum / valueArr.length;
// };

// console.log(average(grades));

//5
// const obj1 = { name: "Alice", age: 25 };
// const obj2 = { city: "Jerusalem", job: "Developer" };

// console.log(Object.assign({}, obj1, obj2));

//6
// const defaults = { theme: "light", lang: "en" };
// const userSettings = { lang: "he" };

// const userObj = (defaults, change) => Object.assign({}, defaults, change);

// console.log(userObj(defaults, userSettings));

//7
// const hasKey = (obj, key) => Object.hasOwn(obj, key);

//8
// const config = { permanent: "test" };
// Object.freeze(config);
// config.name = "eli";

//9
// const lstObject = [
//   ["name", "Alice"],
//   ["age", 25],
// ];

// const obj = Object.fromEntries(lstObject);

// console.log(obj);

//10
// const prices = { apple: 10, banana: 5, mango: 20 };

// const final = Object.fromEntries(
//   Object.entries(prices).map(([key, value]) => [key, value * 0.9]),
// );
// console.log(final);

//11
// const mixedData = {
//   apple: 10,
//   name: "Alice",
//   banana: 5,
//   isAvailable: true,
//   mango: 20,
//   city: "Jerusalem",
// };

// const filteredData = (obj) =>
//   Object.fromEntries(
//     Object.entries(obj).filter(([key, value]) => typeof value === "number"),
//   );

// console.log(filteredData(mixedData));

// //12
// const shallowCopy = (obj) => Object.assign({}, obj);

//13
// const identicalKeys = (obj1, obj2) => {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length === keys2.length) {
//     return keys1.every((key) => Object.hasOwn(obj2, key));
//   }
//   return false;
// };
