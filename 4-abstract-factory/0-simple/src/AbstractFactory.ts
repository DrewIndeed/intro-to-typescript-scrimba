import { ProductFamilyA } from "./ProductFamilyA";
import { ProductFamilyB } from "./ProductFamilyB";

export interface AbstractFactory {
  createProductA(): ProductFamilyA;
  createProductB(): ProductFamilyB;
}
