// Basics
var age = 22; // try to change type to string -> give error
var firstName = "Andrew"; // try to change type to number -> give error
var isCoupled = true;
var x = "Chocolate box";
// Array with a particular type: type + []
var array1 = [1, 2, 3, 4, 5];
// array1.push("Andrew") -> error
// Array with any types
var array2 = [1, true, "Andrew"];
// Tuple
var person = [22, "Andrew", true];
// Tuple Array
var employee = [
    [1, "Anderson"],
    [2, "Andrew"],
    [3, "Andrea"],
];
// Union
var uid;
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
var user1 = {
    id: 22,
    name: "John"
};
var user2 = {
    id: 22,
    name: "John"
};
// Types Assertion (kinda like casting)
var cid = 1;
// Way 1
var customerId = cid;
// Way 2
var studentId = cid;
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
var user3 = {
    id: 22,
    name: "John"
};
var addFunc = function (x, y) { return x + y; };
var subFunc = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    // constructor is a MUST
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    // another method
    Person.prototype.register = function () {
        return "".concat(this.name, " has registered");
    };
    return Person;
}());
// class usage
var john = new Person(1, "John");
var bob = new Person(2, "Bob");
console.log(john, bob);
console.log(john.register());
