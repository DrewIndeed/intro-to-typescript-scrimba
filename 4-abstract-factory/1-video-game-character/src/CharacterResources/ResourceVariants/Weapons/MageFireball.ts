import { Weapon } from "../../ResourceGroups/Weapon";

export class MageFireball implements Weapon {
  public useWeapon(): string {
    return "Super MageFireball";
  }
}
