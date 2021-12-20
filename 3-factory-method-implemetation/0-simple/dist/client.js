"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const concrete_creator_1_1 = require("./concrete_creator_1");
const concrete_creator_2_1 = require("./concrete_creator_2");
function client(creator) {
    console.log(`Client: I'm not aware of the creator's class`);
    console.log(creator.operation());
}
const concreteCreator1 = new concrete_creator_1_1.ConcreteCreator1();
const concreteCreator2 = new concrete_creator_2_1.ConcreteCreator2();
client(concreteCreator1);
console.log("----------");
client(concreteCreator2);
