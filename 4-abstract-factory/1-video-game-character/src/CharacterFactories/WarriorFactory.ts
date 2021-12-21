import { Armor } from "../CharacterResources/ResourceGroups/Armor";
import { Weapon } from "../CharacterResources/ResourceGroups/Weapon";
import { AbstractFactory } from "./AbstractFactory";
import { Sword } from "../CharacterResources/ResourceVariants/Weapons/Sword";
import { BodyArmor } from "../CharacterResources/ResourceVariants/Armors/BodyArmor";

export class WarriorFactory implements AbstractFactory {
  createWeapon(): Weapon {
    return new Sword();
  }

  createArmor(): Armor {
    return new BodyArmor();
  }
}
