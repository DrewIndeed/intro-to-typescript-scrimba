"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteCreator1 = void 0;
const concrete_product_1_1 = require("./concrete_product_1");
const creator_1 = require("./creator");
class ConcreteCreator1 extends creator_1.Creator {
    factoryMethod() {
        return new concrete_product_1_1.ConcreteProduct1();
    }
}
exports.ConcreteCreator1 = ConcreteCreator1;
