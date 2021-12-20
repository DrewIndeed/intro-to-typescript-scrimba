"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurgerCreator = void 0;
const burger_model_1 = require("./burger.model");
const creator_1 = require("./creator");
class BurgerCreator extends creator_1.Creator {
    factoryMethod() {
        return new burger_model_1.Burger();
    }
}
exports.BurgerCreator = BurgerCreator;
