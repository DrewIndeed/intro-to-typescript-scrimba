import { Armor } from "../CharacterResources/ResourceGroups/Armor";
import { Weapon } from "../CharacterResources/ResourceGroups/Weapon";
import { AbstractFactory } from "./AbstractFactory";
import { Cloak } from "../CharacterResources/ResourceVariants/Armors/Cloak";
import { MageFireball } from "../CharacterResources/ResourceVariants/Weapons/MageFireball";

export class MageFactory implements AbstractFactory {
  createWeapon(): Weapon {
    return new MageFireball();
  }

  createArmor(): Armor {
    return new Cloak();
  }
}
