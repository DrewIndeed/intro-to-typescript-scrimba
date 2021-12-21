"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteFactory1 = void 0;
const ProductVariantA1_1 = require("./ProductVariantA1");
const ProductVariantB1_1 = require("./ProductVariantB1");
class ConcreteFactory1 {
    createProductA() {
        return new ProductVariantA1_1.ProductVariantA1();
    }
    createProductB() {
        return new ProductVariantB1_1.ProductVariantB1();
    }
}
exports.ConcreteFactory1 = ConcreteFactory1;
