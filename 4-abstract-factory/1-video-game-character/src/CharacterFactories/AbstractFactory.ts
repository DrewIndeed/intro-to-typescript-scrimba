import { Armor } from "../CharacterResources/ResourceGroups/Armor";
import { Weapon } from "../CharacterResources/ResourceGroups/Weapon";

export interface AbstractFactory {
  createWeapon(): Weapon;
  createArmor(): Armor;
}
