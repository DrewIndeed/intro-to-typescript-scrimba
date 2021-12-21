"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarriorFactory = void 0;
const Sword_1 = require("../CharacterResources/ResourceVariants/Weapons/Sword");
const BodyArmor_1 = require("../CharacterResources/ResourceVariants/Armors/BodyArmor");
class WarriorFactory {
    createWeapon() {
        return new Sword_1.Sword();
    }
    createArmor() {
        return new BodyArmor_1.BodyArmor();
    }
}
exports.WarriorFactory = WarriorFactory;
