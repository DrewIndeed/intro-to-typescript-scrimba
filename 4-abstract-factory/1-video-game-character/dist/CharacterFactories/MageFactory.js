"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MageFactory = void 0;
const Cloak_1 = require("../CharacterResources/ResourceVariants/Armors/Cloak");
const MageFireball_1 = require("../CharacterResources/ResourceVariants/Weapons/MageFireball");
class MageFactory {
    createWeapon() {
        return new MageFireball_1.MageFireball();
    }
    createArmor() {
        return new Cloak_1.Cloak();
    }
}
exports.MageFactory = MageFactory;
