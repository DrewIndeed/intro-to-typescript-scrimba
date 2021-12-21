"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConcreteFactory1_1 = require("./ConcreteFactory1");
const ConcreteFactory2_1 = require("./ConcreteFactory2");
function clientCode(factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productA.FamilyFunctionA());
    console.log(productB.FamilyFunctionB());
}
console.log("Client: Testing client code with ConcreteFactory1");
clientCode(new ConcreteFactory1_1.ConcreteFactory1());
console.log("----------------");
console.log("Client: Testing the same client code with ConcreteFactory2");
clientCode(new ConcreteFactory2_1.ConcreteFactory2());
