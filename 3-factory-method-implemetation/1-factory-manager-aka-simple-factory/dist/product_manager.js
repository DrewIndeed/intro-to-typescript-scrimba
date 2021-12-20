"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
const burger_model_1 = require("./burger.model");
const kebab_model_1 = require("./kebab.model");
const pizza_model_1 = require("./pizza.model");
const product_type_enum_1 = require("./product_type.enum");
class ProductManager {
    constructor() { }
    createProduct(type) {
        switch (type) {
            case product_type_enum_1.PRODUCT_TYPE.PIZZA:
                return new pizza_model_1.Pizza();
            case product_type_enum_1.PRODUCT_TYPE.KEBAB:
                return new kebab_model_1.Kebab();
            case product_type_enum_1.PRODUCT_TYPE.BURGER:
                return new burger_model_1.Burger();
            default:
                throw new Error("Error: Product invalid!");
        }
    }
}
exports.ProductManager = ProductManager;
