"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcFactory = void 0;
const OrcArmor_1 = require("../CharacterResources/ResourceVariants/Armors/OrcArmor");
const Axe_1 = require("../CharacterResources/ResourceVariants/Weapons/Axe");
class OrcFactory {
    createWeapon() {
        return new Axe_1.Axe();
    }
    createArmor() {
        return new OrcArmor_1.OrcArmor();
    }
}
exports.OrcFactory = OrcFactory;
