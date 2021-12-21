"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyArmor = void 0;
class BodyArmor {
    useArmor() {
        return "Super Body Armor";
    }
    useArmorWithWeapon(weapon) {
        return `Super Bodu Armor with ${weapon.useWeapon()}`;
    }
}
exports.BodyArmor = BodyArmor;
