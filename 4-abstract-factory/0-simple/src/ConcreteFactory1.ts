import { AbstractFactory } from "./AbstractFactory";
import { ProductFamilyA } from "./ProductFamilyA";
import { ProductFamilyB } from "./ProductFamilyB";
import { ProductVariantA1 } from "./ProductVariantA1";
import { ProductVariantB1 } from "./ProductVariantB1";

export class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): ProductFamilyA {
    return new ProductVariantA1();
  }

  public createProductB(): ProductFamilyB {
    return new ProductVariantB1();
  }
}
