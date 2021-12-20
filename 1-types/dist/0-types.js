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
