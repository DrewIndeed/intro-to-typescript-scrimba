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

// Interfaces
interface UserInterface {
  id: number;
  name: string;
}

const user3: UserInterface = {
  id: 22,
  name: "John",
};

// Interface functions
interface MathFunc {
  (x: number, y: number): number;
}
const addFunc = (x: number, y: number): number => x + y;
const subFunc = (x: number, y: number): number => x - y;

// Classes
class Person {
  id: number;
  name: string;

  // constructor is a MUST
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // another method
  register() {
    return `${this.name} has registered`;
  }
}
// class usage
let john = new Person(1, "John");
let bob = new Person(2, "Bob");
console.log(john, bob);
console.log(john.register());

// Classes with interface implementation
interface PersonInteface {
  id: number;
  name: string;
  register(): number;
}

class Person2 implements PersonInteface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return 200; // if this were a String -> error
  }
}

class Employee extends Person2 {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
// usage
const emp1 = new Employee(3, "Anderson", "Developer");
console.log(emp1.name);
console.log(emp1.position);
console.log(emp1.register());

// Generics
// Without generics
function generateArray1(items: any[]): any[] {
  return new Array().concat(items);
}
// usage
let numArr1 = generateArray1([1, 2, 3, 4]);
let strArr1 = generateArray1([
  "Andrew",
  "Anderson",
  "Sadio Mane",
  "Mohamed Salah",
]);
numArr1.push("Nikola"); // no error because of type 'any'
console.log(numArr1);

// With generics
function generateArray2<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArr2 = generateArray2<number>([1, 2, 3, 4]);
let strArr2 = generateArray2<string>([
  "Andrew",
  "Anderson",
  "Sadio Mane",
  "Mohamed Salah",
]);
// numArr2.push("Nikola"); // will give error because of type 'number'
numArr2.push(6868); // no error because the input is of number type
console.log(numArr2);