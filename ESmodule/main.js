import { sum, subtract } from "./math.js";
import { greet } from "./greet.js";
import { PI } from "./constants.js";
import mult from "./multiply.js";
import { isEven } from "./operations.js";
import user from "./user.js";
import { Car } from "./car.js";
import discount, { ID } from "./mixed.js";

console.log(sum(8, 27), subtract(19, 4));
console.log(greet("eli"));
console.log(PI);
console.log(mult(8, 4));
console.log(isEven(7));
console.log(user.name);
const c1 = new Car("toyota", "corrola");
console.log(c1);
