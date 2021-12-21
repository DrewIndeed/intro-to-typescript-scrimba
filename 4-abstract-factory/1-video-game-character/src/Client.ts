import { AbstractFactory } from "./CharacterFactories/AbstractFactory";
import { WarriorFactory } from "./CharacterFactories/WarriorFactory";
import { OrcFactory } from "./CharacterFactories/OrcFactory";
import { MageFactory } from "./CharacterFactories/MageFactory";

function clientCode(mainFactory: AbstractFactory): void {
  const characterWeapon = mainFactory.createWeapon();
  const characterArmor = mainFactory.createArmor();
  console.log(characterWeapon.useWeapon());
  console.log(characterArmor.useArmor());
  console.log(characterArmor.useArmorWithWeapon(characterWeapon));
}

console.log("Client: Testing client code with WarriorFactory");
clientCode(new WarriorFactory());

console.log("----------------");

console.log("Client: Testing the same client code with OrcFactory");
clientCode(new OrcFactory());

console.log("----------------");

console.log("Client: Testing the same client code with MageFactory");
clientCode(new MageFactory());
