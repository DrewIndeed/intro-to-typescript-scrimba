import { Burger } from "./burger.model";
import { Kebab } from "./kebab.model";
import { Pizza } from "./pizza.model";
import { PRODUCT_TYPE } from "./product_type.enum";
import { Product } from "./product.interface";

export class ProductManager {
  constructor() {}

  createProduct(type: string): Product {
    switch (type) {
      case PRODUCT_TYPE.PIZZA:
        return new Pizza();
      case PRODUCT_TYPE.KEBAB:
        return new Kebab();
      case PRODUCT_TYPE.BURGER:
        return new Burger();
      default:
        throw new Error("Error: Product invalid!");
    }
  }
}
