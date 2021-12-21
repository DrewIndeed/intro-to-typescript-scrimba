"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteFactory2 = void 0;
const ProductVariantA2_1 = require("./ProductVariantA2");
const ProductVariantB2_1 = require("./ProductVariantB2");
class ConcreteFactory2 {
    createProductA() {
        return new ProductVariantA2_1.ProductVariantA2();
    }
    createProductB() {
        return new ProductVariantB2_1.ProductVariantB2();
    }
}
exports.ConcreteFactory2 = ConcreteFactory2;
