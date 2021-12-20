"use strict";
// Basics
let age = 22; // try to change type to string -> give error
let firstName = "Andrew"; // try to change type to number -> give error
let isCoupled = true;
let x = "Chocolate box";
// Array with a particular type: type + []
let array1 = [1, 2, 3, 4, 5];
// array1.push("Andrew") -> error
// Array with any types
let array2 = [1, true, "Andrew"];
// Tuple
let person = [22, "Andrew", true];
// Tuple Array
let employee = [
    [1, "Anderson"],
    [2, "Andrew"],
    [3, "Andrea"],
];
// Union
let uid;
uid = 22;
uid = "Olalala";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["up"] = 1] = "up";
    Direction2[Direction2["down"] = 2] = "down";
    Direction2[Direction2["left"] = 3] = "left";
    Direction2[Direction2["right"] = 4] = "right";
})(Direction2 || (Direction2 = {}));
var Direction3;
(function (Direction3) {
    Direction3["up"] = "up";
    Direction3["down"] = "down";
    Direction3["left"] = "left";
    Direction3["right"] = "right";
})(Direction3 || (Direction3 = {}));
console.log(Direction1.up); // 0
console.log(Direction2.up); // 1
console.log(Direction3.up); // up
// Objects with inline type declaration
const user1 = {
    id: 22,
    name: "John",
};
const user2 = {
    id: 22,
    name: "John",
};
// Types Assertion (kinda like casting)
let cid = 1;
// Way 1
let customerId = cid;
// Way 2
let studentId = cid;
// Functions
// 1/ without declaring types for params -> errors
// to disable that: to config file -> uncomment noImplicitAny: "true"
// 2/ Must also declare RETURN TYPE
function add(x, y) {
    return x + y;
}
// Void functions
function log(msg) {
    console.log(msg);
}
const user3 = {
    id: 22,
    name: "John",
};
const addFunc = (x, y) => x + y;
const subFunc = (x, y) => x - y;
// Classes
class Person {
    // constructor is a MUST
    constructor(id, name) {
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
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return 200; // if this were a String -> error
    }
}
class Employee extends Person2 {
    constructor(id, name, position) {
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
function generateArray1(items) {
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
function generateArray2(items) {
    return new Array().concat(items);
}
let numArr2 = generateArray2([1, 2, 3, 4]);
let strArr2 = generateArray2([
    "Andrew",
    "Anderson",
    "Sadio Mane",
    "Mohamed Salah",
]);
// numArr2.push("Nikola"); // will give error because of type 'number'
numArr2.push(6868); // no error because the input is of number type
console.log(numArr2);
