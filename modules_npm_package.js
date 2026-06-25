//1
//1 common
//2 es
//3 es
//4 common

//2
//1 import { add } from "./math.js";
//2{
//   "name": "my-app",
//   "type": "module"
// }
//3 import fs from "fs";
// import path from "path";

//3
// {
//     "version": "1.0.0",
//     "type": "module",
//     "scripts": {
//         "dev":"nodemon"
//     },
//     "devDependencies":{
//         "nodemon": "*"
//     },
//     "dependencies":{
//         "express": "*"
//     }
// }

//4
// eslint - dev;
// nodemon - dev;
// express - dep;
// mongoose - dep;
// jest - dev;

//5
// 5 is major 18 is minor and 3 is patch

//6
//1 only 4 cant change
//2 only 2 can change
//3 cant update at all
//4 install latest version

//7
//1 false
//2 true
//3 true
//4 false

//8
//1 only when it is called to be used
//2 because we might not want to load evrything in a big project at once
//3 the things that do load immediately will be quicker

//9
// require vs import
// module.export vs export
// sync vs async
// no vs yes

//10
// esmodules- its cleaner and easier and seems to have mostly upside

//11
// package.json;
// package-lock.json;
// download npm Files
// node modules
// locking versions

//12
// line 1 is using esm and line 2 is using common

//13
// math.js;

// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

// logger.js;
// export const log = (message) => console.log(`[message] ${message}`);

// app.js;
// import { add, subtract } from "./math.js";
// import { log } from "./logger.js";

// console.log(add(5, 6));
// console.log(subtract(8, 3));
// log("Hello World");

//14
//1 organzation, seperation of data, and reusability
//2 they load in order and wont be familiar with any other stuff that havent been loaded yet
//3 dev is for developer testing and reg is for the build of the final product as well
//4 if two people run npm install they likely end up with different version if not for lock making sure that they cant
//5 is it forbiden?  we dont want to becasue it isnt unique to ones specific code and really big

//15
//1 the esmodule exports and imports wont work and will throw an error when we try using it
//syntax for the export import mismatch and module error for lack of suffix
//2 make sure it has suffix and write .mjs for esm style import/export
//3 switch it all to esm
