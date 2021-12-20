import { ConcreteProduct2 } from "./concrete_product_2";
import { Creator } from "./creator";
import { Product } from "./product.interface";

export class ConcreteCreator2 extends Creator {
  protected factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}