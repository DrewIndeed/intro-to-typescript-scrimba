"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloak = void 0;
class Cloak {
    useArmor() {
        return "Super Cloak";
    }
    useArmorWithWeapon(weapon) {
        return `Super Cloak with ${weapon.useWeapon()}`;
    }
}
exports.Cloak = Cloak;
