"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteCreator2 = void 0;
const concrete_product_2_1 = require("./concrete_product_2");
const creator_1 = require("./creator");
class ConcreteCreator2 extends creator_1.Creator {
    factoryMethod() {
        return new concrete_product_2_1.ConcreteProduct2();
    }
}
exports.ConcreteCreator2 = ConcreteCreator2;
