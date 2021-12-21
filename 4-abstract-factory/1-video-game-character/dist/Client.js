"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WarriorFactory_1 = require("./CharacterFactories/WarriorFactory");
const OrcFactory_1 = require("./CharacterFactories/OrcFactory");
const MageFactory_1 = require("./CharacterFactories/MageFactory");
function clientCode(mainFactory) {
    const characterWeapon = mainFactory.createWeapon();
    const characterArmor = mainFactory.createArmor();
    console.log(characterWeapon.useWeapon());
    console.log(characterArmor.useArmor());
    console.log(characterArmor.useArmorWithWeapon(characterWeapon));
}
console.log("Client: Testing client code with WarriorFactory");
clientCode(new WarriorFactory_1.WarriorFactory());
console.log("----------------");
console.log("Client: Testing the same client code with OrcFactory");
clientCode(new OrcFactory_1.OrcFactory());
console.log("----------------");
console.log("Client: Testing the same client code with MageFactory");
clientCode(new MageFactory_1.MageFactory());
