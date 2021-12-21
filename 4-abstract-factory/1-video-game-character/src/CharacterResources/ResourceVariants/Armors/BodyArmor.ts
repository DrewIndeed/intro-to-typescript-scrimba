import { Armor } from "../../ResourceGroups/Armor";
import { Weapon } from "../../ResourceGroups/Weapon";

export class BodyArmor implements Armor {
  public useArmor(): string {
    return "Super Body Armor";
  }

  useArmorWithWeapon(weapon: Weapon): string {
    return `Super Bodu Armor with ${weapon.useWeapon()}`;
  }
}
