"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creator = void 0;
class Creator {
    operation() {
        const product = this.factoryMethod();
        return `Creator: ${product.operation()}`;
    }
}
exports.Creator = Creator;
