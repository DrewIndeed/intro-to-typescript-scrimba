"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KebabCreator = void 0;
const creator_1 = require("./creator");
const kebab_model_1 = require("./kebab.model");
class KebabCreator extends creator_1.Creator {
    factoryMethod() {
        return new kebab_model_1.Kebab();
    }
}
exports.KebabCreator = KebabCreator;
