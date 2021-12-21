import { Armor } from "../CharacterResources/ResourceGroups/Armor";
import { Weapon } from "../CharacterResources/ResourceGroups/Weapon";
import { AbstractFactory } from "./AbstractFactory";
import { OrcArmor } from "../CharacterResources/ResourceVariants/Armors/OrcArmor";
import { Axe } from "../CharacterResources/ResourceVariants/Weapons/Axe";

export class OrcFactory implements AbstractFactory {
  createWeapon(): Weapon {
    return new Axe();
  }

  createArmor(): Armor {
    return new OrcArmor();
  }
}
