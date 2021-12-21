"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcArmor = void 0;
class OrcArmor {
    useArmor() {
        return "Super Orc Armor";
    }
    useArmorWithWeapon(weapon) {
        return `Super Orc Armor with ${weapon.useWeapon()}`;
    }
}
exports.OrcArmor = OrcArmor;
