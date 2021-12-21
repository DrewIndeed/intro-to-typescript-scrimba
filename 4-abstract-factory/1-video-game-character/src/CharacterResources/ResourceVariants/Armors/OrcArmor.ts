import { Armor } from "../../ResourceGroups/Armor";
import { Weapon } from "../../ResourceGroups/Weapon";

export class OrcArmor implements Armor {
  public useArmor(): string {
    return "Super Orc Armor";
  }

  useArmorWithWeapon(weapon: Weapon): string {
    return `Super Orc Armor with ${weapon}`;
  }
}
