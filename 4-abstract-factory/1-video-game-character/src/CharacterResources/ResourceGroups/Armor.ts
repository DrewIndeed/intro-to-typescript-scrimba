import { Weapon } from "./Weapon";

export interface Armor {
  useArmor(): string;
  useArmorWithWeapon(weapon: Weapon): string;
}
