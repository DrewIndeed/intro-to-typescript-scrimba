import { AbstractFactory } from "./AbstractFactory";
import { ConcreteFactory1 } from "./ConcreteFactory1";
import { ConcreteFactory2 } from "./ConcreteFactory2";

function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productA.FamilyFunctionA());
  console.log(productB.FamilyFunctionB());
}

console.log("Client: Testing client code with ConcreteFactory1");
clientCode(new ConcreteFactory1());

console.log("----------------");

console.log("Client: Testing the same client code with ConcreteFactory2");
clientCode(new ConcreteFactory2());
