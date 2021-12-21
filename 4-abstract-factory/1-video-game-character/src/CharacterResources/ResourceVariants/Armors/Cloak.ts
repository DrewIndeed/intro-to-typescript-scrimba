import { Armor } from "../../ResourceGroups/Armor";
import { Weapon } from "../../ResourceGroups/Weapon";

export class Cloak implements Armor {
  public useArmor(): string {
    return "Super Cloak";
  }

  useArmorWithWeapon(weapon: Weapon): string {
    return `Super Cloak with ${weapon.useWeapon()}`;
  }
}
