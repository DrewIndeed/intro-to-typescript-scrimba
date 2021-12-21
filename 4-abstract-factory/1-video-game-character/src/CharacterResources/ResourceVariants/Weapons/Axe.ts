import { Weapon } from "../../ResourceGroups/Weapon";

export class Axe implements Weapon {
  public useWeapon(): string {
    return "Super Axe";
  }
}
