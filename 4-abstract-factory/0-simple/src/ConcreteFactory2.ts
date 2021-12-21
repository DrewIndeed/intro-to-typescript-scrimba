import { AbstractFactory } from "./AbstractFactory";
import { ProductFamilyA } from "./ProductFamilyA";
import { ProductFamilyB } from "./ProductFamilyB";
import { ProductVariantA2 } from "./ProductVariantA2";
import { ProductVariantB2 } from "./ProductVariantB2";

export class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): ProductFamilyA {
    return new ProductVariantA2();
  }

  public createProductB(): ProductFamilyB {
    return new ProductVariantB2();
  }
}
