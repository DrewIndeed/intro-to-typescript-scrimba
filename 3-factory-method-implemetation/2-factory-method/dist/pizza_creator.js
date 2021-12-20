"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaCreator = void 0;
const creator_1 = require("./creator");
const pizza_model_1 = require("./pizza.model");
class PizzaCreator extends creator_1.Creator {
    factoryMethod() {
        return new pizza_model_1.Pizza();
    }
}
exports.PizzaCreator = PizzaCreator;
