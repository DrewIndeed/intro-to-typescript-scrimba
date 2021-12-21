import { Weapon } from "../../ResourceGroups/Weapon";

export class Sword implements Weapon {
  public useWeapon(): string {
    return "Super Sword";
  }
}
