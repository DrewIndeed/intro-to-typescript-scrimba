// Basics
let age: number = 22; // try to change type to string -> give error
let firstName: string = "Andrew"; // try to change type to number -> give error
let isCoupled: boolean = true;
let x: any = "Chocolate box";

// Array with a particular type: type + []
let array1: number[] = [1, 2, 3, 4, 5];
// array1.push("Andrew") -> error

// Array with any types
let array2: any = [1, true, "Andrew"];

// Tuple
let person: [number, string, boolean] = [22, "Andrew", true];

// Tuple Array
let employee: [number, string][] = [
  [1, "Anderson"],
  [2, "Andrew"],
  [3, "Andrea"],
];

// Union
let uid: string | number;
uid = 22;
uid = "Olalala";

// Enum
enum Direction1 {
  up, // 0
  down, // 1
  left, // 2
  right, // 3
}

enum Direction2 {
  up = 1, // 1
  down, // 2
  left, // 3
  right, // 4
}

enum Direction3 {
  up = "up", // up
  down = "down", // down
  left = "left", // left
  right = "right", // right
}

console.log(Direction1.up); // 0
console.log(Direction2.up); // 1
console.log(Direction3.up); // up

// Objects with inline type declaration
const user1: {
  id: number;
  name: string;
} = {
  id: 22,
  name: "John",
};

// Objects with separated type declaration
type User2 = {
  id: number;
  name: string;
};

const user2: User2 = {
  id: 22,
  name: "John",
};

// Types Assertion (kinda like casting)
let cid: any = 1;
// Way 1
let customerId = <number>cid;
// Way 2
let studentId = cid as number;

// Functions
// 1/ without declaring types for params -> errors
// to disable that: to config file -> uncomment noImplicitAny: "true"
// 2/ Must also declare RETURN TYPE
function add(x: number, y: number): number {
  return x + y;
}

// Void functions
function log(msg: string | number) {
  console.log(msg);
}
